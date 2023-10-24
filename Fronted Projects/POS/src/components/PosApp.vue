<script setup lang="ts">
import { ref } from 'vue';

const total = ref(0);

const products = ref([
  { 
    id: 1,
    name: 'Product 1',
    price: 123
  },
  { 
    id: 2,
    name: 'Product 2',
    price: 456
  },
])

const purchasedProducts = ref([]);

function addProduct(item){
  const itemAdded = purchasedProducts.value.find((purchasedItem) => purchasedItem.id == item.id);
  
  if(itemAdded){
    purchasedProducts.value.find((purchasedItem) => purchasedItem.id == item.id).quantity ++;
  }else{
    item.quantity = 1;
    purchasedProducts.value.push(item);
  }

  total.value = 0;
  purchasedProducts.value.forEach(product => {
    total.value += (product.quantity * product.price)
  });
}




</script>

<template>
  <h1>POS</h1>
  <div class="container">
    <div class="items">
      <div class="item" v-for="item in products" :key="item.id" @click="addProduct(item)">
        <img src="https://picsum.photos/200">
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="list">
      <table>
        <thead>
          <tr>
            <th colspan="4">The table header</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in purchasedProducts" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.quantity * item.price }}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><strong>{{ total }}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
