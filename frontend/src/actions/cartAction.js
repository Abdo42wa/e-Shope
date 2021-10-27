import axios from "axios"

export const addToCart = (id, qty) => async (dispatch, getSate) => {

    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
            products: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getSate().cart.cartItems))
}