<template>
    <div id="home-view">
      
      <div class="header">
        <h1>Bienvenue sur notre boutique de Basket!</h1>
        <div class="actions">
          
          <button class="button" @click="goToLogin">Se connecter</button>
  
          
          <button class="button" @click="goToCart">Mon Panier</button>
        </div>
        <div class="search">
          
          <input
            type="text"
            id="search-input"
            v-model="searchQuery"
            placeholder="Rechercher des produits..."
            @input="searchProducts"
          />
        </div>
      </div>
  
     
      <div class="product-list">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <img :src="product.image" alt="product.name" class="product-image" />
          <div class="product-details">
            <h3>{{ product.name }}</h3>
            <p>€{{ product.price.toFixed(2) }}</p>
            <button @click="addToCart(product)" class="button">Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "", 
        products: [
          { id: 1, name: "Spalding NBA Basketball", price: 170, image: "https://m.media-amazon.com/images/I/71E++IGcHcL._AC_UF1000,1000_QL80_.jpg" },
          { id: 2, name: "Basketball Court", price: 25000, image: "https://th.bing.com/th/id/OIP.J1c5qmJ81vNGIF8yEZRx6wHaEK?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
          { id: 3, name: "Basketball Hoop", price: 300, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT6OVkpfEM4wRm11JIsiXGGzAllixhLIwC3oWZNfHL2AG1qWWnfkXr8PYRseXgMzXwKowwJWGs37au2n4_jC_cGjtuz6ycq2IpaYzR8vsVSP_X3nIH79G02HtdQ7nCZNapKiE_oRg&usqp=CAc" },
          { id: 4, name: "Basketball Jersey", price: 80, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS64G9MNlw8j9R_ZKg6f1t6geGCvZTnzi4iM4vL-lAKu9npHRUq9bObzfvfwWEhyntjMPlQ1Zc3cJBW--MksLfoJW2yw46hV23hHh0OKk5vlA1clvzDA6lIWRUu1X59p_KHXtdVVZJ-OCbr&usqp=CAc" },
          { id: 5, name: "Basketball Shoes", price: 800, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTU-yrfK7poWUcUbQoyD364ym0V1e5TGohpg1TwW9MCjq3IgK0zZ_ivg5TknIBAKEJYm0VvfyppMqnXd8kNi-NcfzljqR2kgfq_55s4tbEk&usqp=CAc" },
          { id: 6, name: "Basketball Jewelry", price: 100, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGizcMb7NPVJGLHeiN-TnDG-px-V7HHdB7uNhTwZ1ug3SBqVgLq_OaD_keLR0Y2MVRa3oPCKzpi222yMpOU8d_TpkQlwhQoILgD7RqfO9XW6Is_zuzcByq2W0&usqp=CAc" },
          { id: 7, name: "Basketball Band", price: 95, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4JnmzCTwmSe_8TKAekt4M2JLCLJiQ5WhKlrHF6Rq3CEO0G5OxuPDIgl8o4mey53Zvq1VTWm8RlUGvJeuFFDa-6TTHwGCGwqZ5ICAjmBA2IOUEa3_J-XeJZ0qfjvcDng&usqp=CAc" },
          { id: 8, name: "Basketball Cuff", price: 70, image: "data:image/jpeg;base64,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" },
        ],
        cartItems: [],
      };
    },
    computed: {
      
      filteredProducts() {
        if (this.searchQuery.trim() === "") {
          return this.products;
        }
        return this.products.filter(product =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      
      goToLogin() {
        this.$router.push("/login");
      },
      
      goToCart() {
        this.$router.push("/cart");
      },
      
      addToCart(product) {
        this.cartItems.push(product);
        alert(`${product.name} a été ajouté à votre panier`);
      },
      
      searchProducts() {
        console.log("Recherche : ", this.searchQuery);
        
      },
    },
  };
  </script>
  
  <style scoped>
  #home-view {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    padding: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .actions {
    margin-top: 20px;
  }
  
  .button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
    margin: 5px;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  
  .search {
    margin: 20px 0;
    text-align: center;
  }
  
  .search input {
    padding: 10px;
    width: 60%;
    font-size: 1em;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .product-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 250px;
    padding: 10px;
    text-align: center;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .product-details h3 {
    margin: 10px 0;
  }
  
  .product-details p {
    color: #4caf50;
    font-size: 1.1em;
    margin-bottom: 10px;
  }
  </style>
  

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

template {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
    color: #333;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 2rem;
    background-color: #2c3e50;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.navbar h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #ecf0f1;
}

#search-input {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    width: 30%;
    border: none;
    border-radius: 25px;
    background-color: #34495e;
    color: #fff;
    transition: all 0.3s ease;
}

#search-input::placeholder {
    color: #bdc3c7;
}

#search-input:focus {
    outline: none;
    background-color: #405d7d;
    box-shadow: 0 0 0 2px rgba(236, 240, 241, 0.3);
}

#login-btn, #cart-btn {
    padding: 0.8rem 1.5rem;
    margin-left: 1rem;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

#login-btn:hover, #cart-btn:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
}

.main-container {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

.filters {
    flex-basis: 250px;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    height: fit-content;
    position: sticky;
    top: 2rem;
}

.filters h2 {
    margin-bottom: 1.2rem;
    color: #2c3e50;
    font-size: 1.3rem;
}

.filters select {
    margin-bottom: 1.2rem;
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #f8f9fa;
    color: #2c3e50;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filters select:hover {
    border-color: #bdc3c7;
}

.filters select:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

.products {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 0.5rem;
}

.product {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
}

.product:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.product img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #eee;
}

.product-content {
    padding: 1.5rem;
}

.product-title {
    font-size: 1.2rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.product-price {
    font-size: 1.3rem;
    color: #e74c3c;
    font-weight: 700;
    margin-bottom: 1rem;
}

.product-description {
    color: #7f8c8d;
    margin-bottom: 1rem;
    line-height: 1.5;
    font-size: 0.9rem;
}

.add-to-cart {
    width: 100%;
    padding: 0.8rem;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.add-to-cart:hover {
    background-color: #2980b9;
}

.product-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: #e74c3c;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.8rem;
    font-weight: 500;
}



.results {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}



.pagination {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    position: relative;
    bottom: 0;
}

@media (max-width: 968px) {
    .main-container {
        flex-direction: column;
    }

    .filters {
        position: static;
        width: 100%;
    }

    #search-input {
        width: 50%;
    }
}

@media (max-width: 768px) {
    .navbar {
        flex-wrap: wrap;
        gap: 1rem;
    }

    #search-input {
        width: 100%;
        order: 3;
    }

    .products {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
}
</style>