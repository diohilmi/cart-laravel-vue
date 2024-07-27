import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
const  toast = useToast

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: []
    }),
    getters: {
        countCartItems(state) {
            return state.cartItems.length
        },
        getCartItems(state) {
            return state.cartItems
        },
    },
    actions: {
        addToCart(item) {
            const toast = useToast();
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if (index !== -1) {
                this.cartItems[index].quantity += 1
                toast.success('Product quality increased', {
                    timeout: 2000
                } )
            }else {
                item.quantity = 1;
                this.cartItems = [...this.cartItems, item]; 
                toast.success('Product added to cart', {
                    timeout: 2000
                })
            }
        },
        incrementQ(item) {
            const toast = useToast();
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if (index !== -1) {
                this.cartItems[index].quantity += 1
                toast.success('Product quality increased', {
                    timeout: 2000
                } )
            }else {
                toast('Product not found', {
                    timeout: 2000
                })
            }
        },
        decrementQ(item) {
            const toast = useToast();
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if (index !== -1) {
                this.cartItems[index].quantity -= 1
                if(this.cartItems[index].quantity === 0) {
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id)
                }
                toast.success('Product quality decreased', {
                    timeout: 2000
                } )
            }else {
                toast.success('Product not found', {
                    timeout: 2000
                })
            }
        },
        removeFromCart(item) {
            const toast = useToast();
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if (index !== -1) {
                this.cartItems = this.cartItems.filter(product => product.id !== item.id)
                toast.success('Product removed from cart', {
                    timeout: 2000
                } )
            }else {
                toast.success('Product not found', {
                    timeout: 2000
                })
            }
        }
    }
})
