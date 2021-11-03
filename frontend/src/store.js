import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer, productDeleteReducer, productCreateReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {
    userLoginReducer, userRegisterReducer,
    UserDetailsReducer, UserUpdateProfileReducer,
    userListReducer, userDeleteReducer, userUpdateReducer
} from './reducers/userReducer'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer } from './reducers/orderReducer'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: UserDetailsReducer,
    userUpdateProfile: UserUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer

})
const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems')) : []


const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : {};

const initialState = {
    cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage, paymentMethod: paymentMethodFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
}

const middleWare = [thunk]

const store = createStore(reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare)))



export default store