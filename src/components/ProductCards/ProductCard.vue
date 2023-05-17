<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    product: Object,
  },
});
</script>

<template>
  <div v-if="product" class="card-container">
    <div class="upper-section">
      <h2>{{ product.title }}</h2>
    </div>

    <img :src="`/src/assets/img${product.id + 1}.png`" />
    <div class="prices">
      <p class="price">{{ product.price }} {{ product.currency }}</p>
      <p :class="product.promoPrice ? 'promo-price' : 'no-promo-price'">
        {{ product.promoPrice }} {{ product.currency }}
      </p>
    </div>
  </div>
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
</style>
