# Introduction à l'architecture moderne des applications JavaScript

Cette section explore les fondamentaux de l'architecture moderne des applications JavaScript, en se concentrant sur les meilleures pratiques et les patterns actuels.

## Objectifs d'apprentissage

- Comprendre l'évolution de l'architecture des applications JavaScript
- Découvrir les différents patterns architecturaux modernes
- Identifier les cas d'utilisation pour chaque approche architecturale

## Plan du cours

1. Introduction aux architectures modernes

   - Single Page Applications (SPA)
   - Server-Side Rendering (SSR)
   - Static Site Generation (SSG)
   - Incremental Static Regeneration (ISR)

2. Les patterns architecturaux

   - Architecture en couches
   - Architecture hexagonale
   - Micro-frontends
   - JAMstack

3. Bonnes pratiques et considérations
   - Performance et optimisation
   - Sécurité
   - Scalabilité
   - Maintenabilité

---

## Concepts clés

### SPA (Single Page Application)

Le rendu initial est servi avec un HTML minimal et l’application se charge côté client (JavaScript) pour hydrater et gérer la navigation. Rapide ensuite, mais le HTML initial est pauvre.

### SSR (Server-Side Rendering)

Le serveur rend l’HTML à chaque requête. Meilleure indexation SEO et time-to-first-byte explicite, utile pour contenu personnalisé.

### SSG (Static Site Generation)

Les pages sont pré-générées au build. Temps de réponse excellent et coût serveur faible, idéal pour contenu statique ou peu changeant.

### ISR (Incremental Static Regeneration)

Comme SSG mais avec régénération périodique en arrière-plan. Bon compromis pour contenu mis à jour régulièrement.

---

## Quand choisir quelle stratégie ?

| Cas d’usage                  | Stratégie recommandée |
| ---------------------------- | --------------------- |
| Landing/marketing            | SSG                   |
| Blog, documentation          | SSG/ISR               |
| Fiche produit évolutive      | ISR                   |
| Dashboard authentifié        | CSR (client)          |
| Page profil utilisateur      | SSR                   |
| Recherche filtrée            | SSR                   |

---

## Exemples Next.js (App Router)

### SSG (statique)

```tsx
// app/blog/[slug]/page.tsx
export default async function Blog({ params }: { params: { slug: string } }) {
  const res = await fetch(`https://api.example.com/posts/${params.slug}`, {
    cache: 'force-cache', // SSG
  })
  const post = await res.json()
  return <Article {...post} />
}
```

### SSR (pas de cache)

```tsx
// app/profile/page.tsx
export default async function Profile() {
  const res = await fetch('https://api.example.com/me', { cache: 'no-store' }) // SSR
  const me = await res.json()
  return <ProfileView {...me} />
}
```

### ISR (revalidate)

```tsx
// app/products/page.tsx
export default async function Products() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 }, // ISR
  })
  const products = await res.json()
  return <ProductList items={products} />
}
```

---

## Pièges courants

- Mélanger des dépendances client lourdes dans des pages qui pourraient être rendues côté serveur.
- Confondre ISR (revalidate) avec rafraîchissement côté client; attention à la cohérence des données.
- Oublier les implications SEO d’une page 100% CSR pour du contenu public.

---

## Pratique

- Pour 5 pages d’un site (Accueil, Blog, Article, Profil, Dashboard), choisir la stratégie de rendu et justifier.
- Implémenter une page de liste (ISR) et une page profil (SSR) avec des fetch adaptés.

---

## Contrôle

- Expliquer la différence entre SSG et ISR et quand préférer l’un ou l’autre.
- Donner un exemple concret où le SSR est préférable au CSR.
