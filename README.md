# Vehicle Rental Management – Admin Microservices Platform

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Kafka](https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular%20Material-757575?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![Zone.js](https://img.shields.io/badge/Zone.js-FF9800?style=for-the-badge)

A secure admin authentication and vehicle management system built with a microservices backend (NestJS) and a modern Angular frontend.

---

## 📹 Demo Videos

- **Backend Demo:** [Video Simulation](https://drive.google.com/file/d/1vzehjbfMX59Zdu3V8vLfS_7oZBIT_Nt_/view?usp=sharing)
- **Frontend Demo:** [Video Simulation](https://drive.google.com/file/d/1dhWDQFBcR_5EaMyWdT81S88ILU9uGzAy/view?usp=sharing)

---

## 📋 Table of Contents

- [Vehicle Rental Management – Admin Microservices Platform](#vehicle-rental-management--admin-microservices-platform)
  - [📹 Demo Videos](#-demo-videos)
  - [📋 Table of Contents](#-table-of-contents)
  - [Project Overview](#project-overview)
  - [Architecture](#architecture)
  - [Technologies Used](#technologies-used)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Installation](#installation)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
    - [Docker Setup (Recommended)](#docker-setup-recommended)
  - [Usage](#usage)
    - [Running Locally](#running-locally)
      - [Backend](#backend-1)
      - [Frontend](#frontend-1)
    - [Running with Docker](#running-with-docker)
  - [Testing the Services](#testing-the-services)
    - [Auth Service](#auth-service)
    - [Vehicle Service](#vehicle-service)
    - [Log Service](#log-service)
    - [Frontend](#frontend-2)
  - [Application Interfaces](#application-interfaces)
    - [1. Authentication Interface](#1-authentication-interface)
    - [2. Dashboard](#2-dashboard)
    - [3. Vehicle Management](#3-vehicle-management)
    - [4. Logs](#4-logs)
  - [Troubleshooting](#troubleshooting)
  - [Authors \& License](#authors--license)
    - [Authors](#authors)
    - [License](#license)

---

## Project Overview

This project is a **full-stack vehicle rental management platform** featuring:

- **Backend:** Microservices architecture (NestJS) for authentication, vehicle management, and logging.
- **Frontend:** Angular application for a modern, intuitive admin interface.

---

## Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Auth Service  │    │ Vehicle Service │    │   Log Service   │
│   (Port 4001)   │    │   (Port 4003)   │    │   (Port 4002)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
         ┌─────────────────────────────────────────────────────┐
         │              Infrastructure Layer                   │
         ├─────────────────┬─────────────────┬─────────────────┤
         │    MongoDB      │     Redis       │     Kafka       │
         │   (Port 27017)  │   (Port 6379)   │   (Port 9092)   │
         └─────────────────┴─────────────────┴─────────────────┘
```

---

## Technologies Used

### Backend

- **NestJS** (Node.js framework)
- **JWT** (Authentication)
- **GraphQL** (API)
- **MongoDB** (Database)
- **Redis** (Caching)
- **Kafka** (Event streaming)
- **Docker** (Containerization)

### Frontend

- **Angular** (v19+)
- **Angular Material** (UI components)
- **TypeScript**
- **RxJS** (Reactive programming)
- **Zone.js** (Async context management)

---

## Installation

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Car-Rental-Admin-Application/Backend.git
   cd Backend
   ```
2. **Install dependencies for each service:**
   ```bash
   cd backend/auth-service && npm install
   cd ../vehicle-service && npm install
   cd ../log-service && npm install
   cd ../..
   ```
3. **Start MongoDB, Redis, and Kafka** (see [Usage](#usage) for details).

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd Frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Install Angular CLI (if not already installed):**
   ```bash
   npm install -g @angular/cli
   ```

### Docker Setup (Recommended)

1. **Install Docker Desktop:** [docker.com](https://docker.com/)
2. **Clone the repository:**
   ```bash
   git clone https://github.com/Car-Rental-Admin-Application/Backend.git
   cd Backend
   ```
3. **Start all services and infrastructure:**
   ```bash
   docker-compose up --build
   ```

---

## Usage

### Running Locally

#### Backend

- Start MongoDB, Redis, and Kafka on your machine.
- Open three terminals for the backend services:

  **Auth Service (Port 3001):**

  ```bash
  cd backend/auth-service
  set PORT=3001 && npm run start:dev
  ```

  **Vehicle Service (Port 3002):**

  ```bash
  cd backend/vehicle-service
  set PORT=3002 && npm run start:dev
  ```

  **Log Service (Port 3003):**

  ```bash
  cd backend/log-service
  set PORT=3003 && npm run start:dev
  ```

#### Frontend

- In a new terminal:
  ```bash
  cd Frontend
  ng serve
  ```
- Open [http://localhost:4200/](http://localhost:4200/) in your browser.

### Running with Docker

- From the `Backend` directory:
  ```bash
  docker-compose up --build
  ```
- All services (backend and infrastructure) will start automatically.
- For the frontend, you may need to run `ng serve` in the `Frontend` directory separately unless included in your Docker setup.

---

## Testing the Services

### Auth Service

- Open: [http://localhost:4001/graphql](http://localhost:4001/graphql)
- Example login mutation:
  ```graphql
  mutation {
    login(username: "admin", password: "admin123")
  }
  ```
- Example create admin mutation:
  ```graphql
  mutation {
    createAdmin(username: "newadmin", password: "newpass123")
  }
  ```
- For protected operations, add this header:
  ```json
  { "Authorization": "Bearer YOUR_TOKEN_HERE" }
  ```

### Vehicle Service

- Open: [http://localhost:4003/graphql](http://localhost:4003/graphql)
- Example queries and mutations are available in the original backend README.

### Log Service

- Open: [http://localhost:4002](http://localhost:4002)
- You should see a welcome message.

### Frontend

- Open: [http://localhost:4200/](http://localhost:4200/)
- Login with default credentials:
  - **Username:** `admin`
  - **Password:** `admin123`

---

## Application Interfaces

### 1. Authentication Interface

- Secure login form with username and password fields.
- "Forgot password?" link (future feature).
- Modern, split-screen design with a car image and form.

### 2. Dashboard

- Overview of key metrics: total cars, cars sold last month, etc.
- Donut chart for brand distribution.
- Visual car preview.
- Modular card-based layout.

### 3. Vehicle Management

- Search, filter, and manage vehicles.
- Add, edit, delete vehicles.
- Bulk delete option.
- Vehicles displayed as cards with image, model, price, transmission, and mileage.

### 4. Logs

- Chronological list of application events.
- Details include date, time, user, action, and more.
- (Planned) Search and filter logs.

---

## Troubleshooting

- **"Server cannot be reached"**: Ensure Docker is running, wait for services to start, check for port conflicts.
- **"Connection refused"**: Make sure MongoDB, Redis, and Kafka are running. Use `docker-compose ps` to check containers.
- **"Cannot find module"**: Run `npm install` in each service directory or use `docker-compose up --build`.
- **Services won't start**: Check Docker Desktop, disk space, and try `docker system prune`.

---

## Authors & License

### Authors

- **Mohammed CHERKAOUI** - _DevOps_ - [GitHub](https://github.com/mohammed761-dl)
- **Wassim ZAAIT** - _BackEnd_ - [GitHub](https://github.com/psyphonz)
- **Yousra Msaouri Charroud** - _Frontend_ - [GitHub](https://github.com/yousraMsaouri)

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Tip:** For the easiest setup, use Docker to run all backend services and infrastructure. For frontend development, use Angular CLI for hot-reloading and rapid UI changes.
