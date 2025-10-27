# Réutilisabilité et Architecture

## Objectifs d'apprentissage
- Principes de composition vs héritage
- Bases d’un design system léger
- Erreurs courantes et règles des hooks

## Plan
- Patterns de composants réutilisables (Button, Card, Input)
- Constantes et tokens partagés
- Introduction UI: Chakra UI v3 et shadcn/ui (quand et comment)

## Architecture de composants

La réutilisabilité vient d’une API de composants claire et stable, et d’une séparation nette entre « présentation » et « logique ».

Principes:
- **Composition over inheritance**: composer des composants simples au lieu d’étendre.
- **Contrats de props**: types explicites et valeurs par défaut raisonnables.
- **Single Responsibility**: un composant fait peu de choses, bien.

```tsx
// Bouton présentational (stateless)
type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, variant = "primary", ...props }: ButtonProps) {
  const cls = variant === "primary" ? "btn btn-primary" : "btn btn-secondary"
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
```

Notes:
- Étendre les attributs natifs HTML permet d’obtenir une API alignée sur la plateforme.
- Les variantes simples peuvent s’appuyer sur des classes/Tokens.

### Container vs Presentational

Séparer la logique d’état/chargement (Container) de la présentation (Presentational) facilite les tests et la réutilisabilité.

```tsx
function UserView({ name }: { name: string }) {
  return <p>Bonjour, {name}</p>
}

function UserContainer() {
  // Logique: fetch ou contexte
  const name = "Alice"
  return <UserView name={name} />
}
```

## Tokens et constantes partagés

Définir une source unique de vérité pour les couleurs, espacements, typographies, rayons, etc.

```ts
// tokens.ts
export const colors = {
  primary: "#0EA5E9",
  secondary: "#64748B",
}

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
}
```

Les composants consomment ces tokens pour préserver la cohérence visuelle.

## Design System: quand et comment

Objectif: alignement visuel, accessibilité, vitesse de développement.

Approches:
- **Handmade**: composants maison + tokens (souple, mais maintenance).
- **Chakra UI v3**: système de styling, tokens/thème, composants accessibles.
- **shadcn/ui**: bibliothèques de composants basées sur Radix primitives + Tailwind, hautement personnalisables.

Choix:
- Projets orientés productivité/consistance → Chakra UI.
- Projets Tailwind-first cherchant un contrôle fin → shadcn/ui.

## Accessibilité (A11y)

Règles clés:
- Utiliser des éléments sémantiques (button, nav, main, label, etc.).
- Gérer le focus visible, la navigation clavier, et les labels.
- Annoncer le statut/erreurs via ARIA si nécessaire.

```tsx
// Input avec label accessible
type InputProps = {
  id: string
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({ id, label, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  )
}
```

## Pièges courants

- Mélanger logique et présentation de manière indissociable.
- Props trop génériques (ex: `any`, objets non typés) → API instable.
- Composants non contrôlés sans contract clair (difficiles à tester).
- Ne pas considérer l’accessibilité (ex: `<div onClick>` au lieu de `button`).

## Pratique
- Créer un petit set de composants réutilisables (sans dépendance, puis variantes avec Chakra/shadcn)

## Contrôle
- Revue de code centrée sur clarté, props et accessibilité

## Voir aussi
- [Gestion d’État Global avec Context API](./02-context-etat-global.md)
- [Maîtriser les méthodes de rendu](../module-2/01-methodes-rendu-nextjs.md)

## Références
- Chakra UI: https://chakra-ui.com/
- shadcn/ui: https://ui.shadcn.com/
- WAI-ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/
