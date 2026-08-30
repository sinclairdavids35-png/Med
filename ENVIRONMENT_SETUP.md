# 🔧 Environment Variables Setup

---

## 📝 Frontend Environment Variables

### Local Development

Create `.env.local` in root directory:

```env
VITE_API_URL=http://localhost:5000
```

### Vercel Production

Set in **Vercel Dashboard → Project Settings → Environment Variables**:

```env
VITE_API_URL=https://medencyclopedia-backend.onrender.com
```

Replace with your actual backend URL.

---

## 🔒 Backend Environment Variables

### Local Development

Create `.env` in `backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/medencyclopedia
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

### Production (Render/Railway)

Set these in your deployment platform dashboard:

**Variable Name** | **Value** | **Note**
---|---|---
`PORT` | `5000` | Don't change
`MONGO_URI` | `mongodb+srv://user:pass@cluster.mongodb.net/db` | Your MongoDB connection string
`JWT_SECRET` | `random-secret-key-minimum-32-chars` | Generate a strong secret
`NODE_ENV` | `production` | Important for optimization

---

## 🔑 How to Generate Secret Keys

### JWT_SECRET

Run this in your terminal:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Or use an online generator: https://www.random.org/strings/

---

## 📚 Example Complete Setup

### Backend .env (Production)

```env
PORT=5000
MONGO_URI=mongodb+srv://medadmin:SecurePass123@medencyclopedia.mongodb.net/medencyclopedia
JWT_SECRET=a7f2e8c9d1b4a6f3e9c2d5a8b1f4e7c0d3a6f9b2e5c8a1d4g7h0j3k6l9m2p5s
NODE_ENV=production
```

### Frontend (Vercel)

```env
VITE_API_URL=https://medencyclopedia-backend.onrender.com
```

---

## ✅ Verification

### Check Frontend Can Access Backend

After deployment, your React app should be able to call:
```
https://medencyclopedia-backend.onrender.com/api/auth/register
```

### Test Endpoint

```bash
curl https://medencyclopedia-backend.onrender.com/
# Should return:
# "MedEncyclopedia Backend Running Successfully"
```

---

## 🚨 Important Security Notes

1. **Never commit `.env` files** to GitHub
2. **Keep JWT_SECRET secret** - change before production
3. **Use strong MongoDB passwords** - at least 12 characters
4. **Enable MongoDB IP whitelist** - allow only your Render IP
5. **Use HTTPS** - both platforms provide this by default

---

## 🔗 Environment Variables by Platform

### Vercel

Settings → Environment Variables → Add Variable
- Available to: Production, Preview, Development

### Render

Dashboard → Environment → Add Environment Variable
- Automatically available to your service

### MongoDB Atlas

Network Access → Add IP Address
- Add Render's IP range (check Render docs for current IPs)

---

## 📖 Reference

- **Vercel Env Vars:** https://vercel.com/docs/environment-variables
- **Render Env Vars:** https://render.com/docs/environment-variables
- **Node.js process.env:** https://nodejs.org/api/process.html#process_process_env
