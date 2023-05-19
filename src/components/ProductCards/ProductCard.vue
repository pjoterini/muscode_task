<script lang="ts">
import { defineComponent, ref } from 'vue';
import Modal from './Modal.vue';

export default defineComponent({
  components: {
    Modal,
  },
  props: ['product', 'editProduct'],
  setup() {
    const modalIsOpen = ref(false);

    const openModal = () => {
      modalIsOpen.value = true;
    };

    const closeModal = () => {
      modalIsOpen.value = false;
    };

    return { modalIsOpen, openModal, closeModal };
  },
});
</script>

<template>
  <div v-if="product" @click="openModal" class="card-container">
    <div class="upper-section">
      <h2>{{ product.title }}</h2>
    </div>
    <img :src="`/src/assets/img${product.id + 1}.png`" />
    <div class="prices">
      <p v-if="product.promoPrice" class="price">
        {{ product.promoPrice }} {{ product.currency }}
      </p>
      <p v-else class="price">{{ product.price }} {{ product.currency }}</p>
      <p :class="product.promoPrice ? 'promo-price' : 'no-promo-price'">
        {{ product.price }} {{ product.currency }}
      </p>
    </div>
    <div v-if="product.promoPrice" class="discount">
      -{{ Math.round(100 - (product.promoPrice / product.price) * 100) }}%
    </div>
  </div>
  <Modal
    v-if="modalIsOpen"
    :product="product"
    :closeModal="closeModal"
    :editProduct="editProduct"
  />
</template>

<style scoped>
img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.prices {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.price {
  font-size: 1.2rem;
  color: var(--button-focus-color);
}

.promo-price {
  text-decoration: line-through;
}

.no-promo-price {
  visibility: hidden;
}

.discount {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 200px;
  transform-origin: center;
  transform: rotate(45deg) translateX(30%) translateY(-100%);
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
}
</style>
