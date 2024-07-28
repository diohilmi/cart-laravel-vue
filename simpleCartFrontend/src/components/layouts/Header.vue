<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <i class="bi bi-shop h1"></i>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">
                            <i class="bi bi-house-door-fill"></i> Home
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/cart">
                            <i class="bi bi-cart-check"></i> ({{store.countCartItems}})
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useCartStore } from '../../store/useCartStore.js';
const store = useCartStore();

</script>

<style>

</style>