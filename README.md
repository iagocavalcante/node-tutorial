# Node.js Tutorial

A simple tutorial project demonstrating a Node.js/Express API with a vanilla HTML frontend.

## Projects

- **alunos-api**: Node.js/Express REST API
- **alunos-front**: Simple HTML frontend

## Quick Start

### Backend

```bash
cd alunos-api
npm install
npm run dev
```

API will run at http://localhost:3000

### Frontend

Simply open `alunos-front/index.html` in a browser, or serve it:

```bash
cd alunos-front
npx serve
```

Then open http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/v1/alunos | List all students |
| POST | /api/v1/alunos | Create student |
| PUT | /api/v1/alunos/:id | Update student |
| DELETE | /api/v1/alunos/:id | Delete student |

## Updated

- Updated express to v4.21
- Updated nodemon to v3.1
- Updated axios to v1.7.9
