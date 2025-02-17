<template>
  <div class="container">
    <div class="gradient-bg"></div>
    <div class="content">
      <div class="logo">
        <svg width="124" height="102" viewBox="0 0 124 102" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H15.6523C17.8311 2 19.7535 3.42651 20.3871 5.51343L41.7596 75.9005C42.3932 77.9874 44.3156 79.4139 46.4942 79.4139H94.6487C96.9129 79.4139 98.8889 77.8753 99.4455 75.6779L108.068 41.6561C108.624 39.4586 110.6 37.9201 112.865 37.9201H121.386" stroke="white" stroke-width="3.75648" stroke-linecap="round"/>
          <path d="M72.5935 21.7428C71.8688 21.0174 70.6939 21.0174 69.9692 21.7428L58.1591 33.5667C57.4346 34.2923 57.4346 35.4686 58.1591 36.1942C58.8839 36.9197 60.0589 36.9197 60.7837 36.1942L71.2813 25.6842L81.779 36.1942C82.5037 36.9197 83.6786 36.9197 84.4034 36.1942C85.1281 35.4686 85.1281 34.2923 84.4034 33.5667L72.5935 21.7428ZM73.1371 57.7381V23.0566H69.4256V57.7381H73.1371Z" fill="white"/>
          <path d="M58.2909 99.8512C61.3656 99.8512 63.8581 97.3557 63.8581 94.2774C63.8581 91.1991 61.3656 88.7036 58.2909 88.7036C55.2162 88.7036 52.7236 91.1991 52.7236 94.2774C52.7236 97.3557 55.2162 99.8512 58.2909 99.8512Z" stroke="white" stroke-width="3.00518"/>
          <path d="M85.5086 99.8512C88.5833 99.8512 91.0759 97.3557 91.0759 94.2774C91.0759 91.1991 88.5833 88.7036 85.5086 88.7036C82.4339 88.7036 79.9414 91.1991 79.9414 94.2774C79.9414 97.3557 82.4339 99.8512 85.5086 99.8512Z" stroke="white" stroke-width="3.00518"/>
        </svg>
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
        <input type="text" class="input-field" placeholder="Email ID/Phone Number" />
      </div>

      <div class="input-group">
        <input type="password" class="input-field" placeholder="Password" />
      </div>

      <div class="input-group">
        <input type="password" class="input-field" placeholder="Re-enter Password" />
      </div>

      <button class="create-button">Create</button>

      <p class="login-text">
        Have an account? <span class="login-link">Log in</span>
      </p>
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
  background: linear-gradient(180deg, #0E3FA7 0%, #0E3B9E 0%, #061841 100%);
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
  margin-bottom: 16px;
}

.input-field {
  width: 311px;
  height: 48px;
  border-radius: 24px;
  border: 1px solid white;
  background: transparent;
  color: white;
  padding: 0 20px;
  font-family: Montserrat;
  font-size: 18px;
}

.input-field::placeholder {
  color: white;
  opacity: 0.8;
}

.create-button {
  width: 311px;
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
