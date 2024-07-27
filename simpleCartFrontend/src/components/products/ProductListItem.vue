<template>
    <div class="col-md-4 mb-2">
        <div class="card h-100">
            <img :src="product.image" alt="Product Image" class="card-img-top">
            <div class="card-body">
                <div class="card-title">
                    {{product.name}}
                </div>
                <p class="card-text">
                    {{product.description}}
                </p>
                <p>
                    <span class="fw-bold text-danger">
                        Rp {{formatRupiah(product.price)}}
                    </span>
                </p>
                <button class="btn btn-primary"
                    @click="store.addToCart(product)"
                    >
                    <i class="bi bi-cart-check"></i> add to cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useCartStore } from '../../store/useCartStore.js'

    const store = useCartStore()

    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })

    function formatRupiah(amount) {
        const num = parseFloat(amount);
        return num.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }
</script>

<style>

</style>z