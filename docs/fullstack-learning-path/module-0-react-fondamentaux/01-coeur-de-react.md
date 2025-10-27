# Le cœur de React (Composants et Rendu)

## Objectifs d'apprentissage
- Comprendre la structure d'un composant fonctionnel
- Maîtriser les props (immutables) et `children`
- Écrire du JSX valide et comprendre sa transpilation
- Comprendre le re-rendu et la réconciliation (Virtual DOM)
- Connaître les pièges courants (nommage de composants, clés, éléments parents)

## Concepts clés

Un composant fonctionnel est une fonction JavaScript qui retourne du JSX. Les props sont des données en lecture seule passées par le parent. React transforme le JSX en appels `React.createElement`, puis calcule un arbre virtuel (Virtual DOM) pour décider quoi mettre à jour dans le DOM réel.

```tsx
// Un composant fonctionnel simple
type TitleProps = { text: string }

export function Title({ text }: TitleProps) {
  // Les props sont immuables: on ne doit jamais faire props.text = ...
  return <h1>{text}</h1>
}

// Utilisation
// <Title text="Bienvenue" />
```

Points importants:
- Un composant doit commencer par une majuscule: `Title`, pas `title`.
- Un composant retourne un seul élément parent (utiliser `<>...</>` si nécessaire).
- Les props sont immuables; pour l'état interne, on utilisera `useState` (module suivant).

### JSX et expressions

Le JSX permet d'exprimer l'UI de façon déclarative. On peut interpoler des expressions entre `{ }`.

```tsx
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  // Les expressions JS dans JSX sont entourées de {}
  return (
    <article className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </article>
  )
}
```

### Composition et `children`

```tsx
function Button({ children }: { children: React.ReactNode }) {
  return <button className="btn">{children}</button>
}

function Toolbar() {
  return (
    <div className="toolbar">
      <Button>Enregistrer</Button>
      <Button>Annuler</Button>
    </div>
  )
}
```

### Re-rendu et Virtual DOM

React re-rend un composant quand ses props changent ou que son parent re-rend (et plus tard, quand son état change). Le Virtual DOM est un arbre calculé en mémoire; React reconcilie cet arbre avec le DOM réel pour appliquer le minimum de modifications.

Pièges:
- Modifier des objets/arrays passés en props provoque des bugs (immutabilité recommandée).
- Des re-rendus inutiles peuvent venir de nouvelles références créées à chaque rendu (voir `useCallback` plus tard).

## Plan détaillé
1. Composants fonctionnels et props
   - Définition, signature, immutabilité.
   - Démo: `Title`, `Card`, `Button`.
2. JSX et expressions
   - Parent unique, fragments, attributs, classes, expressions.
3. Composition et `children`
   - Réutilisabilité par composition.
4. Re-rendu et Virtual DOM
   - Déclencheurs de re-rendu, réconciliation, pièges courants.

## Pratique
- Créer `Header`, `Button`, `Card` et `Toolbar` en suivant les exemples.
- Ajouter un `Avatar` qui accepte `src`, `alt` et affiche une image avec balise `<img>` et texte alternatif.
- Écrire un petit `Layout` qui compose `Header` + `Card`.

## Contrôle
- Donner 3 règles pour écrire du JSX valide.
- Expliquer pourquoi les props sont immuables et comment passer des `children`.
- Revue de code: vérifier la majuscule des noms, parent unique, usage de `children`.

## Voir aussi
- [Réutilisabilité et Architecture](../module-3-architecture-etat-global/01-reutilisabilite-architecture.md)
- [Maîtriser les méthodes de rendu](../module-2/01-methodes-rendu-nextjs.md)

## Références
- React Docs: https://react.dev/
- Next.js – Rendering: https://nextjs.org/docs/app/building-your-application/rendering
- Chakra UI: https://chakra-ui.com/
- shadcn/ui: https://ui.shadcn.com/
