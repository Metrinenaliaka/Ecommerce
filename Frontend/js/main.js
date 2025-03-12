// Simulate an API for demonstration purposes.  Replace with your actual API calls.
const api = {
    getProducts: async () => {
      return [
        { id: 1, name: "Product 1", price: 19.99, image: "/product1.jpg", description: "This is product 1" },
        { id: 2, name: "Product 2", price: 29.99, image: "/product2.jpg", description: "This is product 2" },
        { id: 3, name: "Product 3", price: 9.99, image: "/product3.jpg", description: "This is product 3" },
      ]
    },
    getProduct: async (id) => {
      const products = await api.getProducts()
      return products.find((p) => p.id === id)
    },
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content")
  
    // Simple routing
    const routes = {
      "home-link": showHome,
      "products-link": showProducts,
      "cart-link": showCart,
      "login-link": showLogin,
      "register-link": showRegister,
    }
  
    for (const [id, func] of Object.entries(routes)) {
      document.getElementById(id).addEventListener("click", (e) => {
        e.preventDefault()
        func()
      })
    }
  
    // Default to home page
    showHome()
  
    function showHome() {
      mainContent.innerHTML = "<h1>Welcome to E-Shop</h1><p>Check out our amazing products!</p>"
    }
  
    async function showProducts() {
      try {
        const products = await api.getProducts()
        let html = '<h1>Our Products</h1><div class="product-grid">'
        products.forEach((product) => {
          html += `
                      <div class="product-card">
                          <img src="${product.image || "/placeholder.svg"}" alt="${product.name}">
                          <h3>${product.name}</h3>
                          <p>$${product.price}</p>
                          <button onclick="showProductDetails(${product.id})">View Details</button>
                      </div>
                  `
        })
        html += "</div>"
        mainContent.innerHTML = html
      } catch (error) {
        mainContent.innerHTML = "<p>Error loading products. Please try again later.</p>"
      }
    }
  
    function showCart() {
      mainContent.innerHTML = "<h1>Your Cart</h1><p>Cart functionality coming soon!</p>"
    }
  
    function showLogin() {
      mainContent.innerHTML = `
              <h1>Login</h1>
              <form id="login-form">
                  <input type="email" placeholder="Email" required>
                  <input type="password" placeholder="Password" required>
                  <button type="submit">Login</button>
              </form>
          `
      document.getElementById("login-form").addEventListener("submit", handleLogin)
    }
  
    function showRegister() {
      mainContent.innerHTML = `
              <h1>Register</h1>
              <form id="register-form">
                  <input type="text" placeholder="Name" required>
                  <input type="email" placeholder="Email" required>
                  <input type="password" placeholder="Password" required>
                  <button type="submit">Register</button>
              </form>
          `
      document.getElementById("register-form").addEventListener("submit", handleRegister)
    }
  
    async function showProductDetails(id) {
      try {
        const product = await api.getProduct(id)
        mainContent.innerHTML = `
                  <h1>${product.name}</h1>
                  <img src="${product.image || "/placeholder.svg"}" alt="${product.name}">
                  <p>${product.description}</p>
                  <p>Price: $${product.price}</p>
                  <button onclick="addToCart(${product.id})">Add to Cart</button>
              `
      } catch (error) {
        mainContent.innerHTML = "<p>Error loading product details. Please try again later.</p>"
      }
    }
  
    function handleLogin(e) {
      e.preventDefault()
      // Implement login logic here
      console.log("Login submitted")
    }
  
    function handleRegister(e) {
      e.preventDefault()
      // Implement registration logic here
      console.log("Registration submitted")
    }
  
    function addToCart(productId) {
      // Implement add to cart logic here
      console.log(`Product ${productId} added to cart`)
    }
  })
  
  