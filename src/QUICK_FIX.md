# 🔧 QUICK FIX - Environment Variable Error

## The Error You're Seeing

```
TypeError: Cannot read properties of undefined (reading 'VITE_SUPABASE_URL')
```

## What This Means

Your app needs Supabase credentials but can't find them.

## The Fix (2 Minutes)

### 1️⃣ Get Your Supabase Keys

Go to: **https://supabase.com/dashboard**

```
Dashboard → Your Project → Settings ⚙️ → API
```

You need TWO things:

**A) Project URL**
```
Looks like: https://abcdefghijklmnop.supabase.co
```

**B) anon public key**
```
Looks like: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOi...
(This is a LONG string)
```

### 2️⃣ Add to Figma Make

In Figma Make, add these as **environment variables** or **secrets**:

```
Variable 1:
Name:  VITE_SUPABASE_URL
Value: [paste your Project URL]

Variable 2:
Name:  VITE_SUPABASE_ANON_KEY
Value: [paste your anon public key]
```

### 3️⃣ Save & Refresh

- Save the variables
- Refresh your app
- ✅ Error gone!

## Visual Guide

```
Supabase Dashboard
    ↓
Settings (⚙️)
    ↓
API Section
    ↓
Copy these 2 things:
    • Project URL
    • anon public key
    ↓
Paste into Figma Make
    ↓
Refresh
    ↓
✅ Working!
```

## Checklist

- [ ] Logged into Supabase
- [ ] Found Settings → API
- [ ] Copied Project URL
- [ ] Copied anon public key
- [ ] Added `VITE_SUPABASE_URL` to Figma Make
- [ ] Added `VITE_SUPABASE_ANON_KEY` to Figma Make
- [ ] Saved variables
- [ ] Refreshed app
- [ ] Error disappeared!

## Still Not Working?

### Check These:

**Variable Names (must be EXACT):**
- ✅ `VITE_SUPABASE_URL` (all caps, underscores)
- ✅ `VITE_SUPABASE_ANON_KEY` (all caps, underscores)

**Common Mistakes:**
- ❌ Missing `VITE_` prefix
- ❌ Wrong spelling/capitalization
- ❌ Extra spaces in the values
- ❌ Used service_role key instead of anon key

## Which Key to Use?

In Supabase → Settings → API, you see multiple keys:

✅ **USE THIS:** `anon` or `public` key
❌ **NOT THIS:** `service_role` key

## After It Works

Continue with the full setup:
1. ✅ Credentials added (you just did this!)
2. Run SQL setup script
3. Create storage bucket
4. Create admin user
5. Access `/admin`

See `SETUP_INSTRUCTIONS.md` for complete guide.

## Summary

**Problem:** Missing environment variables  
**Solution:** Add Supabase credentials to Figma Make  
**Time:** 2 minutes  
**Result:** Error fixed, admin panel ready to use!

---

Need more help? See `SUPABASE_CREDENTIALS.md` for detailed instructions.

### 3. Create Admin User (1 min) ⚙️

**In Supabase Dashboard:**

1. **Authentication** → **Users** → **Add User**
2. **Create new user:**
   ```
   Email: digital@cyberminars.com
   Password: Toonly@54321
   ```
3. ✅ Check **"Auto Confirm User"**
4. Click **Create User**
5. ✅ Done!

**Save these credentials:**
- Email: `digital@cyberminars.com`
- Password: `Toonly@54321`

---