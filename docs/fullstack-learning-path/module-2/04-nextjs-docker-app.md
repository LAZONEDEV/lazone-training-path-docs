# 04 - Déployer une application Next.js avec Docker

Ce chapitre explique comment containeriser et déployer une application Next.js à l’aide de Docker. Tu apprendras à créer une image Docker optimisée, à lancer un conteneur et à préparer ton application pour la production.

---

## Objectifs d'apprentissage

- Comprendre les avantages du déploiement avec Docker
- Créer un Dockerfile performant pour Next.js
- Construire et lancer un conteneur Docker
- Gérer l’environnement de production
- Optimiser l’image et le workflow Docker

---

## Voir aussi

- `../00-plan-du-parcours.md`
- `./01-methodes-rendu-nextjs.md`
- `./02-nextjs-seo.md`
- `./03-metadata-api.md`
- `../module-4-backend-api/01-nodejs-api-rest.md`

---

## 1. Pourquoi Docker pour Next.js ?

Docker permet de créer un environnement isolé et reproductible, garantissant que ton application Next.js fonctionne de manière identique partout : local, staging, production.

### Avantages :

- Portabilité : même image partout
- Isolation des dépendances
- Facilité d’intégration en CI/CD
- Contrôle précis de l’environnement (Node.js, variables, etc.)

---

## 2. Préparer ton application Next.js

Assure-toi que ton projet Next.js est prêt pour la production :

- Définir la commande de build : `next build`
- Définir la commande de démarrage : `next start` (serveur Next.js en mode production)
- Gérer les variables d’environnement dans un fichier `.env.production` ou via Docker

---

## 3. Dockerfile : créer l’image Docker

Voici un Dockerfile simple et efficace pour une app Next.js :

```dockerfile
# Étape 1 : builder l'application
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers package.json et package-lock.json (ou yarn.lock)
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le reste du code source
COPY . .

# Construire l'app Next.js
RUN npm run build

# Étape 2 : image finale légère
FROM node:18-alpine AS runner

WORKDIR /app

# Copier uniquement les fichiers nécessaires pour la prod
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Exposer le port sur lequel Next.js va écouter
EXPOSE 3000

# Lancer l'application en mode production
CMD ["npm", "start"]
```

---

## 4. Construire et lancer le conteneur

### Construire l’image Docker

```bash
docker build -t monapp-nextjs .
```

### Lancer le conteneur

```bash
docker run -p 3000:3000 monapp-nextjs
```

- L’app est accessible sur [http://localhost:3000](http://localhost:3000)

---

## 5. Gérer les variables d’environnement

Pour passer des variables (API keys, configs) en production, plusieurs options :

- Utiliser un fichier `.env.production` dans ton projet
- Passer les variables via la ligne de commande Docker :

```bash
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=https://api.monsite.com monapp-nextjs
```

- Utiliser un fichier `.env` externe avec `--env-file`

---

## 6. Optimisations avancées

### Multistage build pour réduire la taille

Le Dockerfile ci-dessus utilise déjà un multistage build. Cela permet de ne copier que ce qui est nécessaire dans l’image finale, réduisant sa taille.

### Utiliser `next export` (optionnel)

Si tu as une app statique (SSG), tu peux générer une version exportée :

```bash
npm run export
```

Puis servir le dossier `out` avec un serveur HTTP léger (ex: `nginx`).

---

## 7. Déploiement sur une plateforme cloud

### Exemples de plateformes compatibles Docker

- **AWS ECS / EKS**
- **Google Cloud Run**
- **Azure Container Instances**
- **DigitalOcean App Platform**
- **Heroku (avec buildpacks Docker)**

Ces plateformes permettent d’importer l’image Docker et de lancer ton application facilement.

---

## Références

- Next.js Docs – Déploiement: https://nextjs.org/docs
- Docker Docs – Guides: https://docs.docker.com/
- Next.js Example – with-docker: https://github.com/vercel/next.js/tree/canary/examples/with-docker
- Chakra UI: https://chakra-ui.com/
- shadcn/ui: https://ui.shadcn.com/

---

## 8. Résumé

| Étape                | Commandes clés                             |
| -------------------- | ------------------------------------------ |
| Préparer le projet   | `npm run build`, variables d’env           |
| Créer l’image Docker | `docker build -t monapp-nextjs .`          |
| Lancer le conteneur  | `docker run -p 3000:3000 monapp-nextjs`    |
| Variables d’env      | `-e VAR=valeur` ou `--env-file .env`       |
| Déployer en cloud    | Importer l’image Docker dans la plateforme |

---

## Annexes

### Exemple `.dockerignore`

Pour éviter de copier les fichiers inutiles dans l’image :

```
node_modules
npm-debug.log
Dockerfile
.dockerignore
.git
.gitignore
.env
```
