<script>
export default {
  name: "LoginPage",
  data() {
    return {
      password: "",
      confirmPassword: "",
      passwordError: "",
      confirmPasswordError: "",
    };
  },
  methods: {
    validatePassword() {
      if (this.password.length < 8) {
        this.passwordError = "Password must be at least 8 characters.";
      } else if (!/[A-Z]/.test(this.password)) {
        this.passwordError = "Password must contain at least one uppercase letter.";
      } else {
        this.passwordError = "";
      }
    },
    validateConfirmPassword() {
      if (this.confirmPassword !== this.password) {
        this.confirmPasswordError = "Passwords do not match.";
      } else {
        this.confirmPasswordError = "";
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="gradient-bg"></div>
    <div class="content">
      <div class="logo">
        <img src="../assets/kupro.png" alt="KuPro Logo" class="logo-image" />
      </div>

      <h1 class="welcome-text">Welcome to KuPro</h1>
      <p class="create-account">Create your account</p>

      <div class="input-group">
        <input type="text" class="input-field" placeholder="First Name" />
      </div>

      <div class="input-group">
        <input type="text" class="input-field" placeholder="Last Name" />
      </div>

      <div class="input-group">
        <input
          type="text"
          class="input-field"
          placeholder="Email ID/Phone Number"
        />
      </div>

      <div class="input-group">
        <input
          v-model="password"
          @input="validatePassword"
          type="password"
          placeholder="Password"
          class="input-field"
        />
      </div>
      <p v-if="passwordError" class="error-message">{{ passwordError }}</p>

      <div class="input-group">
        <input
          v-model="confirmPassword"
          @input="validateConfirmPassword"
          type="password"
          placeholder="Re-enter Password"
          class="input-field"
        />
      </div>
      <p v-if="confirmPasswordError" class="error-message">{{ confirmPasswordError }}</p>

      <button class="create-button">Create</button>

      <p class="login-text">Have an account? <a href="/login">Log In</a></p>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 375px;
  height: 812px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

.gradient-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(180deg, #061841 0%, #0e3fa7 99.99%, #0e3b9e 100%);
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

.welcome-text {
  color: white;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
}

.create-account {
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 400;
  margin-bottom: 20px;
}

.input-group {
  width: 100%;
  margin-bottom: 8px;
}

.input-field {
  width: 100%;
  height: 48px;
  border: 2px solid white;
  border-radius: 24px;
  background: transparent;
  color: white;
  padding: 0 20px;
  margin-bottom: 5px;
  outline: none;
  box-sizing: border-box;
  font-size: 14px;
}

.input-field::placeholder {
  color: white;
  opacity: 0.8;
}

.error-message {
  color: #ff4d4d;
  font-size: 12px;
  text-align: left;
  margin-top: -8px;
  margin-bottom: 10px;
  width: 100%;
}

.create-button {
  width: 311px;
  height: 48px;
  background: white;
  border-radius: 24px;
  border: none;
  color: #0e3b9e;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 600;
  cursor: pointer;
  margin: 20px 0;
}

.login-text {
  color: white;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 400;
}

.login-link {
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
