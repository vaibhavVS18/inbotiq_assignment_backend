# Backend – Role-Based Authentication API (Node.js + Express)

This is the backend API for a **Role-Based Authentication Web App**, built using **Node.js**, **Express**, **JWT**, and **bcrypt**.  
It handles secure signup, login, role assignment (User/Admin), and a protected route to fetch user details.

---

## 🚀 Features

- 🔐 **Role-based signup** (User / Admin)
- 🔑 **JWT authentication**
- 🧂 **Password hashing using bcrypt**
- 🔒 Protected route: `/auth/me`
- 🗄️ MongoDB with Mongoose
- 🌍 CORS enabled for frontend integration
- 🌐 Fully deployable on Render

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **Mongoose + MongoDB Atlas**
- **jsonwebtoken**
- **bcryptjs**
- **cors**

---

## 🔧 Environment Variables
Create a `.env` file based on `.env.example`.

### `.env`
MONGO_URI=mongodb+srv://...
JWT_SECRET=supersecret123
PORT=5000

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/vaibhavVS18/inbotiq_assignment_backend.git
2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev

Backend runs at:
👉 http://localhost:3001

🔌 API Endpoints
1️⃣ POST /auth/signup
Request Body:
{
  "email": "abc@gmail.com",
  "password": "abcd123456",
  "role": "User"
}
Response:
{
  "success": true,
  "message": "User registered successfully"
}


2️⃣ POST /auth/login
Request Body:

json
Copy code
{
  "email": "abc@gmail.com",
  "password": "123456"
}
Response:

json
Copy code
{
  "success": true,
  "token": "jwt-token-here"
}
3️⃣ GET /auth/me (Protected)
Headers:
Authorization: Bearer <jwt-token>
Response:
{
  "id": "123",
  "name": "Vaibhav",
  "email": "abc@gmail.com",
  "role": "Admin"
}
🧪 Testing The API
Use Postman  → Create token in /auth/login → Add to headers:
Authorization: Bearer <token>
Then call /auth/me.

🏗 Production Build
npm run build
npm start
🚀 Deployment Guide (Render / Railway)
Render Deployment Steps
Push code to GitHub

Go to render.com → New Web Service

Select your repository

Set Build Command:
npm install

Set Start Command:
npm start

Add environment variables:

PORT=10000
JWT_SECRET=your-secret
DATABASE_URL=<db-url>
Deploy 🎉

✔️ Required Endpoints (as per assignment)
POST /auth/signup

POST /auth/login

GET /auth/me

POST /auth/logout

