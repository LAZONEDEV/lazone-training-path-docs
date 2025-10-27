# Next.js 15 et SEO : Optimisation pour les moteurs de recherche

Dans un monde numérique où la concurrence est rude, **être visible sur Google est un enjeu stratégique**. Le SEO, ou **Search Engine Optimization**, désigne l’ensemble des techniques qui permettent à vos pages web d’apparaître en bonne position dans les résultats des moteurs de recherche.

Next.js 15, avec sa prise en charge des différents modes de rendu et sa structure modulaire (`app/`), offre des outils puissants pour créer des applications à la fois rapides et bien référencées.

---

## Objectifs d'apprentissage

- Comprendre les **principes fondamentaux du SEO**
- Identifier l’impact des **techniques de rendu sur le référencement**
- Savoir appliquer les **meilleures pratiques techniques SEO**
- Apprendre à **mesurer les performances SEO** et à les améliorer

---

## Voir aussi

- `../00-plan-du-parcours.md`
- `./01-methodes-rendu-nextjs.md`
- `./03-metadata-api.md`
- `./04-nextjs-docker-app.md`

---

## 1. Fondamentaux du SEO dans Next.js

### 1.1 – Méthodes de rendu & SEO : quel impact ?

Avant toute optimisation, il faut comprendre **comment une page est rendue** — car cela influence directement **comment les moteurs de recherche la voient**.

#### Petit rappel :

Un moteur de recherche comme Google **parcourt le web avec un robot (crawler)**. Ce robot visite vos pages, lit leur contenu HTML, suit les liens, puis indexe les pages dans les résultats.

#### Pourquoi c’est important ?

Si le contenu de votre page n’est pas visible lors du premier chargement HTML, le robot ne le verra pas — ce qui nuit au SEO. C’est le principal problème du **Client Side Rendering (CSR)**.

#### Comparatif des méthodes :

| Méthode | Vue par les moteurs              | Utilisation typique            | Compatible SEO |
| ------- | -------------------------------- | ------------------------------ | -------------- |
| **CSR** | Vide sans JS                     | Dashboards, SPA, interfaces UI | Faible        |
| **SSR** | Contenu complet                  | Pages personnalisées (profil…) | Excellente    |
| **SSG** | HTML généré à l’avance           | Blog, landing pages            | Excellente    |
| **ISR** | Comme SSG, avec mise à jour auto | Fiches produits, FAQ           | Excellente    |

En résumé :

- **Évitez CSR pour les pages publiques SEO**
- **Préférez SSG, SSR ou ISR pour un rendu SEO-compatible**

---

### 1.2 – Structure HTML et balisage sémantique

#### Qu’est-ce qu’une structure HTML “SEO-friendly” ?

Google ne comprend pas que “visuellement c’est joli”. Il lit le **HTML brut**. D’où l’importance d’avoir :

- Une balise `<title>` descriptive
- Une hiérarchie claire avec les balises `<h1>` à `<h6>`
- Des balises sémantiques comme `<article>`, `<nav>`, `<main>`…

#### Exemple de bonne structure

```html
<main>
  <h1>Nos services</h1>
  <section>
    <h2>Développement web</h2>
    <p>Nous créons des applications performantes...</p>
  </section>
</main>
```

**Mauvais exemple** : utiliser des `<div>` partout, sans aucune hiérarchie de titre.

---

### 1.3 – Robots.txt et Sitemap.xml

#### `robots.txt` : que fait-il ?

C’est un fichier qui indique aux moteurs **ce qu’ils ont le droit de visiter** ou non. Exemple :

```txt
User-agent: *
Allow: /
Disallow: /admin
```

- `User-agent: *` = tous les moteurs
- `Disallow: /admin` = ne pas indexer l’admin

#### `sitemap.xml` : pourquoi est-ce utile ?

C’est un fichier qui **liste toutes les URLs importantes de votre site**, pour guider l’indexation.

Ces fichiers sont à placer dans `/public` et peuvent être générés automatiquement avec le package `next-sitemap`.

---

### 1.4 – Canonical URLs : éviter les duplications

Le **contenu dupliqué** pénalise votre site. Si deux URLs montrent la même page (ex. `/produits/1` et `/produits?id=1`), Google peut être perdu.

Utilisez la balise `rel="canonical"` pour **indiquer la version “officielle”** :

```tsx
export const metadata = {
  alternates: {
    canonical: "https://monsite.com/produits/1",
  },
};
```
