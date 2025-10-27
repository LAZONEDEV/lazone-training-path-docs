# Les bases des monorepos: avantages et cas d'utilisation

Cette section explore les concepts fondamentaux des monorepos, leurs avantages et les scénarios où ils sont particulièrement utiles.

## Objectifs d'apprentissage

- Comprendre le concept de monorepo
- Identifier les avantages et les défis des monorepos
- Maîtriser les outils et pratiques pour gérer efficacement un monorepo

## Plan du cours

1. Introduction aux monorepos
   - Définition et concepts clés
   - Comparaison avec les multi-repos
   - Cas d'utilisation typiques

2. Outils et technologies
   - Gestionnaires de packages (pnpm, Yarn workspaces)
   - Outils de build (Turborepo, Nx)
   - Gestion des dépendances

3. Bonnes pratiques
   - Structure de projet
   - Gestion des versions
   - CI/CD dans un monorepo
   - Stratégies de test

---

## Concepts clés

Un monorepo regroupe plusieurs applications et bibliothèques dans un **seul dépôt**, avec des dépendances partagées et des workflows unifiés. L’objectif est de favoriser la **réutilisabilité**, la **cohérence** et la **vitesse de développement** (caching, builds incrémentaux).

Comparaison rapide:
- Monorepo: un dépôt, visibilité globale, factorisation facilitée, tooling plus sophistiqué.
- Multi‑repo: dépôts séparés, isolation forte, versions indépendantes mais coordination plus coûteuse.

Cas d’usage typiques:
- Plusieurs apps (web, admin) partageant des librairies internes.
- Design system partagé (UI) et packages utilitaires (auth, api, validation).

---

## Outils et technologies

### pnpm workspaces (ou Yarn workspaces)

Déclarer les workspaces au niveau racine pour lier apps et packages entre eux.

```json
// package.json (racine)
{
  "name": "acme-monorepo",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev --parallel",
    "test": "turbo run test"
  }
}
```

Commentaires:
- `private: true` empêche la publication du root.
- Les routes `apps/*` et `packages/*` structurent la repo.
- Les scripts délèguent à Turborepo (ou Nx) la coordination.

### Turborepo (bases)

Turborepo orchestre les pipelines (build/dev/test), gère le cache et les dépendances inter‑packages.

```json
// turbo.json (racine)
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "dev": {
      "cache": false
    },
    "test": {}
  }
}
```

Commentaires:
- `dependsOn: ["^build"]` exécute le build des dépendances avant celui du package courant.
- `outputs` décrit ce qui est mis en cache (ex: `.next` ou `dist`).

### Nx (mention)

Nx propose des fonctionnalités comparables (graph de dépendances, cache, générateurs). Choix selon préférence d’équipe et écosystème.

---

## Structure de projet (exemple)

```
apps/
  web/            # Next.js app
  admin/          # Autre app
packages/
  ui/             # Design system interne
  config/         # Config partagée (eslint, tsconfig)
  utils/          # Utilitaires (formatage, fetch, validation)
package.json
turbo.json
pnpm-lock.yaml | yarn.lock
```

### Exemples de packages

```json
// packages/ui/package.json
{
  "name": "@acme/ui",
  "version": "0.1.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsup src/index.ts --dts --format cjs,esm",
    "dev": "tsup src/index.ts --watch"
  }
}
```

```json
// apps/web/package.json
{
  "name": "web",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@acme/ui": "workspace:*"
  }
}
```

Commentaires:
- `workspace:*` permet de lier la version du package localement.
- `tsup` n’est qu’un exemple de bundler rapide pour packages TS.

---

## Gestion des dépendances

- Préférer des versions alignées pour éviter les duplications (ex: React unique).
- Promouvoir les dépendances communes au root si partagées massivement (avec prudence).
- Utiliser le protocole `workspace:` pour pointer vers les packages internes.

## CI/CD dans un monorepo

- Mettre en cache les dossiers de build (`.next`, `dist`) entre jobs.
- N’exécuter que ce qui a changé (graph Turborepo/Nx).
- Publier les packages versionnés (changesets) si besoin de distribution.

## Bonnes pratiques

- **Bounded contexts**: éviter des packages fourre‑tout; responsabilités claires.
- **API stables** pour les packages (types TS stricts, changelog/semver).
- **Tests par package** + e2e par app.
- **Lint/format** unifiés via `packages/config`.

## Pièges courants

- Couplage circulaire entre packages.
- Propager des dépendances lourdes inutilement dans tous les packages.
- Mélanger runtime serveur/client dans un même package sans garde‑fou.

---

## Pratique

- Initialiser un monorepo avec `apps/web` (Next.js) et `packages/ui` (lib TS) + Turborepo.
- Consommer `@acme/ui` dans `apps/web` et mettre en place `dev`/`build` orchestrés.

## Contrôle

- Expliquer le rôle de `workspace:*` et l’intérêt du cache Turborepo.
- Décrire 3 risques fréquents dans un monorepo et comment les éviter.
