# 🔑 Supabase Credentials Setup

## Quick Fix for Environment Variable Error

You're seeing the error because your Supabase credentials haven't been set up yet. Here's how to fix it:

## Step 1: Get Your Supabase Credentials

1. **Go to your Supabase Dashboard:**
   - Visit: https://supabase.com/dashboard
   - Select your project

2. **Find Your Project URL and API Key:**
   - Click **Settings** (gear icon in sidebar)
   - Click **API** section
   - You'll see two important values:

   **Project URL:**
   ```
   Example: https://abcdefghijklmnop.supabase.co
   ```

   **anon/public Key:**
   ```
   Example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

## Step 2: Add to Figma Make Environment

Since you're using Figma Make, you need to add these as **Secrets**:

### In Figma Make:

1. Look for **Environment Variables** or **Secrets** settings in Figma Make
2. Add two new secrets:

**Secret 1:**
- Name: `VITE_SUPABASE_URL`
- Value: Your Project URL (e.g., `https://abcdefghijklmnop.supabase.co`)

**Secret 2:**
- Name: `VITE_SUPABASE_ANON_KEY`
- Value: Your anon/public key (the long string)

3. Save the secrets
4. Refresh your application

## Alternative: If Building Locally

If you're building this locally, create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**Note:** Never commit the `.env` file to version control!

## Step 3: Verify Setup

After adding the credentials:

1. Refresh your application
2. The error should be gone
3. Try accessing `/admin`
4. You should see the login page

## Security Notes

✅ **Safe to expose:**
- Project URL (VITE_SUPABASE_URL)
- Anon/public key (VITE_SUPABASE_ANON_KEY)

These are meant to be used in the browser/frontend.

❌ **Never expose:**
- Service role key (keep this in Supabase only)
- Database password
- Your admin password

## Troubleshooting

### Still seeing the error?

1. **Check spelling:** Variable names must be exact:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

2. **Check Figma Make:** Ensure secrets are saved and app is refreshed

3. **Check Supabase:** Verify your project is active

### Can't find the API keys?

In Supabase Dashboard:
1. Click **Settings** → **API**
2. Look under "Project API keys"
3. Copy the **URL** and **anon public** key

## Quick Reference

```
Supabase Dashboard → Settings → API

You need:
✅ Project URL
✅ anon public key

NOT the service_role key!
```

## What Happens Next?

Once credentials are added:
1. ✅ Error disappears
2. ✅ Supabase connection works
3. ✅ Admin panel becomes accessible
4. ✅ Database queries work
5. ✅ Image uploads work

## Need Your Credentials?

**Where to find them:**

```
1. Visit: https://supabase.com/dashboard
2. Select your project
3. Click Settings (⚙️)
4. Click API
5. Copy:
   - Project URL
   - anon public key
6. Add to Figma Make secrets
7. Refresh app
8. Done! ✨
```

## Complete Setup Order

1. ✅ Connect to Supabase (done)
2. 🔄 **Add credentials (you are here)**
3. ⏭️ Run SQL setup script
4. ⏭️ Create storage bucket
5. ⏭️ Create admin user
6. ⏭️ Access admin panel

## Summary

**The error means:** App can't find Supabase credentials

**The fix:** Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to environment/secrets

**Where to get them:** Supabase Dashboard → Settings → API

**What to do:** Copy values → Add as secrets in Figma Make → Refresh

That's it! Once you add these two values, everything will work! 🚀
