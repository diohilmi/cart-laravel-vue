<template>
    <div class="row my-4">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in store.getCartItems" :key="item.id">
                                <td>
                                    {{ item.id }}
                                </td>
                                <td>
                                    <img :src="item.image" 
                                        alt="Product Image" class="fluid rounded"
                                        width="60" height="60">
                                </td>
                                <td>
                                    {{ item.name }}
                                </td>
                                <td>
                                    <i class="bi bi-caret-up"
                                        @click="store.incrementQ(item)"></i>
                                        {{ item.quantity }}
                                    <i class="bi bi-caret-down"
                                        @click="store.decrementQ(item)"></i>
                                </td>
                                <td>
                                    Rp {{ formatRupiah(item.price) }}
                                </td>
                                <td>
                                    Rp {{ formatRupiah(item.price * item.quantity) }}
                                </td>
                                <td>
                                    <i class="bi bi-cart-x"
                                        @click="store.removeFromCart(item)"></i>
                                </td>
                            </tr>
                            <tr>
                                <th colspan="3" class="text-center">
                                    Total
                                </th>
                                <td colspan="3" class="text-center">
                                    <span class="badge bg-danger rounded-pill fs-5 p-3">
                                        Rp {{formatRupiah(total)}}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="total > 0">
                        <Stripe />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useCartStore } from '../../store/useCartStore.js';
    
    const store = useCartStore();

    const total = computed(() => store.cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0))

    function formatRupiah(amount) {
        const num = parseFloat(amount);
        return num.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }

</script>

<style>

</style>