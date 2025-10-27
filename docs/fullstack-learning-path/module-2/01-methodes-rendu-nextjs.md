# Maîtriser les méthodes de rendu dans Next.js : SSR, SSG, ISR et CSR

Next.js permet de créer des applications web performantes grâce à différentes méthodes de rendu : **CSR, SSR, SSG et ISR**. Depuis la version 13, deux approches coexistent dans les projets : le traditionnel `pages/` directory et le nouveau **`app/` directory** basé sur le **App Router**.

---

## Objectifs d'apprentissage

- Comprendre les méthodes de rendu disponibles dans Next.js
- Identifier les différences entre `pages/` et `app/` directory
- Implémenter CSR, SSR, SSG, ISR dans les deux systèmes
- Choisir la bonne stratégie selon le besoin métier
- Optimiser les performances

---

## Plan du cours

1. [Vue d’ensemble des méthodes de rendu](#1-vue-densemble-des-méthodes-de-rendu)
2. [Pages Directory vs App Directory](#2-pages-directory-vs-app-directory)
3. [Implémentation dans le Pages Directory (`pages/`)](#3-implémentation-dans-le-pages-directory-pages)
4. [Implémentation dans l’App Directory (`app/`)](#4-implémentation-dans-lapp-directory-app)
5. [Optimisation et cas d’usage](#5-optimisation-et-cas-dusage)

## Voir aussi

- [Plan du Parcours](../00-plan-du-parcours.md)
- [Next.js et SEO](./02-nextjs-seo.md)
- [Metadata API](./03-metadata-api.md)
- [Déployer une application Next.js avec Docker](./04-nextjs-docker-app.md)

---

## 1. Vue d’ensemble des méthodes de rendu

| Méthode | Description                         | Cas d’usage typique            |
| ------- | ----------------------------------- | ------------------------------ |
| **CSR** | Le rendu se fait 100% côté client   | Dashboard, contenu utilisateur |
| **SSR** | Rendu côté serveur à chaque requête | Page profil, recherche         |
| **SSG** | Rendu statique au moment du build   | Blog, landing page             |
| **ISR** | SSG avec régénération en background | Pages produit, FAQ             |

---

## 2. Pages Directory vs App Directory

| Caractéristique          | `pages/` Directory                     | `app/` Directory (App Router)                   |
| ------------------------ | -------------------------------------- | ----------------------------------------------- |
| Disponibilité            | Héritée (Next.js ≤12)                  | Depuis Next.js 13                               |
| Composants               | Basé sur les pages (`pages/*.js`)      | Basé sur les layouts, templates, segments       |
| Rendu statique/dynamique | `getStaticProps`, `getServerSideProps` | `fetch` avec options `cache`, `next.revalidate` |
| Routing                  | File-based, simple                     | File-based avec conventions (`route.js`)        |
| Support ISR              | Oui via `getStaticProps + revalidate`  | Oui via `fetch(..., { next: { revalidate } })`  |
| Charge côté client       | CSR via `useEffect` ou SWR             | CSR possible dans composants clients            |

---

## 3. Implémentation dans le Pages Directory (`pages/`)

### SSG avec `getStaticProps`

```tsx
// pages/blog/[slug].tsx
export async function getStaticPaths() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.example.com/posts/${params.slug}`);
  const post = await res.json();

  return {
    props: { post },
  };
}
```

### SSR avec `getServerSideProps`

```tsx
// pages/profile.tsx
export async function getServerSideProps(context) {
  const res = await fetch("https://api.example.com/me", {
    headers: {
      cookie: context.req.headers.cookie,
    },
  });
  const user = await res.json();

  return {
    props: { user },
  };
}
```

### ISR avec `revalidate`

```tsx
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/products");
  const products = await res.json();

  return {
    props: { products },
    revalidate: 60, // secondes
  };
}
```

---

## 4. Implémentation dans l’App Directory (`app/`)

### SSG par défaut

```tsx
// app/blog/[slug]/page.tsx
export default async function BlogPage({ params }) {
  const res = await fetch(`https://api.example.com/posts/${params.slug}`, {
    cache: "force-cache",
  });
  const post = await res.json();

  return <Article post={post} />;
}
```

> `cache: 'force-cache'` = SSG (statique)

---

### SSR avec `cache: 'no-store'`

```tsx
// app/profile/page.tsx
export default async function ProfilePage() {
  const res = await fetch("https://api.example.com/me", {
    cache: "no-store", // pas de cache = SSR
  });
  const user = await res.json();

  return <Profile user={user} />;
}
```

---

### ISR avec `revalidate`

```tsx
// app/products/page.tsx
export default async function ProductsPage() {
  const res = await fetch("https://api.example.com/products", {
    next: { revalidate: 60 }, // ISR : 60s
  });
  const products = await res.json();

  return <ProductList products={products} />;
}
```

---

### CSR (Client Components)

Créer un composant marqué `"use client"` pour récupérer les données côté client :

```tsx
// app/dashboard/page.tsx
import Dashboard from "./Dashboard";

export default function Page() {
  return <Dashboard />;
}

// app/dashboard/Dashboard.tsx
("use client");

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return data ? <DashboardView data={data} /> : <p>Chargement…</p>;
}
```

---

## 5. Optimisation et cas d’usage

| Page / contenu     | Méthode recommandée  | Emplacement                |
| ------------------ | -------------------- | -------------------------- |
| Page produit       | ISR (revalidate: 60) | `app/` ou `pages/`         |
| Accueil marketing  | SSG                  | `app/`                     |
| Tableau de bord    | CSR                  | `app/` avec `"use client"` |
| Profil utilisateur | SSR                  | `app/` ou `pages/`         |
| Blog               | SSG ou ISR           | `app/` ou `pages/`         |

**Conseils :**

- Privilégier `app/` pour les nouveaux projets
- Centraliser la logique dans des composants serveur sauf si l'interactivité l'impose
- Éviter les appels client inutiles si le serveur peut les gérer à la génération

---

## Conclusion

Next.js vous permet d’adapter le rendu de vos pages au contexte métier : **statisme, personnalisation, performance ou réactivité**.
En maîtrisant les différences entre `pages/` et `app/` directory, vous êtes armé pour créer des applications modernes, rapides et scalables.

---

## Pour aller plus loin

- [Rendering strategies – Next.js Docs](https://nextjs.org/docs/app/building-your-application/rendering)
- [App Router vs Pages Router](https://nextjs.org/docs/app/building-your-application/routing/comparison)
- [Data fetching in App Router](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)

---

# Module d’exercices interactifs

## Exercice 1 – Identifier la méthode de rendu

Pour chaque cas suivant, choisis la **meilleure méthode de rendu** :

| Cas d'usage                                       | CSR / SSR / SSG / ISR |
| ------------------------------------------------- | --------------------- |
| Page d’accueil d’un site e-commerce               |                       |
| Fiche produit avec stock mis à jour régulièrement |                       |
| Tableau de bord utilisateur après connexion       |                       |
| Blog personnel mis à jour 1 fois/semaine          |                       |
| Recherche d’articles filtrée par catégorie        |                       |

> Correction :
>
> - Accueil : **SSG**
> - Fiche produit : **ISR**
> - Dashboard : **CSR**
> - Blog : **SSG**
> - Recherche : **SSR**

---

## Exercice 2 – Devine le rendu

Regarde ces extraits et indique la méthode utilisée :

### A.

```ts
export async function getStaticProps() {
  return { props: { data }, revalidate: 10 };
}
```

Rendu : `___________`

---

### B.

```ts
const res = await fetch("...", { cache: "no-store" });
```

Rendu : `___________`

---

### C.

```ts
"use client";

useEffect(() => {
  fetch("/api/data");
}, []);
```

Rendu : `___________`

> Correction :
>
> - A : **ISR**
> - B : **SSR**
> - C : **CSR**

---

## Exercice 3 – Implémentation SSG dans l’app directory

Crée une page `/articles/[slug]` en utilisant `app/` et `force-cache` pour générer les pages statiques.

Structure à compléter :

```tsx
// app/articles/[slug]/page.tsx
export default async function ArticlePage({ params }) {
  const res = await fetch(`...`, {
    cache: "__________",
  });
  const article = await res.json();

  return <Article {...article} />;
}

# Tableau comparatif imprimable

| Critère                 | CSR                           | SSR                          | SSG                 | ISR                       |
| ----------------------- | ----------------------------- | ---------------------------- | ------------------- | ------------------------- |
| Où le rendu a lieu ?    | Navigateur                    | Serveur à chaque requête     | Build time          | Build time + revalidation |
| Données dynamiques      | Oui                           | Oui                          | Non                 | Oui (après revalidation)  |
| Temps de réponse        | Rapide après chargement JS    | Plus lent (serveur impliqué) | Très rapide         | Rapide (caché puis MAJ)   |
| Indexation SEO          | Moyenne                       | Excellente                   | Excellente          | Excellente                |
| Mise à jour des données | Au clic ou via fetch          | À chaque requête             | À chaque build      | Après un délai défini     |
| Idéal pour              | Dashboards, apps interactives | Contenu personnalisé         | Blog, landing pages | Fiches produits, FAQ      |
| Supporté dans `app/`    | "use client"                 | `cache: 'no-store'`          | `force-cache`       | `next.revalidate`         |
| Supporté dans `pages/`  | `useEffect`, SWR              | `getServerSideProps`         | `getStaticProps`    | `revalidate`              |
