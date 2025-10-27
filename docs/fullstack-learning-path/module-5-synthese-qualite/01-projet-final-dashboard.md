# Projet Final: Dashboard et Revue de Code

## Objectifs d'apprentissage
- Intégrer SSR/Route Handler/Context API
- Mettre en place une revue de code structurée

## Plan
- Architecture cible: pages, composants, données
- Critères de revue: performance, lisibilité, sécurité

## Architecture cible

Objectif: un dashboard Next.js (App Router) qui agrège des données côté serveur (SSR) depuis des Route Handlers et présente une UI claire, accessible et performante.

- App Router (`app/`) pour composer pages, layouts, segments.
- Data fetching côté serveur avec `fetch` et stratégies de cache (`no-store`, `force-cache`, `revalidate`).
- Route Handlers (`app/api/*/route.ts`) pour simuler des données (GET/POST).
- État global (thème/paramètres) via Context Provider au niveau `app/layout.tsx`.
- Séparation UI vs data (`components/` vs `lib/`).

## Implémentation: SSR et Route Handlers

Exemple de page SSR qui consomme un endpoint interne `/api/metrics`:

```tsx
// app/dashboard/page.tsx
export default async function DashboardPage() {
  // fetch côté serveur par défaut; ajuster le cache selon le besoin
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/metrics`, {
    // next: { revalidate: 60 }, // ISR si besoin
    cache: 'no-store', // SSR strict
  })
  if (!res.ok) {
    // Message clair côté UI en cas d’erreur de données
    return <p>Impossible de charger les métriques</p>
  }
  const data = await res.json()
  return (
    <main>
      <h1>Dashboard</h1>
      <section>
        <p>Utilisateurs: {data.users}</p>
        <p>Conversions: {data.conversions}</p>
      </section>
    </main>
  )
}
```

Route Handler GET simulant des métriques:

```ts
// app/api/metrics/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  // Simulation côté serveur; remplacer plus tard par une vraie source
  return NextResponse.json({ users: 1280, conversions: 76 })
}
```

Route Handler POST pour enregistrer une note utilisateur:

```ts
// app/api/notes/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body.text !== 'string') {
    return NextResponse.json({ error: "Invalid 'text'" }, { status: 400 })
  }
  // Simuler une persistance
  return NextResponse.json({ id: Date.now().toString(), text: body.text }, { status: 201 })
}
```

## État global et theming (Context)

Intégrer un Provider de thème (cf. `module-3/02-context-etat-global.md`) au niveau du layout racine pour propager l’état global.

```tsx
// app/layout.tsx
import { ThemeProvider } from '@/app/theme-context'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## Structure de projet suggérée

```
app/
  layout.tsx
  dashboard/
    page.tsx          // SSR principal
  api/
    metrics/
      route.ts        // GET: métriques simulées
    notes/
      route.ts        // POST: créer une note
components/
  Card.tsx
  Stat.tsx
lib/
  fetchers.ts         // appels fetch réutilisables
  types.ts            // types partagés
```

## Checklist de revue de code

- Performance
  - Data: éviter les fetch côté client si SSR possible; choisir cache approprié (SSR/SSG/ISR).
  - UI: éviter re-rendus inutiles (props stables, `useCallback` si besoin).
  - Images et assets optimisés; scripts inutiles supprimés.
- Accessibilité
  - Sémantique HTML: `main`, `nav`, `button`, `label`.
  - Focus visible, navigation clavier, aria-labels pertinents.
  - Contraste suffisant; textes alternatifs pour images.
- Sécurité
  - Validation d’entrée côté serveur; messages d’erreur génériques.
  - Pas de secrets côté client; variables d’env correctement nommées.
  - En-têtes HTTP par défaut (via plateforme ou middleware) si possible.
- Lisibilité/Architecture
  - Séparation composants vs data; petits composants réutilisables.
  - Nommage clair, typage strict, pas d’objets `any`.
  - Tests manuels documentés (curl/Postman) et scénarios critiques.
- DX
  - Scripts `dev/build` fonctionnels; README minimal pour lancer.
  - Messages d’erreurs/logs utiles et concis.

## Pratique
- Implémentation d’un dashboard minimal avec données simulées

## Contrôle
- Revue croisée et checklist de qualité

## Voir aussi
 - [Maîtriser les méthodes de rendu](../module-2/01-methodes-rendu-nextjs.md)
 - [Metadata API](../module-2/03-metadata-api.md)
 - [Node.js et les bases de l’API REST](../module-4-backend-api/01-nodejs-api-rest.md)

## Références
- Next.js – Data Fetching: https://nextjs.org/docs/app/building-your-application/data-fetching
- OWASP Cheat Sheets: https://cheatsheetseries.owasp.org/
- Code Review Guidelines (Google): https://google.github.io/eng-practices/review/
