# 🚀 Complete Deployment Guide

> Deploy MedEncyclopedia Frontend to Vercel & Backend to Render

---

## 📋 Prerequisites

- GitHub account (already have)
- Vercel account (vercel.com)
- Render account (render.com)
- MongoDB Atlas account (mongodb.com/cloud/atlas)

---

## 🔧 Step 1: Setup MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user with username & password
4. Get your connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/medencyclopedia
   ```
5. Save this for later

---

## 🌐 Step 2: Deploy Backend to Render

### Option A: Using Render Dashboard (Recommended)

1. **Login to Render** (render.com)
2. **Create New Web Service**
   - Connect GitHub repo: `sinclairdavids35-png/Med`
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Instance Type: Free

3. **Set Environment Variables:**
   - Click "Environment"
   - Add these variables:
     ```
     MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/medencyclopedia
     JWT_SECRET = your-super-secret-key-change-this
     NODE_ENV = production
     PORT = 5000
     ```
   - Replace username/password with your MongoDB credentials

4. **Deploy**
   - Save and deploy
   - Wait for build to complete
   - Copy your backend URL (e.g., `https://medencyclopedia-backend.onrender.com`)

### Option B: Using Railway

1. **Login to Railway** (railway.app)
2. **Create New Project**
   - Import GitHub repo
   - Select `backend` folder

3. **Set Environment Variables:**
   - Add same variables as above

4. **Deploy & Copy Backend URL**

---

## 🎨 Step 3: Deploy Frontend to Vercel

### Setup

1. **Login to Vercel** (vercel.com)
2. **Import Project**
   - Click "Add New..." → "Project"
   - Select GitHub repo: `sinclairdavids35-png/Med`
   - Framework: Vite
   - Root Directory: `.` (current directory)

3. **Set Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add variable:
     ```
     VITE_API_URL = https://medencyclopedia-backend.onrender.com
     ```
     (Replace with your actual backend URL from Step 2)

4. **Deploy**
   - Click Deploy
   - Wait for build to complete
   - Your app will be live at: `https://med-drab-eight.vercel.app`

### Verify Deployment
- Visit your Vercel URL
- Test registration/login
- API should connect to Render backend

---

## ✅ Testing After Deployment

### Test Backend Directly
```bash
# Check if backend is running
curl https://medencyclopedia-backend.onrender.com/

# Should return:
# "MedEncyclopedia Backend Running Successfully"
```

### Test API Endpoint
```bash
# Register a new user
curl -X POST https://medencyclopedia-backend.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "test123456"
  }'
```

### Test Frontend
- Visit your Vercel URL
- Try to register
- Should see success message

---

## 🔐 Environment Variables Summary

### Backend (Render/Railway)
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/medencyclopedia
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=production
```

### Frontend (Vercel)
```env
VITE_API_URL=https://medencyclopedia-backend.onrender.com
```

---

## 🐛 Troubleshooting

### Backend won't start
- Check MongoDB URI is correct
- Verify IP whitelist in MongoDB Atlas includes Render IP
- Check logs in Render dashboard

### Frontend can't connect to backend
- Verify `VITE_API_URL` is set correctly
- Check backend is running (visit the URL in browser)
- Ensure CORS is enabled in backend

### Build fails on Vercel
- Clear build cache: Settings → Deployments → Clear Cache
- Check `package.json` has build script
- Verify all dependencies are listed

---

## 📈 Production Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Backend deployed to Render/Railway
- [ ] Backend URL working in browser
- [ ] VITE_API_URL set in Vercel
- [ ] Frontend deployed to Vercel
- [ ] Tested registration on live site
- [ ] Verified API calls working
- [ ] Updated DNS/domain if needed

---

## 🔄 Continuous Deployment

Both Vercel and Render watch your GitHub repository:
- Every push to `main` branch triggers automatic deployment
- No manual deployments needed!

---

## 📚 Documentation Links

- **Vercel Docs:** https://vercel.com/docs
- **Render Docs:** https://render.com/docs
- **MongoDB Atlas:** https://www.mongodb.com/docs/atlas/
- **Express.js:** https://expressjs.com/

---

## 💡 Next Steps

1. Create MongoDB cluster
2. Deploy backend to Render
3. Get backend URL
4. Set VITE_API_URL in Vercel
5. Deploy frontend
6. Test everything works!

**Your app will be live at:** https://med-drab-eight.vercel.app ✅

