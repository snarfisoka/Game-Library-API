# Game Library API

A RESTful API for managing a game collection, built using **Node.js**, **Express**, **MongoDB**, and **JWT**. The API supports full **CRUD** functionality, **user authentication**, **input validation**, **rate limiting**, and **Swagger documentation**.

---

## Setup Instructions

1. **Clone the project**
```bash
git clone <your-repo-url>
cd FransSantos_BackendDeveloper_GameLibraryExam
```

2. **Install dependencies**
```bash
npm install
```
3. **Create a .env file**
```bash
cp .env.example .env
```

4. **Fill in the .env with your credentials**
```bash
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secure_jwt_secret
```

5. **Start the server**
```bash
node server.js
```

6. **Run tests (optional)**
```bash
npm test
```

---

## Environment Variables (.env)

Here’s the format of the .env file. A sample is included as .env.example.

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/gameLibraryDB?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key

---

## JWT Authentication

After logging in, you'll receive a JWT token. Use this token for protected routes by adding it to the Authorization header like this:

Authorization: Bearer <your_token_here>

---

## Example API Requests (Postman or curl)
Register: 
POST /api/auth/register
Body:
{
  "username": "sample",
  "email": "email@example.com",
  "password": "123456"
}

Login: 
POST /api/auth/login
Body:
{
  "email": "email@example.com",
  "password": "123456"
}

Create Game: 
POST /api/games
Headers: Authorization: Bearer <token>
Body:
{
  "title": "Dota 2",
  "genre": "MOBA",
  "platform": "PC",
  "releaseYear": 2013,
  "description": "Dota 2 is a free-to-play, online multiplayer battle arena (MOBA) game, where two teams of five players compete to destroy each other's base, known as the Ancient"
}

Get All Games: 
GET /api/games

Search Games: 
GET /api/games/search?title=dota&genre=MOBA

Update Game: 
PUT /api/games/:id
Headers: Authorization: Bearer <token>
Body:
{
  "description": "Updated description"
}


Delete Game: 
DELETE /api/games/:id
Headers: Authorization: Bearer <token>

## Swagger API Docs
After starting the server, view the full API documentation:
URL: http://localhost:5000/api-docs

## Run Tests
Make sure MongoDB is running or accessible. Then run:
npm test


## Folder Structure
FransJosef_Santos_BackendDeveloper_GameLibraryExam/
 controllers/
 models/
 routes/
 middlewares/
 validators/
 utils/
 tests/
 .env.example
 server.js
 package.json
 swagger.js
 README.md

## Author
Frans Josef Santos
Portfolio Website: https://fransjosef-santos.vercel.app/