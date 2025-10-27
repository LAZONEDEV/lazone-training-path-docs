# Mise en place d'un environnement de développement avec Docker

Cette section couvre la configuration et l'utilisation de Docker pour créer un environnement de développement robuste et reproductible.

## Objectifs d'apprentissage

- Comprendre les concepts fondamentaux de Docker
- Mettre en place un environnement de développement conteneurisé
- Maîtriser les bonnes pratiques Docker pour le développement

## Plan du cours

1. Introduction à Docker
   - Concepts de base de la conteneurisation
   - Architecture Docker
   - Installation et configuration

2. Configuration de l'environnement
   - Création de Dockerfiles
   - Docker Compose pour les applications multi-conteneurs
   - Gestion des volumes et des réseaux

3. Bonnes pratiques
   - Optimisation des images
   - Sécurité des conteneurs
   - Gestion des logs et monitoring
   - CI/CD avec Docker

---

## Concepts clés

- Image: modèle immuable (layers). Conteneur: instance en exécution d’une image.
- Layers: chaque instruction Dockerfile crée une couche; mutualisation via cache.
- Registry: dépôt d’images (Docker Hub, GHCR).

---

## Dockerfile (dev) pour Next.js

Objectif: environnement de dev avec hot‑reload. On monte le code en volume et on installe les dépendances dans le conteneur.

```Dockerfile
# Dockerfile.dev
FROM node:20-alpine

# Créer un utilisateur non-root pour la sécurité
RUN addgroup -S app && adduser -S app -G app
USER app

WORKDIR /app

# Copie des manifests pour profiter du cache d’installation
COPY --chown=app:app package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Installer pnpm si besoin, sinon utiliser npm/yarn
RUN corepack enable || true

# Installer les dépendances (si lock présent)
RUN if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; fi

# Exposer le port dev Next
EXPOSE 3000

# Démarrer en mode dev (le code sera monté en volume depuis l’hôte)
CMD ["npm","run","dev"]
```

`.dockerignore` minimal:

```
node_modules
.next
dist
.git
.DS_Store
```

---

## docker-compose pour le dev local

Permet de monter le dossier du projet et de bénéficier du hot‑reload Next.js.

```yaml
# docker-compose.dev.yml
version: "3.9"
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - PORT=3000
    # Monter le code depuis l’hôte (hot‑reload)
    volumes:
      - ./:/app
      - /app/node_modules
    # Optionnel: variables depuis un fichier
    env_file:
      - .env.local
```

Lancer:

```bash
docker compose -f docker-compose.dev.yml up --build
```

---

## Variables d’environnement

- Next.js lit `.env.local` en dev; ne pas commiter les secrets.
- En conteneur, utiliser `env_file` ou `environment` dans Compose.
- Préfixer en `NEXT_PUBLIC_` uniquement ce qui peut être exposé au navigateur.

---

## Bonnes pratiques

- Utilisateur non‑root, `WORKDIR` dédié.
- Ignorer `node_modules` dans `.dockerignore` et créer un volume anonyme `/app/node_modules` pour éviter la collision hôte.
- Cibler des images petites (`alpine`) pour le dev et la CI.
- Séparer Dockerfile dev et prod (multi‑stage pour prod).
- Logger sur stdout/stderr; confier la rotation à l’orchestrateur.

## Pièges courants

- Monter `node_modules` depuis l’hôte sur des OS différents (incompatibilités). Préférer le volume anonyme dans le conteneur.
- Ne pas fixer le port/host Next (utiliser `-p 3000:3000`).
- Oublier `.dockerignore` → images lourdes et builds lents.

---

## Pratique

- Créer `Dockerfile.dev` et `docker-compose.dev.yml` pour lancer une app Next.js en hot‑reload.
- Tester une variable `NEXT_PUBLIC_API_URL` lue côté client et côté serveur.

## Contrôle

- Expliquer la différence entre `.env.local` et les variables passées via Compose.
- Lister 3 optimisations pour réduire la taille d’une image et accélérer le build.
