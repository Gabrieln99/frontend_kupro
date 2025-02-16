<template>
  <div class="landing-container">
    <div
      class="left-section"
      @mouseover="hoverBuy"
      @mouseleave="resetSections"
      @click="clickBuy"
    >
      <button class="buttonKupi">Kupi</button>
    </div>
    <div
      class="right-section"
      @mouseover="hoverSell"
      @mouseleave="resetSections"
      @click="clickSell"
    >
      <button class="buttonProdaj">Prodaj</button>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";

const isHoveringBuy = ref(false);
const isHoveringSell = ref(false);
const isClickedBuy = ref(false);
const isClickedSell = ref(false);

const hoverBuy = () => {
  isHoveringBuy.value = true;
  isHoveringSell.value = false;
};

const hoverSell = () => {
  isHoveringSell.value = true;
  isHoveringBuy.value = false;
};

const resetSections = () => {
  if (!isClickedBuy.value && !isClickedSell.value) {
    isHoveringBuy.value = false;
    isHoveringSell.value = false;
  }
};

const clickBuy = () => {
  isClickedBuy.value = true;
  isClickedSell.value = false;
};

const clickSell = () => {
  isClickedSell.value = true;
  isClickedBuy.value = false;
};
</script>

<style scoped>
.landing-container {
  display: flex;
  height: 100vh;
  transition: all 0.5s ease;
}

.left-section,
.right-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: flex 0.5s ease, background-color 0.5s ease;
}

.left-section {
  background-color: #2148c0; 
  flex: var(--left-flex, 1); 
}

.right-section {
  background-color: #d52626; 
  flex: var(--right-flex, 1); 
}


.buttonKupi {
  background-color: #2148c0;
  color: #ffffff;
  padding: 20px 40px;
  border: none;
  border-radius: 15px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.buttonProdaj {
  background-color: #d52626;
  color: #ffffff;
  padding: 20px 40px;
  border: none;
  border-radius: 15px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

/* Hover animacija */
button:hover {
  transform: scale(1.05);
}


:root {
  --left-flex: 1;
  --right-flex: 1;
}

.left-section:hover {
  --left-flex: 4; 
  --right-flex: 0.2; 
}

.right-section:hover {
  --right-flex: 4; 
  --left-flex: 0.2; 
}


.left-section:active {
  --left-flex: 9; 
  --right-flex: 0.1; 
}

.right-section:active {
  --right-flex: 9; 
  --left-flex: 0.1; 
}
</style>
