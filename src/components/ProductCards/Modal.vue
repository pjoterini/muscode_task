<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IProduct } from '../../utils/productsMockup';

export default defineComponent({
  props: ['product', 'closeModal', 'editProduct'],
  setup(props) {
    const product = { ...props.product };

    const editedProduct = ref<IProduct>(product);

    return { editedProduct };
  },
});
</script>

<template>
  <div v-if="product && closeModal">
    <div class="modal">
      <div class="background" @click="closeModal"></div>
      <div class="modal-content">
        <h2>Edycja produktu: {{ product.title }}</h2>
        <div class="middle-section">
          <img :src="`/src/assets/img${product.id + 1}.png`" />
          <form
            @submit="e => editProduct(e, product.id, editedProduct, closeModal)"
          >
            <div class="inputs">
              <label for="title">Nazwa produktu</label>
              <input
                id="title"
                v-model="editedProduct.title"
                class="input-element"
                type="text"
                required
              />
              <label for="price">Cena</label>
              <input
                id="price"
                v-model="editedProduct.price"
                class="input-element"
                type="number"
                required
              />

              <label v-if="product.promoPrice" for="promoPrice"
                >Promocyjna cena</label
              >
              <input
                v-if="product.promoPrice"
                id="promoPrice"
                v-model="editedProduct.promoPrice"
                class="input-element"
                type="number"
                required
              />

              <label for="currency">Waluta</label>
              <select
                id="currency"
                v-model="editedProduct.currency"
                class="input-element"
                type="text"
                required
              >
                <option>$</option>
                <option>PLN</option>
                <option>EUR</option>
              </select>
            </div>

            <footer>
              <button type="submit" class="button-submit">Zapisz</button>
              <button type="button" @click="closeModal">Anuluj</button>
            </footer>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  min-width: 100vw;
  height: 100vh;
  z-index: 2;
}

.background {
  background-color: rgba(0, 0, 0, 0.506);
  height: 100vh;
  width: 100%;
}

.modal-content {
  height: 100vh;
  background-color: white;
  min-width: 500px;
  height: 100vh;
}

h2 {
  height: 5%;
  padding: 1rem;
  border-bottom: 3px solid rgb(81, 68, 255);
}
.middle-section {
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

img {
  margin: 2rem;
  width: 200px;
  height: 200px;
  object-fit: fill;
  border-radius: 50%;
  border: 1px solid var(--border);
}

form {
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.inputs {
  padding: 1rem;
}

label {
  color: var(--border);
}

.input-element {
  width: 100%;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--main-font-color);
  border: none;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
}

.input-element:focus {
  outline: none;
  font-size: 1rem;
}

footer {
  border-top: 2px solid var(--border);
  padding: 0.5rem 0;
}

@media (max-width: 700px) {
  .modal {
    position: fixed;
  }
  .modal-content {
    min-width: 300px;
  }
}
</style>
