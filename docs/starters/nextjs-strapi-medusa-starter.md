---
sidebar_position: 1
title: NextJS Strapi MedusaJs avec Docker compose
---


# Guide Détaillé du starter: NextJS Strapi MedusaJS avec Docker Compose

 
## Configuration des Services dans Docker Compose

Commencez par créer un fichier `docker-compose.yml` en respectant la structure que vous avez fournie pour chaque service. Dans ce guide, nous examinerons chaque service individuellement :

### Service Strapi (`app_strapi`)

Le service Strapi est configuré pour construire à partir du répertoire `./content` avec son fichier d'environnement dans `./content/.env`. Assurez-vous que ce fichier d'environnement contient les configurations nécessaires pour Strapi, comme les informations de la base de données.

```yaml
services:
  app_strapi:
    build: ./content
    container_name: app_strapi
    env_file:
      - ./content/.env
    ports:
      - "1337:1337"
    networks:
      - app-net
    volumes:
      - ./content/src:/opt/app/src
    depends_on:
      - db
```

### Service Medusa (`medusa`)

Le service Medusa est construit à partir du répertoire `./medusa` avec son fichier d'environnement dans `./medusa/.env`. Le lancement de Medusa est configuré avec la commande `sh -c "yarn seed & yarn dev"`. Assurez-vous que le fichier d'environnement de Medusa contient les informations nécessaires pour la base de données et Redis.

```yaml
  medusa:
    build: ./medusa
    container_name: medusa
    env_file:
      - ./medusa/.env
    ports:
      - "9000:9000"
      - "7001:7001"
    volumes:
      - ./medusa/data:/app/data
      - ./medusa/src:/app/src
    networks:
      - app-net
    command: >
      sh -c "yarn seed & yarn dev"
    depends_on:
      - db
      - app_redis
```

### Service Base de Données (`db`)

Le service de base de données est construit à partir du répertoire `./db` avec son fichier d'environnement dans `./db/.env.database`. Assurez-vous que ce fichier d'environnement contient les configurations nécessaires pour la base de données PostgreSQL.

```yaml
  db:
    build: ./db
    container_name: db
    env_file:
      - ./db/.env.database
    expose:
      - "5432"
    ports:
      - "5432:5432"
    networks:
      - app-net
    volumes:
      - ./db/dbdata:/var/lib/postgresql/data
      - ./db/initdb.d:/docker-entrypoint-initdb.d
```

### Service Redis (`app_redis`)

Le service Redis est configuré pour utiliser l'image officielle de Redis. Aucun fichier d'environnement n'est spécifié ici, mais vous pouvez ajuster selon vos besoins.

```yaml
  app_redis:
    image: redis
    container_name: app_redis
    expose:
      - "6379"
    networks:
      - app-net
    volumes:
      - ./redis/redisData:/data
```

### Service Web (`app_web`)

Le service Web est construit à partir du répertoire `./web`. Assurez-vous que votre application Web est correctement configurée dans ce répertoire. Les dépendances sont installées à l'aide de l'entrée `"yarn", "dev"`.

```yaml
  app_web:
    build: ./web
    container_name: app_web
    expose:
      - "3000"
    ports:
      - "3000:3000"
    networks:
      - app-net
    volumes:
      - ./web:/app
    depends_on:
      - app_strapi
    entrypoint: ["yarn", "dev"]
```

## Lancement du Projet avec Docker Compose

Après avoir configuré votre `docker-compose.yml` conformément à votre structure, vous pouvez lancer le projet en utilisant la commande suivante dans le répertoire de votre projet :

```bash
docker-compose up
```

Cela lancera tous les services définis dans le fichier de composition, créant ainsi un environnement Docker cohérent pour votre application MedusaJS.

## Création d'un Utilisateur Medusa

Une fois le projet lancé, vous pouvez créer un utilisateur Medusa en utilisant la commande que vous avez fournie :

```bash
npx medusa user -e admin@sample.com -p sample
```

Assurez-vous d'exécuter cette commande dans le contexte de votre container Medusa ou utilisez l'outil approprié pour exécuter des commandes dans un container Docker.

```bash
docker exec -it medusa npx medusa user -e admin@sample.com -p Passpass1
```


