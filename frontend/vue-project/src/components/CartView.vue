<template>
    <div class="container" id="cart">
      <h2>Votre Panier</h2>
  
      
      <div id="cartItems">
        <div v-for="item in cartItems" :key="item.name" class="item">
          <span class="item-name">{{ item.name }}</span>
          <span>€{{ item.price.toFixed(2) }}</span>
        </div>
      </div>
  
      <p class="total" id="totalAmount">Total : €{{ totalAmount.toFixed(2) }}</p>
      <button class="button" @click="finalizeOrder">Finaliser la commande</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [
          { name: "Spalding NBA Basketball", price: 170.0 },
          { name: "Basketball Court", price: 25000.0 },
          { name: "Basketball hoop", price: 300.0 },
          { name: "Basketball jersey", price: 80.0 },
          { name: "Basketball shoes", price: 800.0 },
          { name: "Basketball jewelry", price: 100.0 },
          { name: "Basketball band", price: 95.0 },
          { name: "Basketball Cuff", price: 70.0 },
        ],
      };
    },
    computed: {
    
      totalAmount() {
        return this.cartItems.reduce((sum, item) => sum + item.price, 0);
      },
    },
    methods: {
      
      finalizeOrder() {
        alert("Commande finalisée ! Merci pour votre achat.");
      },
    },
  };
  </script>
  
  <style>
  
  .container {
    font-family: Arial, sans-serif;
    background-color: #fff;
    width: 400px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 20px auto;
  }
  
  .container h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .item-name {
    font-weight: bold;
  }
  
  .total {
    text-align: right;
    font-size: 1.2em;
    margin-top: 20px;
  }
  
  .button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
  }
  
  .button:hover {
    background-color: #45a049;
  }
  </style>
  