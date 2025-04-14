<template>
  <div class="container">
    <div class="gradient-bg"></div>
    <div class="content">
      <div class="logo">
        <img src="../assets/kupro.png" alt="KuPro Logo" class="logo-image" />
      </div>
      <h1 class="welcome-text">Welcome to KuPro</h1>
      <p class="login-text">Login to your account</p>

      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <input
            type="text"
            v-model="emailOrMobile"
            placeholder="Email/Mobile Number"
            class="input-field"
          />
        </div>

        <div class="input-group">
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="input-field"
          />
        </div>

        <button type="submit" class="login-button">Login</button>
      </form>

      <p class="forgot-password">Forgot your password?</p>
      <p class="signup-text">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      emailOrMobile: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      if (!this.emailOrMobile || !this.password) {
        alert("Please fill in all fields.");
        return;
      }

      try {
        const response = await axios.post("https://your-backend-api.com/login", {
          emailOrMobile: this.emailOrMobile,
          password: this.password,
        });

        if (response.data.success) {
          alert("Login successful!");
          // Redirect to dashboard or another page
          this.$router.push("/");
        } else {
          alert("Invalid credentials. Please try again.");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred. Please try again later.");
      }
    },
  },
};
</script>


<style scoped>
body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: #0E3FA7;
  font-family: 'Montserrat', sans-serif;
  color: white;
}

.container {
  width: 100%;
  max-width: 375px;
  height: 812px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  box-sizing: border-box;
}

.gradient-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(180deg, #061841 0%, #0E3FA7 99.99%, #0E3B9E 100%);
}

.content {
  position: relative;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  margin-bottom: 20px;
}

.logo-image {
  width: 100px;
}

.welcome-text {
  color: white;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
}

.login-text {
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 400;
  margin-bottom: 20px;
}

.input-group {
  width: 100%;
  margin-bottom: 16px;
}

.input-field {
  width: 100%;
  height: 48px;
  border: 2px solid white;
  border-radius: 24px;
  background: transparent;
  color: white;
  padding: 0 20px;
  margin-bottom: 16px;
  outline: none;
  box-sizing: border-box;
  font-size: 14px;
}

.input-field::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.login-button {
  width: 100%;
  height: 48px;
  background: white;
  border-radius: 24px;
  border: none;
  color: #0E3B9E;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 600;
  cursor: pointer;
  margin: 20px 0;
}

.forgot-password {
  color: white;
  font-size: 14px;
  text-align: center;
}

.signup-text {
  color: white;
  font-size: 14px;
  text-align: center;
}

.signup-link {
  font-weight: 600;
  cursor: pointer;
}

@media screen and (max-width: 375px) {
  .container {
    width: 100vw;
    height: 100vh;
  }
}
</style>