# Tools Project – CRUD Task API

## Opis projektu
Projekt to prosta aplikacja webowa (REST API) realizująca funkcjonalność biznesową CRUD dla obiektu **Task**.  
Aplikacja umożliwia tworzenie, odczyt, edycję i usuwanie zadań. Dane są przechowywane w pamięci aplikacji, co upraszcza uruchomienie projektu.

## Wykorzystane narzędzia i ich rola
- **Git + GitHub** – kontrola wersji, historia prac (commity), współdzielenie kodu w repozytorium.
- **npm** – zarządzanie zależnościami projektu (instalacja bibliotek).
- **Automatyzacja (npm scripts + CI)** – uruchamianie aplikacji i testów jedną komendą oraz automatyczne uruchamianie testów w GitHub Actions po pushu.
- **Testy (Jest + Supertest)** – automatyczna weryfikacja poprawnego działania endpointów API.
- **Dokumentacja (README)** – instrukcja uruchomienia, testowania i krótki opis architektury.

## Wymagania
- Node.js (zalecana wersja LTS)
- npm

## Instalacja i uruchomienie
1. Sklonuj repozytorium:
   ```bash
   git clone <TU_WKLEJ_LINK_DO_REPO>
   cd tools-project-crud

2. Zainstaluj zależności:
npm install

3. Uruchom aplikację:
npm start

## Aplikacja działa domyślnie pod: http://localhost:3000

## Tryb developerski (auto-restart):
npm run dev

## Testowanie
Uruchomienie testów jedną komendą:  npm test

## Testy sprawdzają m.in.:
- tworzenie zadania (POST /tasks),
- pobieranie listy zadań (GET /tasks),
- usuwanie zadania (DELETE /tasks/:id) oraz weryfikację, że zasób nie istnieje.

## Endpointy API ##
- **GET /health** – sprawdzenie działania serwera

**POST /tasks** – tworzenie zadania
Body: **{ "title": "..." }**

**GET /tasks** – lista zadań

**GET /tasks/:id** – pobranie pojedynczego zadania

**PUT /tasks/:id** – aktualizacja zadania
Body: **{ "title": "...", "done": true/false }**

**DELETE /tasks/:id** – usunięcie zadania

## Krótki opis architektury ##
**src/app.js** – konfiguracja aplikacji Express i routing

**src/server.js** – uruchamianie serwera

**src/routes/** – definicje endpointów (warstwa HTTP)

**src/services/** – logika biznesowa (CRUD dla Task)

**src/tests/** – testy automatyczne (Jest + Supertest)
