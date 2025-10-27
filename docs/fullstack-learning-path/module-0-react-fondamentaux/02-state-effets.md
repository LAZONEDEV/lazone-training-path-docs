# Maîtrise du State et des Effets

## Objectifs d'apprentissage
- Comprendre la différence entre variable locale et état React
- Maîtriser `useState` (mise à jour asynchrone, mises à jour fonctionnelles, batching)
- Gérer les événements et formulaires contrôlés
- Rendre des listes avec des clés stables et éviter les pièges
- Utiliser `useEffect` pour les effets de bord (dépendances, nettoyage)

## Plan
- `useState` et mise à jour asynchrone
- Gestion d’événements et formulaires contrôlés
- Listes, clés et rendu conditionnel

## Concepts clés

L’« état » (state) est une donnée qui déclenche un re-rendu lorsqu’elle change via son setter. Une simple variable locale ne déclenche pas de re-rendu.

```tsx
import { useState } from "react"

export default function Counter() {
  // Déclare un état avec valeur initiale 0
  const [count, setCount] = useState(0)

  function inc() {
    // Les mises à jour peuvent être regroupées (batching)
    setCount((c) => c + 1) // mise à jour fonctionnelle sûre
  }

  return (
    <button onClick={inc}>Compteur: {count}</button>
  )
}
```

Points importants:
- Les mises à jour d’état sont asynchrones et peuvent être batchées.
- Utiliser la forme fonctionnelle `setCount(prev => ...)` quand la nouvelle valeur dépend de l’ancienne.
- Ne jamais muter directement des objets/arrays d’état (utiliser la copie immuable).

### Gestion d’événements et formulaires contrôlés

Un « formulaire contrôlé » stocke la valeur dans l’état du composant.

```tsx
import { useState } from "react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Utiliser les valeurs d’état ici
    // TODO: appeler une API ou valider
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Mot de passe
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Se connecter</button>
    </form>
  )
}
```

### Listes, clés et rendu conditionnel

Les clés doivent être stables et uniques par élément frère pour aider la réconciliation.

```tsx
type Todo = { id: string; title: string }

function TodoList({ items }: { items: Todo[] }) {
  if (items.length === 0) return <p>Aucune tâche</p>
  return (
    <ul>
      {items.map((it) => (
        <li key={it.id}>{it.title}</li> // Eviter key={index}
      ))}
    </ul>
  )
}
```

Pièges courants:
- Utiliser `index` comme `key` peut provoquer un état incorrect lors des insertions/suppressions.
- Muter le tableau (ex: `array.push`) au lieu de créer une copie (`setTodos(prev => [...prev, x])`).

### useEffect: effets de bord, dépendances et nettoyage

`useEffect` s’exécute après le rendu. Déclarer les dépendances nécessaires dans le tableau pour éviter les incohérences ou boucles infinies.

```tsx
import { useEffect, useState } from "react"

export default function Users() {
  const [users, setUsers] = useState<Array<{ id: number; name: string }>>([])

  useEffect(() => {
    let abort = new AbortController()
    async function load() {
      try {
        const res = await fetch("/api/users", { signal: abort.signal })
        const data = await res.json()
        setUsers(data)
      } catch (e) {
        // Ignorer les erreurs d’abandon
      }
    }
    load()
    return () => {
      // Nettoyage: annuler la requête si le composant se démonte
      abort.abort()
    }
  }, []) // dépendances: vide = lors du montage seulement

  return <pre>{JSON.stringify(users, null, 2)}</pre>
}
```

Bonnes pratiques:
- Déclarer toutes les dépendances utilisées dans l’effet (ou extraire la logique pure).
- Nettoyer les abonnements, timers, listeners dans la fonction de retour.
- Garder les effets focalisés sur les effets de bord; la logique de calcul pur reste hors effet.

## Pratique
- Implémenter: compteur, toggle, formulaire contrôlé (email/password).
- Rendre une liste de tâches avec `key` stable; ajouter/supprimer de manière immuable.
- Écrire un composant qui fetch des données une fois au montage avec `useEffect` et annulation.

## Contrôle
- Quiz rapide: différence variable vs état; quand utiliser la mise à jour fonctionnelle; dangers de `key=index`.
- Identifier les dépendances manquantes d’un effet et proposer la correction.

## Voir aussi
- [Le cœur de React](./01-coeur-de-react.md)
- [Maîtriser les méthodes de rendu](../module-2/01-methodes-rendu-nextjs.md)

## Références
- React Docs – useState: https://react.dev/reference/react/useState
- React Docs – useEffect: https://react.dev/reference/react/useEffect
- Chakra UI: https://chakra-ui.com/
- shadcn/ui: https://ui.shadcn.com/
