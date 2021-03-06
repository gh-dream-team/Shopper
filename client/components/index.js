/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as AllProducts} from './AllProducts'
export {default as SingleProduct} from './SingleProduct'
export {default as Cart} from './Cart'
export {default as CartItemView} from './CartItemView'
export {default as Checkout} from './Checkout'
export {default as UserCartItemView} from './UserCartItemView'
export {default as UserCart} from './UserCart'
export {default as GuestCheckout} from './GuestCheckout'
// export {default as UserCheckout} from './UserCheckout'
export {default as UserOrder} from './UserOrder'
export {default as UserAccount} from './UserAccount'
