<script setup>
import { reactive } from "vue";

const formData = reactive({
  email: "",
  lozinka: "",
});

const handleSubmit = () => {
  console.log("Form submitted:", formData);
};
</script>

<template>
    <div class="form-container">
      <div class="logo">
        <img src="../assets/kupro.png" alt="Logo" />
      </div>
      <div class="tab-container">
        <router-link to="/login" class="tab">LogIn</router-link>
        <router-link to="/singup" class="tab">SingUp</router-link>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Unesite svoj E-mail"
            v-model="formData.email"
          />
        </div>
        <div class="form-group">
          <label for="lozinka">Lozinka:</label>
          <input
            type="password"
            id="lozinka"
            name="lozinka"
            placeholder="Unesite svoju lozinku"
            v-model="formData.lozinka"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
</template>

<style scoped>
body {
  background-color: #2148c0;
}

.logo {
  margin-bottom: 30px;
}

.logo img {
  width: 150px;
  height: auto;
}

.tab-container {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 5px;
  border-radius: 25px;
  margin-bottom: 30px;
  display: flex;
  width: 250px;
}

.tab {
  flex: 1;
  padding: 10px 20px;
  text-align: center;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.tab.router-link-active {
  background-color: white;
  color: #000000;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

form {
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 25px;
  border: none;
  box-sizing: border-box;
}

button {
  background-color: #ffffff;
  color: #2148c0;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #f0f0f0;
}
</style>
