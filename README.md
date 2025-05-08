# 🍕 Fast Pizza - React App

A sleek and modern pizza ordering app built with **React**, powered by **Redux** and styled with **Tailwind CSS**. It offers a smooth, interactive user experience from browsing the menu to placing an order.

## 🚀 Live Demo
  https://hager9.github.io/fast-pizza/



## 💭 What It Does
- Starts with a simple welcome page where users enter their name
- Displays a dynamic menu fetched using **Redux Thunk**
- Users can:
  - ➕ Add pizzas to the cart
  - ➖ Increase/decrease quantities
  - ❌ Remove individual items
  - 🧹 Clear the cart entirely
- From the cart, users can proceed to the **order form**
- Uses **Geolocation API** to auto-fill user location
- Upon order confirmation, the user is navigated to the **order details page** with estimated delivery time



## 🛠 Tech Stack

- ⚛️ React + Vite
- 🔁 React Router (with **HashRouter** for GitHub Pages)
- 🧠 Redux for state management
- ⏱️ Redux Thunk for async operations
- 💅 Tailwind CSS for responsive styling
- 📍 Geolocation API for user address
- 🌐 GitHub Pages for deployment


## 📁 Installation & Setup

Clone the repo and run locally:

```bash
git clone https://github.com/hager9/fast-pizza.git
cd fast-pizza
npm install
npm run dev
```





- **Menu Page**: 
  ![Menu Page](https://github.com/hager9/fast-pizza/blob/main/public/menu.png)

- **Ordering Page**: 
  ![Ordering Page](https://github.com/hager9/fast-pizza/blob/main/public/ordering.png)


- **Order Details Page**: 
  ![Order Details Page ](https://github.com/hager9/fast-pizza/blob/main/public/order%20details.png)
