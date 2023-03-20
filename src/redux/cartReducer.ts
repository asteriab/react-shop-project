import { createSlice, AnyAction } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type State = {
    [id: number]: number
}

const initialState: State = {
    1: 3,
    2: 4,
}

// const cartReducer = (state = initialState, action: AnyAction) => {
//     switch (action.type) {
//         case 'ADD_PRODUCT_TO_CART':
//             return {
//                 ...state,
//                 [action.id]: (state[action.id] || 0) + action.count,
//             }

//         case 'DELETE_PRODUCT_FROM_CART': {
//             return omit(state, action.id)
//         }

//         case 'CHANGE_PRODUCT_QUANTITY': {
//             return {
//                 ...state,
//                 [action.id]: action.count,
//             }
//         }
//         default:
//             return state
//     }
// }
// export default cartReducer

export const cartSlice = createSlice({
    name: 'cartProduct',
    initialState,
    reducers: {
        changeProductQuantity: (state, action) => ({
            ...state,
            [action.payload.id]: action.payload.count,
        }),
        deleteProductFromCart: (state, action) => omit(state, action.payload),
        addProductToCart: (state, action) => ({
            ...state,
            [action.payload.id]:
                (state[action.payload.id] || 0) + action.payload.count,
        }),
    },
})

export const {
    addProductToCart,
    deleteProductFromCart,
    changeProductQuantity,
} = cartSlice.actions

export default cartSlice.reducer
