# Challenge: Fix the Bookstore’s State Management with Zustand 🚀

You have two contexts:

1. **FilterContext** – manages search/filter terms for book listings.
2. **CartContext** – manages items in a shopping cart.

---
# 📌 Problem: What We’re Trying to Fix?

Our current **Bookstore** application uses `useContext` to manage global state.  
While it works, it has some major **performance issues** and **scaling concerns**:

---

## ⚠️ Issues in Our Current `useContext` Approach

### 1️⃣ Too Many Context Providers

- In `_app.js`, we are **nesting multiple providers** (`<FilterProvider>` and `<CartProvider>`).
- As the app grows, we will need even more providers (e.g., `AuthContext`, `SettingsContext`), leading to **"Provider Hell"**.
- This makes the code **harder to read and maintain**.

### 2️⃣ Unnecessary Component Re-Renders

- Whenever a user **types in the search bar**, `FilterBar.js` updates the `searchTerm` state.
- **This causes all components** using `searchTerm` (like `BookList.js`) to **re-render on every keystroke**.
- Similarly, **adding/removing items** in `cart.js` **triggers re-renders** in all consumers of `CartContext`.

### 3️⃣ Scaling Issues

- If we need more features (e.g., **user authentication, checkout flow**), the number of contexts will **explode**.
- Keeping everything in a single `GlobalContext` **isn’t great either**—it would make the entire app **re-render when any state changes**.

# 🎯 The Goal: Optimize Our Bookstore with Zustand

We need a **better global state solution** that:
- ✅ **Eliminates Nested Providers** → Zustand does not require providers by default.
- 🔄 **Reduces Re-Renders** → Components only subscribe to the slices of state they need.
- 🛠️ **Keeps the Codebase Simple** → No `useContext` boilerplate, just a single store.
- 📈 **Scales Well** → We can easily add more state slices **without breaking other components**.

---

## 📌 What You Need to Do

Your challenge is to **refactor** the **Bookstore** app from `useContext` to **Zustand** by following these steps:

### 1️⃣ Create a Zustand store (`useAppStore.js`)
- Move `searchTerm` and `setSearchTerm` (from `FilterContext.js`) into Zustand.
- Move `cartItems`, `addToCart`, and `removeFromCart` (from `CartContext.js`) into Zustand.

### 2️⃣ Remove `FilterProvider` and `CartProvider` from `_app.js`
- Zustand **does not require wrapping components with providers**.

### 3️⃣ Refactor `FilterBar.js` and `Cart.js` to Use Zustand
- Replace `useContext` with **Zustand's** `useAppStore()` hook.
- Update components to **only subscribe to the state they actually need**  
  (e.g., `searchTerm` in `FilterBar.js`, `cartItems` in `Cart.js`).

### 4️⃣ Bonus: Prevent Unnecessary Re-renders
- Use an **uncontrolled input** with `useRef` in `FilterBar.js`  
  so that typing **does not trigger re-renders**.

## ✅ Expected Outcome

- ✅ The app **works exactly the same** but is now **more efficient**.
- ✅ **No unnecessary re-renders** on every keystroke.
- ✅ **Codebase is cleaner** without multiple context providers.
- ✅ The bookstore can now **scale easily**—adding new global state (e.g., user authentication)  
  will be as simple as **adding another slice to the store**.

---

# 🚀 After Your Changes, Here’s What You Should Notice

Now that you’ve refactored the **Bookstore** app using **Zustand**, here’s what you should observe:

- **Only `Cart.js` re-renders when adding/removing items**  
  - Previously, `BookItem.js` was also re-rendering unnecessarily, but now only `Cart.js` updates when the cart changes.

- **`_app.js` is much cleaner with no providers**  
  - Before, we had multiple providers (`FilterProvider`, `CartProvider`), but now, Zustand handles state globally without requiring extra wrappers.

- **Typing in `FilterBar.js` no longer causes re-renders**  
  - Previously, every keystroke triggered a re-render of `FilterBar.js` and `BookList.js`, but now only `BookList.js` updates when clicking "Search."

Check your **browser’s console** while testing these interactions to **verify the improvements!** 🚀


**Good luck! You got this! 💪🔥**
