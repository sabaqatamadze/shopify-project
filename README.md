# 🛍️ Shopify Project

A modern and responsive e-commerce web application built with **React** and **Vite**.

The project includes product browsing, categories, authentication, shopping cart functionality, dark/light theme support, discounts, and persistent client-side data using **localStorage**.

## 🚀 Live Demo

**Live Website:**
Add your deployed website URL here.

**GitHub Repository:**
https://github.com/sabaqatamadze/shopify-project

---

## ✨ Features

* 🛍️ Browse products
* 📂 Browse products by category
* 🔎 Product details page
* 💰 Discounted product prices
* 🛒 Add products to cart
* 💾 Cart/data persistence with `localStorage`
* 🔐 User authentication
* 🌙 Dark & light theme
* 📱 Responsive design
* ⚡ Fast development with Vite
* 🧩 Reusable React components
* 🧭 Client-side routing
* ⏳ Loading states while fetching data

---

## 🖥️ Pages

### Home

The main storefront where users can discover available products.

### Categories

Displays available product categories and allows users to browse products by category.

### Product Details

Shows detailed information about a selected product, including:

* Product image
* Product name
* Description
* Original price
* Discounted price
* Discount percentage
* Add to Cart button

### Cart

Users can view products they have added and manage their shopping cart.

### Authentication

Users can authenticate before accessing functionality that requires an account.

---

## 🎨 Theme System

The application supports both **light and dark themes**.

Theme state is managed using React Context and applied throughout the application.

Example:

```jsx
const { isDark } = useContext(ThemeContext);
```

The theme is then applied through a CSS class:

```jsx
<div className={isDark ? "product-page dark" : "product-page"}>
```

This allows the same components to dynamically change their appearance depending on the selected theme.

---

## 💾 Local Storage

The project uses the browser's **localStorage** to persist client-side data.

This allows important data to remain available after refreshing the page or reopening the browser.

For example:

```js
localStorage.setItem("cart", JSON.stringify(cart));
```

And retrieving it:

```js
const cart = JSON.parse(localStorage.getItem("cart"));
```

### Why localStorage?

Using localStorage allows the application to keep certain client-side state between sessions without requiring a database for that specific data.

> Note: localStorage should not be used for sensitive information such as passwords, private API keys, or other secrets.

---

## 🧮 Discounted Prices

Products can contain a discount percentage.

The application calculates the final price dynamically:

```js
const newPrice = (
  productData.price -
  (productData.price * productData.discountPercentage) / 100
).toFixed(2);
```

The UI displays:

* Original price
* Discounted price
* Discount percentage

Example:

```text
$100
$80
-20%
```

---

## 🧰 Tech Stack

| Technology   | Purpose                              |
| ------------ | ------------------------------------ |
| React        | User interface                       |
| Vite         | Development environment & build tool |
| JavaScript   | Application logic                    |
| CSS          | Styling                              |
| React Router | Client-side routing                  |
| Context API  | Global application state             |
| localStorage | Client-side persistence              |
| REST API     | Product/category data                |

---

## 📁 Project Structure

```text
Shopify-Project-main/
│
├── public/
│
├── src/
│   ├── Components/
│   ├── Layouts/
│   ├── contexts/
│   ├── helper/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/sabaqatamadze/shopify-project.git
```

Enter the project directory:

```bash
cd shopify-project/Shopify-Project-main
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available at the local address shown by Vite.

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🔌 API

The application retrieves product and category information through API requests.

The frontend uses helper functions to keep API communication separate from the UI components.

For example:

```js
getSingleProduct(product_id)
```

and:

```js
getCategoriesList()
```

This keeps components cleaner and makes API functionality easier to maintain.

---

## 🔐 Authentication

Authentication is handled through React Context.

The application can check whether a user is authenticated before allowing certain actions.

For example, when a user tries to add a product to the cart:

```js
if (userAuth === null) {
  setIsAuthModalOpen(true);
}
```

This allows the application to display the authentication modal when necessary.

---

## 📱 Responsive Design

The interface is designed to work across different screen sizes.

The product page, for example, changes from a two-column desktop layout to a single-column mobile layout:

```css
@media (max-width: 768px) {
  .product-container {
    grid-template-columns: 1fr;
  }
}
```

---

## 🎯 Project Goals

This project was built to practice and demonstrate:

* React component architecture
* React hooks
* Context API
* State management
* API integration
* Client-side routing
* Authentication flows
* localStorage
* Responsive CSS
* Dark/light themes
* E-commerce functionality
* Reusable components
* Clean project organization

---

## 🔮 Future Improvements

Possible future improvements include:

* [ ] Product search
* [ ] Product filtering
* [ ] Product sorting
* [ ] Quantity controls in cart
* [ ] Improved checkout flow
* [ ] Order history
* [ ] User profile
* [ ] Product reviews
* [ ] Wishlist
* [ ] Pagination
* [ ] Improved error handling
* [ ] Loading skeletons
* [ ] Better accessibility
* [ ] More advanced state management

---

## 👨‍💻 Author

**Saba Qatamadze**

Frontend Developer focused on building modern web applications with React and JavaScript.

### GitHub

https://github.com/sabaqatamadze

---

## 📄 License

This project is intended primarily as a personal/portfolio project.
