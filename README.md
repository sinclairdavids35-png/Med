# 🏥 MedEncyclopedia - Production Ready Backend & Frontend

> Your ultimate resource where medical students and professionals unite to learn and share knowledge

## 📋 Quick Links

- 📖 **[Integration Guide](INTEGRATION_GUIDE.md)** - Complete API integration examples
- 🎨 **[System Preview](SYSTEM_PREVIEW.md)** - UI preview and technical overview
- ✅ **[Corrections Summary](CORRECTIONS_SUMMARY.md)** - All fixes applied to the original code
- 🌐 **[Repository](https://github.com/sinclairdavids35-png/Med)** - Full source code

---

## 🚀 Getting Started

### Backend Setup

```bash
cd backend
npm install

# Create .env file
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/medencyclopedia
JWT_SECRET=your_secret_key

# Start development server
npm run dev
```

### Frontend Setup

```bash
npm install
npm run dev
```

---

## ✨ Key Features

### 🔐 Authentication
- User registration with validation
- Secure JWT-based login
- Password hashing with bcryptjs
- Protected API endpoints
- 30-day token expiry

### 📚 Content Management
- Create and read medical articles
- Discussion forums
- Real-time notifications
- Case studies and quizzes

### 🎭 External APIs
- Random joke generator
- Chuck Norris jokes
- Programming jokes
- Category-based jokes

### 🌍 Global Platform
- 150+ countries
- 50,000+ medical professionals
- 25,000+ medical students
- 10,000+ articles & videos

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Tailwind CSS, Lucide Icons |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs |
| External APIs | jokes.one, chucknorris.io, official-joke-api |

---

## 📊 API Endpoints

### Authentication
```
POST   /api/auth/register          - Register new user
POST   /api/auth/login             - Login user
```

### Articles
```
GET    /api/articles               - Get all articles
POST   /api/articles               - Create article (Protected)
```

### Forums
```
GET    /api/forums                 - Get all forum posts
POST   /api/forums                 - Create forum post (Protected)
```

### Jokes
```
GET    /api/jokes/random           - Get random joke
GET    /api/jokes/chuck-norris     - Get Chuck Norris joke
GET    /api/jokes/programming      - Get programming joke
GET    /api/jokes/category/:cat    - Get joke by category
```

---

## 🔒 Security Features

✅ **Password Security**
- Hashed with bcryptjs (10 salt rounds)
- Minimum 6 characters required
- Never stored in plain text

✅ **API Security**
- JWT token validation
- CORS protection
- Input validation on all endpoints
- Protected routes with middleware

✅ **Data Protection**
- MongoDB with Mongoose ODM
- Environment variables for secrets
- No sensitive data in responses

---

## 📈 System Architecture

```
┌─────────────────────┐
│   React Frontend    │
│  - Landing Page     │
│  - Auth Pages       │
│  - Dashboard        │
└──────────┬──────────┘
           │ HTTP/HTTPS
           ↓
┌─────────────────────┐
│  Express Backend    │
│  - API Routes       │
│  - Middleware       │
│  - Controllers      │
└──────────┬──────────┘
           │ Mongoose
           ↓
┌─────────────────────┐
│    MongoDB          │
│  - Users            │
│  - Articles         │
│  - Forums           │
└─────────────────────┘
```

---

## 🧪 Testing

### Test Registration
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Test Get Joke
```bash
curl http://localhost:5000/api/jokes/random
```

---

## 📦 Deployment

### Backend
- **Render** or **Railway** recommended
- Set environment variables on platform
- Connect MongoDB Atlas
- Enable HTTPS

### Frontend
- **Vercel** or **Netlify** recommended
- Update API URL to production backend
- Enable CDN caching

---

## 📚 Documentation Files

1. **INTEGRATION_GUIDE.md** - Complete integration guide with code examples
2. **SYSTEM_PREVIEW.md** - UI preview and technical overview
3. **CORRECTIONS_SUMMARY.md** - Detailed explanation of all fixes
4. **README.md** - This file

---

## 🎯 What's Fixed

✅ Auth middleware logic flow
✅ Server startup async handling
✅ Input validation on all endpoints
✅ Error handling consistency
✅ Database model validation
✅ Code quality improvements

---

## 🚀 Next Steps

1. Configure MongoDB Atlas connection
2. Set JWT_SECRET in .env
3. Start backend: `npm run dev`
4. Start frontend: `npm run dev`
5. Visit http://localhost:5173
6. Test registration and features
7. Deploy to production

---

## 📝 License

Copyright © 2025 Sinclair Technologies. All rights reserved.

---

## 👥 Support

For issues or questions, please visit our [GitHub repository](https://github.com/sinclairdavids35-png/Med)

---

**Status:** ✅ Production Ready | **Version:** 1.0.0 | **Last Updated:** 2026-05-28
