<template>
    <div class="col-md-4 mb-2">
        <div class="card h-100">
            <img :src="product.image" alt="Product Image" class="card-img-top" style="height: 414px; object-fit: cover;">
            <div class="card-body d-flex flex-column" >
                <div class="card-title">
                    <h5 class="card-title mb-2">{{ product.name }}</h5>
                </div>
                <p class="card-text text-muted">
                    {{product.description}}
                </p>
                <div class="mt-auto">
                    <p class="mb-3">
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