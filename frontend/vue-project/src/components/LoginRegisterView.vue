<template>
    <div class="container">
      
      <div v-if="isLoginVisible" id="loginForm">
        <h2>Login</h2>
        <input type="email" class="input-field" placeholder="Email" v-model="loginForm.email" required>
        <input type="password" class="input-field" placeholder="Password" v-model="loginForm.password" required>
        <button class="button" @click="login">Login</button>
        <p class="toggle-link" @click="toggleForm">Don't have an account? Register</p>
      </div>
  
      
      <div v-else id="registerForm">
        <h2>Register</h2>
        <input type="text" class="input-field" placeholder="Username" v-model="registerForm.username" required>
        <input type="email" class="input-field" placeholder="Email" v-model="registerForm.email" required>
        <input type="password" class="input-field" placeholder="Password" v-model="registerForm.password" required>
        <input type="password" class="input-field" placeholder="Confirm Password" v-model="registerForm.confirmPassword" required>
        <button class="button" @click="register">Register</button>
        <p class="toggle-link" @click="toggleForm">Already have an account? Login</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoginVisible: true, 
        loginForm: {
          email: "",
          password: "",
        },
        registerForm: {
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      };
    },
    methods: {
      toggleForm() {
        this.isLoginVisible = !this.isLoginVisible;
      },
      login() {
       
        console.log("Login avec :", this.loginForm);
        alert("Connexion réussie (simulation)");
      },
      register() {
        
        if (this.registerForm.password !== this.registerForm.confirmPassword) {
          alert("Les mots de passe ne correspondent pas.");
          return;
        }
        console.log("Register avec :", this.registerForm);
        alert("Inscription réussie (simulation)");
      },
    },
  };
  </script>
  
  <style>
  .container {
    font-family: Arial, sans-serif;
    background-color: #fff;
    width: 350px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin: 20px auto;
  }
  
  h2 {
    color: #333;
    margin-bottom: 20px;
    font-size: 1.5em;
    text-align: center;
  }
  
  .input-field {
    width: 100%;
    padding: 12px 15px;
    margin: 8px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1em;
    box-sizing: border-box;
    transition: border-color 0.3s;
  }
  
  .input-field:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.3);
  }
  
  .button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  
  .toggle-link {
    color: #007bff;
    cursor: pointer;
    margin-top: 15px;
    display: inline-block;
    font-size: 0.9em;
  }
  
  .toggle-link:hover {
    text-decoration: underline;
  }
  </style>
  