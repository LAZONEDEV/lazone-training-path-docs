# Hooks avancés et Projet To‑Do

## Objectifs d'apprentissage
- Utiliser `useRef` pour référencer un élément DOM et stocker des valeurs mutables persistées entre rendus
- Utiliser `useCallback` pour mémoriser des callbacks dépendants et réduire les re-rendus inutiles
- Structurer une petite application To‑Do réutilisable et testable

## Concepts clés

### useRef: référence DOM et valeur mutable

`useRef` retourne un objet stable `{ current: T }` qui persiste entre rendus sans provoquer de re-rendu quand `current` change.

Cas d’usage:
- Focus d’un champ input après ajout.
- Stocker un identifiant incrémental, un timer, ou la dernière valeur.

```tsx
import { useRef, useState } from "react"

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [value, setValue] = useState("")

  function focus() {
    inputRef.current?.focus()
  }

  return (
    <div>
      <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={focus}>Focus</button>
    </div>
  )
}
```

### useCallback: mémorisation de fonctions

À chaque re-rendu, les fonctions sont recréées. `useCallback(fn, deps)` renvoie la même référence entre rendus si les dépendances n’ont pas changé.

Cas d’usage:
- Passer un handler à un composant mémoïsé pour éviter sa re-rendu.
- Stabiliser les dépendances d’un effet ou d’un memo.

```tsx
import { useCallback, useState } from "react"

function List({ onSelect }: { onSelect: (id: string) => void }) {
  // ... rend une liste et appelle onSelect(id)
  return null
}

export default function Container() {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = useCallback((id: string) => {
    setSelected(id)
  }, [])

  return <List onSelect={handleSelect} />
}
```

Pièges:
- Mémoriser un callback inutilement n’apporte rien et peut compliquer le code.
- Oublier des dépendances mène à des valeurs obsolètes (stale closures). Déclarer toutes les dépendances.

## Projet guidé: Application To‑Do

Spécifications:
- Saisir une tâche via un input; Enter ou bouton pour ajouter.
- Focus revenir sur l’input après ajout.
- Lister les tâches avec une `key` stable.
- Supprimer une tâche.
- Éviter des re-rendus superflus via `useCallback`.

Structure suggérée:

```tsx
import { useCallback, useMemo, useRef, useState } from "react"

type Todo = { id: string; title: string }

function TodoItem({ todo, onRemove }: { todo: Todo; onRemove: (id: string) => void }) {
  return (
    <li>
      {todo.title}
      <button onClick={() => onRemove(todo.id)}>Supprimer</button>
    </li>
  )
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState("")
  const inputRef = useRef<HTMLInputElement | null>(null)
  const seqRef = useRef(0) // identifiant incrémental persistant

  const add = useCallback(() => {
    if (!title.trim()) return
    const id = String(++seqRef.current)
    setTodos((prev) => [...prev, { id, title: title.trim() }])
    setTitle("")
    inputRef.current?.focus()
  }, [title])

  const remove = useCallback((id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const canAdd = useMemo(() => title.trim().length > 0, [title])

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && canAdd) add()
  }

  return (
    <div>
      <input ref={inputRef} value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={onKeyDown} />
      <button onClick={add} disabled={!canAdd}>Ajouter</button>
      <ul>
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} onRemove={remove} />
        ))}
      </ul>
    </div>
  )
}
```

Points d’attention:
- `seqRef` ne provoque pas de re-rendu: idéal pour compteurs/ids.
- `add` et `remove` sont mémoïsés; leurs dépendances sont explicites.
- `key={t.id}` et non `index`.

## Contrôle
- Expliquer la différence entre `useRef` et `useState` et quand choisir l’un ou l’autre.
- Identifier les dépendances correctes pour `useCallback` dans le projet To‑Do.
- Revue: vérifier immutabilité, clés stables, focus via ref, handlers mémoïsés.

## Voir aussi
- [Maîtriser les méthodes de rendu](../module-2/01-methodes-rendu-nextjs.md)
- [Réutilisabilité et Architecture](../module-3-architecture-etat-global/01-reutilisabilite-architecture.md)

## Références
- React Docs – useRef: https://react.dev/reference/react/useRef
- React Docs – useCallback: https://react.dev/reference/react/useCallback
- Chakra UI: https://chakra-ui.com/
- shadcn/ui: https://ui.shadcn.com/
