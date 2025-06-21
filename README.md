# GestionVoiture - Application Full Stack 
## 🎯 Description
GestionVoiture est une application complète de gestion de parc automobile développée avec une architecture moderne full stack. Elle combine une interface utilisateur intuitive (frontend Angular) avec une API robuste et scalable (backend NestJS en microservices).

L'application permet aux administrateurs de :

- Gérer un inventaire de véhicules

- Suivre les ventes et locations

- Consulter des statistiques détaillées

- Auditer les activités via des journaux détaillés

## 🏗️ Architecture Globale
<div align="center">
  <pre style="font-family: monospace; background: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.4;">
┌─────────────────────────────────────────────────────────────────────┐
│                            <strong>Frontend</strong>                                 │
│              Angular 19 - Single Page Application                   │
│               (http://localhost:4200)                               │
└───────────────────────┬─────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────────────┐
│                            <strong>Backend</strong>                                  │
│  Microservices NestJS - GraphQL API - JWT Authentication            │
├─────────────────┬─────────────────┬─────────────────┬───────────────┤
│   <strong>Auth Service</strong>  │ <strong>Vehicle Service</strong> │   <strong>Log Service</strong>   │  <strong>Infra Layer</strong>  │
│   (Port 4001)   │   (Port 4003)   │   (Port 4002)   │ (Mongo/Redis) │
└─────────────────┴─────────────────┴─────────────────┴───────────────┘
  </pre>
</div>

# Technologies Utilisées
## Frontend
- Angular (v19.2.0) - Framework principal

- Angular Material - Composants UI Material Design

- TypeScript - Typage statique

- RxJS - Programmation réactive

- Zone.js - Gestion du contexte d'exécution

## Backend
- NestJS - Framework Node.js pour microservices

- GraphQL - API flexible et performante

- JWT - Authentification sécurisée

- MongoDB - Base de données NoSQL

- Redis - Cache et sessions

- Kafka - Messagerie entre services

- Docker - Conteneurisation et déploiement

# Interfaces Utilisateur
## 1. Authentification
Formulaire sécurisé de connexion

Gestion des sessions via JWT

Option de récupération de mot de passe

## 2. Tableau de Bord
Statistiques globales (nombre de véhicules, ventes mensuelles)

Visualisation des données (graphiques, KPI)

Vue d'ensemble du parc automobile

## 3. Gestion des Véhicules
CRUD complet des véhicules

Recherche et filtrage avancé

Affichage sous forme de cartes ou liste

Gestion des images et caractéristiques

## 4. Journaux d'Activité
Historique des actions utilisateurs

Filtrage par date/type d'action

Export des données

# 🚀 Installation et Démarrage
## Prérequis
- Node.js v18+

- npm ou yarn

## Docker 

- MongoDB, Redis, Kafka (ou Docker pour tout inclure)
- Méthode recommandée (Docker) 🐳 
# Cloner le dépôt:

```bash
git clone https://github.com/your-repo/gestion-voiture-fullstack.git
cd gestion-voiture-fullstack
Démarrer les services:
```

```bash
docker-compose up --build
Accéder aux services:

Frontend: http://localhost:4200

Auth Service: http://localhost:4001/graphql

Vehicle Service: http://localhost:4003/graphql

Log Service: http://localhost:4002
```

# 🚀 Installation manuelle
## Backend
- Installer les dépendances pour chaque service:

```bash
cd backend/auth-service && npm install
cd ../vehicle-service && npm install
cd ../log-service && npm install
Démarrer MongoDB, Redis et Kafka
```
- Lancer les services:

```bash
# Dans des terminaux séparés
cd auth-service && npm run start:dev
cd vehicle-service && npm run start:dev
cd log-service && npm run start:dev
```

## Frontend
Installer les dépendances:

```bash
cd frontend && npm install
Démarrer l'application:
```
```bash
ng serve
```
