# Quick Reference Card - Cyberminars Digital

## 🎯 One-Minute Overview

### **Programming Language: TypeScript**

Your website is built with **TypeScript + React**, styled with **Tailwind CSS**, and powered by **Supabase**.

---

## 💻 Tech Stack (Ultra Quick)

```
Frontend:  TypeScript + React + Tailwind CSS
Backend:   Supabase (PostgreSQL)
APIs:      Web3Forms + WhatsApp
Type:      Single Page Application (SPA)
```

---

## 📁 File Types

| Extension | What It Is | Count |
|-----------|-----------|-------|
| `.tsx` | TypeScript + React | ~40 files |
| `.ts` | TypeScript only | ~5 files |
| `.css` | Stylesheets | 1 file |
| `.md` | Documentation | ~15 files |

---

## 🗂️ Project Structure (1 Minute)

```
/
├── App.tsx              → Main app (TypeScript + React)
├── components/          → All pages (TypeScript + React)
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── CaseStudies.tsx
│   └── Contact.tsx
├── lib/
│   └── supabase.ts      → Database client (TypeScript)
└── styles/
    └── globals.css      → Styles (CSS + Tailwind)
```

---

## 🎨 What Each Technology Does

| Technology | Purpose | Example |
|------------|---------|---------|
| **TypeScript** | Programming logic | Variables, functions, types |
| **React** | UI components | Buttons, forms, pages |
| **Tailwind CSS** | Styling/design | Colors, spacing, layout |
| **Supabase** | Database | Store services, testimonials |

---

## 📊 Code Distribution

```
TypeScript/React:  85% ████████████████████
CSS/Tailwind:      10% ████
Config/Docs:       5%  ██
```

---

## 🚀 Pages & Routes

| Page | URL | File | Language |
|------|-----|------|----------|
| Home | `/` | Home.tsx | TypeScript + React |
| Services | `/services` | Services.tsx | TypeScript + React |
| About | `/about` | About.tsx | TypeScript + React |
| Case Studies | `/case-studies` | CaseStudies.tsx | TypeScript + React |
| Contact | `/contact` | Contact.tsx | TypeScript + React |

---

## 🔧 Key Technologies Explained

### **TypeScript**
```typescript
// Type-safe code
interface Service {
  id: string;
  title: string;
  description: string;
}

const service: Service = {
  id: "1",
  title: "Web Development",
  description: "Custom websites"
};
```

### **React**
```tsx
// Component-based UI
export function HomePage() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}
```

### **Tailwind CSS**
```tsx
// Utility-first styling
<div className="
  bg-blue-500      // Background color
  text-white       // Text color
  p-4              // Padding
  rounded-lg       // Rounded corners
  shadow-xl        // Shadow
">
  Content here
</div>
```

### **Supabase**
```typescript
// Database queries
const { data } = await supabase
  .from('services')
  .select('*')
  .order('created_at');
```

---

## 📦 Main Dependencies

```json
{
  "react": "^18.x",                    // UI framework
  "@supabase/supabase-js": "^2.x",    // Database
  "tailwindcss": "^4.0",              // CSS framework
  "lucide-react": "latest",            // Icons
  "motion": "latest",                  // Animations
  "react-hook-form": "7.55.0"         // Forms
}
```

---

## 🎯 Simple Explanations

### **What is TypeScript?**
- JavaScript with types
- Catches errors before running code
- Better code editor support

### **What is React?**
- Builds user interfaces
- Component-based (reusable pieces)
- Makes interactive websites

### **What is Tailwind CSS?**
- CSS framework
- Pre-made styling classes
- Fast styling without writing CSS

### **What is Supabase?**
- Backend database
- Stores your data
- PostgreSQL database

---

## 💡 Real-World Example

**How a page works:**

```
1. User visits /services
   ↓
2. App.tsx loads Services.tsx (TypeScript + React)
   ↓
3. Services.tsx fetches data from Supabase
   ↓
4. React renders the component
   ↓
5. Tailwind CSS styles it
   ↓
6. User sees styled services page!
```

---

## 📝 Code Sample (Complete Component)

```typescript
// File: components/Example.tsx
// Language: TypeScript + React

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function Example() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await supabase.from('services').select('*');
    setData(data || []);
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Services</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Breakdown:**
- **Lines 1-5:** Imports (TypeScript)
- **Lines 7-8:** Component & state (React)
- **Lines 10-16:** Data fetching (Supabase)
- **Lines 18-26:** UI rendering (React + JSX)
- **Line 19:** Styling (Tailwind CSS)

---

## 🎓 Learning Resources

| Technology | Learn Here | Time |
|------------|-----------|------|
| TypeScript | [typescriptlang.org](https://www.typescriptlang.org/) | 1-2 weeks |
| React | [react.dev](https://react.dev/) | 2-3 weeks |
| Tailwind | [tailwindcss.com](https://tailwindcss.com/) | 1 week |
| Supabase | [supabase.com/docs](https://supabase.com/docs) | 1 week |

---

## 🔍 Find Specific Info

| What You Need | See This File |
|---------------|---------------|
| Full tech details | `/TECH_STACK.md` |
| Routing info | `/ROUTING_GUIDE.md` |
| Deployment guide | `/DEPLOYMENT_ROUTING_CONFIG.md` |
| Project overview | `/PROJECT_OVERVIEW.md` |
| This quick ref | `/QUICK_REFERENCE.md` |

---

## ✅ Bottom Line

### **Main Language:** TypeScript
### **Framework:** React
### **Styling:** Tailwind CSS
### **Database:** Supabase (PostgreSQL)
### **Type:** Single Page Application

**In plain English:**  
*"Your website is programmed in TypeScript using the React framework, designed with Tailwind CSS, and stores data in a Supabase PostgreSQL database."*

---

## 📞 Quick Help

**Want to:**
- **Edit content?** → Use Supabase Dashboard
- **Change colors?** → Edit `/styles/globals.css`
- **Add a page?** → Create new `.tsx` file in `/components/`
- **Deploy?** → See `/DEPLOYMENT_ROUTING_CONFIG.md`

---

**Last Updated:** December 2024  
**Language:** TypeScript  
**Status:** Production Ready

---

## 🎯 Key Points to Remember

1. ✅ All code files are `.tsx` = TypeScript + React
2. ✅ Styling uses Tailwind CSS classes
3. ✅ Data comes from Supabase database
4. ✅ 5 main pages, all TypeScript + React
5. ✅ No authentication (admin removed)
6. ✅ Ready for deployment

**→ For complete details, see `/TECH_STACK.md`**
