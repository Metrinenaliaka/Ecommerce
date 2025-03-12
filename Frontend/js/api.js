import axios from "axios"

const API_URL = "http://localhost:3000/api/v1" // Adjust this to match your backend URL

const api = {
  async getProducts() {
    try {
      const response = await axios.get(`${API_URL}/products`)
      return response.data
    } catch (error) {
      console.error("Error fetching products:", error)
      throw error
    }
  },

  async getProduct(id) {
    try {
      const response = await axios.get(`${API_URL}/products/${id}`)
      return response.data
    } catch (error) {
      console.error("Error fetching product:", error)
      throw error
    }
  },

  // Add more API functions as needed
}

