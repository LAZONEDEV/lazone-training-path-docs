# Gestion d’État Global avec Context API

## Objectifs d'apprentissage
- Limites du prop drilling
- Context API et fournisseurs multiples
- Thème Light/Dark via contexte

## Plan
- Création d’un `ThemeContext`
- Consommation du contexte dans plusieurs composants
- Comparaison état local vs global

## Concepts clés

Le « prop drilling » survient quand on transmet des props à travers de nombreux niveaux alors qu’un composant profond seul en a besoin. La Context API fournit une manière de partager une valeur à l’arborescence sans passer explicitement des props.

### Définir un contexte et un Provider

```tsx
// theme-context.tsx
import React, { createContext, useMemo, useState, useContext } from "react"

type Theme = "light" | "dark"
type ThemeContextValue = {
  theme: Theme
  setTheme: (t: Theme) => void
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const value = useMemo(
    () => ({ theme, setTheme, toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")) }),
    [theme]
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
```

Notes importantes:
- Initialiser le contexte à `undefined` et lever une erreur dans un hook d’accès aide à détecter l’usage hors Provider.
- Mémoïser l’objet `value` avec `useMemo` évite des re-rendus en cascade.

### Consommer le contexte

```tsx
import { useTheme } from "./theme-context"

export function ThemeSwitch() {
  const { theme, toggle } = useTheme()
  return (
    <button onClick={toggle} aria-pressed={theme === "dark"}>
      {theme === "dark" ? "Mode sombre" : "Mode clair"}
    </button>
  )
}
```

### Plusieurs contextes et performance

- Spliter les contextes par domaine (thème, auth, locale) pour limiter les re-rendus.
- Éviter de recréer un objet `value` à chaque rendu: utiliser `useMemo` et fonctions stables (`useCallback`).
- Ne pas placer dans le contexte des valeurs qui changent très souvent si non nécessaire.

## Bonnes pratiques
- Préférer l’état local pour des données strictement locales; réserver le contexte à des données globales (thème, session, paramètres).
- Exposer un hook `useXxx()` au-dessus du contexte pour centraliser les garde-fous.
- Taper strictement la valeur de contexte (TypeScript) pour une API claire.

## Pièges courants
- Fournir `value={{ theme, setTheme }}` inline sans `useMemo` → re-rendus inutiles.
- Empiler trop de Providers sans documentation → lisibilité réduite (regrouper par domaine).
- Mettre dans le contexte des données dérivées faciles à recalculer localement.

## Pratique
- Projet Thème: switch, persistance, organisation des fichiers

## Contrôle
- Discussion guidée sur quand utiliser le contexte

## Voir aussi
- [Réutilisabilité et Architecture](./01-reutilisabilite-architecture.md)
- [Maîtriser les méthodes de rendu](../module-2/01-methodes-rendu-nextjs.md)

## Références
- React Docs – Context: https://react.dev/reference/react/Context
- Chakra UI – Theming: https://chakra-ui.com/docs/styled-system/theme
- shadcn/ui – Theming: https://ui.shadcn.com/docs/theming
