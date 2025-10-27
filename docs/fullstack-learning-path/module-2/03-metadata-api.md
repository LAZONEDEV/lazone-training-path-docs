# Metadata API dans NextJS 15 : Guide complet

NextJS 15 introduit une nouvelle façon simple et puissante de gérer les métadonnées de vos pages avec la **Metadata API**. Cette API facilite la configuration des titres, descriptions, images sociales et bien plus, tout en s’intégrant parfaitement avec l’architecture moderne du **App Router**.

---

## Objectifs d'apprentissage

- Maîtriser la Metadata API de NextJS 15
- Comprendre les différents types de métadonnées supportées
- Implémenter une gestion dynamique des métadonnées par route
- Optimiser le SEO et le partage social avec la Metadata API

---

## Plan du cours

1. [Introduction à la Metadata API](#1-introduction-à-la-metadata-api)
2. [Implémentation avancée](#2-implémentation-avancée)
3. [Optimisation et cas d'usage](#3-optimisation-et-cas-dusage)

## Voir aussi

- `../00-plan-du-parcours.md`
- `./01-methodes-rendu-nextjs.md`
- `./02-nextjs-seo.md`
- `./04-nextjs-docker-app.md`
- `../module-3-architecture-etat-global/01-reutilisabilite-architecture.md`

---

## 1. Introduction à la Metadata API

### Vue d'ensemble et nouveautés

La Metadata API est un **système intégré à Next.js 15 (App Router)** pour déclarer les métadonnées directement dans vos fichiers de route (`page.tsx` ou `layout.tsx`).

Avant Next.js 15, on gérait souvent les métadonnées avec :

- Le composant `<Head>` (dans `pages/`)
- Des librairies tierces (ex: `next-seo`)

Cette nouvelle API simplifie et standardise cette gestion.

---

### Configuration de base

Pour définir les métadonnées statiques d’une page, il suffit d’exporter un objet `metadata` dans le fichier de la route :

```tsx
// app/about/page.tsx
export const metadata = {
  title: "À propos - Mon site",
  description: "Découvrez notre mission et notre équipe",
};
```

Next.js générera automatiquement la balise `<title>` et la meta description correspondante dans le `<head>`.

---

### Types de métadonnées supportées

La Metadata API prend en charge un large éventail de métadonnées, dont :

| Type           | Description                                    |
| -------------- | ---------------------------------------------- |
| `title`        | Titre de la page                               |
| `description`  | Meta description                               |
| `icons`        | Favicon et icônes pour différentes plateformes |
| `openGraph`    | Métadonnées OG pour Facebook, LinkedIn…        |
| `twitter`      | Tags Twitter Card                              |
| `robots`       | Contrôle de l’indexation (index, follow…)      |
| `alternates`   | URLs alternatives (canonical, hreflang…)       |
| `viewport`     | Contrôle du viewport pour mobile               |
| `metadataBase` | Base URL pour résolution des URLs absolues     |

---

### Metadata API vs solutions alternatives

| Solution           | Avantages                         | Limites                          |
| ------------------ | --------------------------------- | -------------------------------- |
| Metadata API       | Intégrée, typée, déclarative      | Ne fonctionne qu’avec App Router |
| `<Head>`           | Compatible Pages Router           | Plus verbeux, moins structuré    |
| Librairies tierces | Fonctions avancées, réutilisables | Dépendances externes             |

---

## 2. Implémentation avancée

### Métadonnées statiques vs dynamiques

Par défaut, `metadata` peut être un objet statique exporté.

Pour des métadonnées basées sur des données dynamiques (ex: titre d’un article), exportez une fonction `generateMetadata` :

```tsx
// app/blog/[slug]/page.tsx
import { getPost } from "@/lib/posts";

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage,
          alt: `Image pour ${post.title}`,
        },
      ],
    },
  };
}
```

---

### Génération de métadonnées par route

Chaque page ou layout dans `app/` peut définir sa propre metadata, ce qui permet une **hiérarchie et une composition** simple :

```tsx
// app/layout.tsx
export const metadata = {
  title: "Mon site",
  description: "Bienvenue sur le site officiel",
};

// app/about/page.tsx
export const metadata = {
  title: "À propos - Mon site",
};
```

La page `/about` aura le titre “À propos - Mon site” mais héritera des autres métadonnées générales.

---

### Gestion des images et favicons

La propriété `icons` permet de déclarer plusieurs icônes :

```tsx
export const metadata = {
  icons: {
    icon: "/favicon.ico",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-touch-icon.png",
  },
};
```

Les images OpenGraph facilitent le partage sur les réseaux sociaux :

```tsx
openGraph: {
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Image de partage",
    },
  ],
}
```

---

### Intégration avec les réseaux sociaux

La Metadata API génère automatiquement les balises OG et Twitter Card :

- `<meta property="og:title" content="...">`
- `<meta name="twitter:card" content="summary_large_image">`

Cela améliore le rendu de vos liens partagés.

---

## 3. Optimisation et cas d'usage

### SEO et métadonnées

Les moteurs de recherche utilisent les métadonnées pour afficher vos pages dans les résultats :

- Un titre clair et unique attire plus de clics
- La description résume votre contenu
- Les balises `robots` permettent de contrôler l’indexation

---

### Performance et mise en cache

- La Metadata API est **rendu côté serveur** dans l’App Router, donc pas de flash de contenu ou décalage SEO
- Vous pouvez combiner avec ISR (`revalidate`) pour rafraîchir les métadonnées périodiquement

---

### Internationalisation (i18n)

La propriété `alternates` facilite la déclaration d’URLs alternatives par langue ou région :

```tsx
export const metadata = {
  alternates: {
    canonical: "https://monsite.com/fr",
    languages: {
      "en-US": "https://monsite.com/en",
      "fr-FR": "https://monsite.com/fr",
    },
  },
};
```

Cela aide Google à bien indexer les versions localisées.

---

### Bonnes pratiques et patterns

- Toujours définir un titre unique par page
- Utiliser `generateMetadata` pour les pages dynamiques
- Définir les balises OpenGraph et Twitter pour améliorer le partage
- Gérer les favicons via la propriété `icons` au lieu de balises `<link>` dans le `<head>`
- Exploiter `alternates` pour gérer le SEO multilingue

---

# Conclusion

La **Metadata API de Next.js 15** est un outil puissant pour gérer proprement et efficacement toutes les métadonnées SEO et sociales de votre application. Elle s’intègre parfaitement dans la nouvelle architecture `app/` et simplifie la maintenance, tout en améliorant la performance et le référencement naturel.

---

## Ressources complémentaires

- [Next.js Docs – Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Guide officiel sur SEO dans Next.js](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org – OpenGraph](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
