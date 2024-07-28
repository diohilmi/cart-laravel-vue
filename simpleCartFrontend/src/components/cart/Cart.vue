<template>
    <div class="row my-4">
        <div class="col-md-12">
            <div class="card shadow-sm border-0">
                <div class="card-body">
                    <table class="table table-hover text-center">
                        <thead class="tablße-light">
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
                            <tr v-for="(item, index) in store.getCartItems" :key="item.id">
                                <td>{{ index + 1 }}</td>
                                <td>
                                    <img :src="item.image" alt="Product Image" class="img-fluid rounded" width="40" height="40">
                                </td>
                                <td>{{ item.name }}</td>
                                <td>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <button class="btn btn-link p-0" @click="store.incrementQ(item)">
                                            <i class="bi bi-caret-up"></i>
                                        </button>
                                        <span class="mx-2">{{ item.quantity }}</span>
                                        <button class="btn btn-link p-0" @click="store.decrementQ(item)">
                                            <i class="bi bi-caret-down"></i>
                                        </button>
                                    </div>
                                </td>
                                <td>Rp {{ formatRupiah(item.price) }}</td>
                                <td>Rp {{ formatRupiah(item.price * item.quantity) }}</td>
                                <td>
                                    <button class="btn btn-link text-danger p-0" @click="store.removeFromCart(item)">
                                        <i class="bi bi-trash3"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="table-active">
                                <th colspan="5" class="text-center" >Total</th>
                                <td class="text-center">
                                    <span class="badge bg-danger rounded-pill fs-6 p-3">
                                        Rp {{ formatRupiah(total) }}
                                    </span>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
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