import { createSlice, AnyAction } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type State = {
    [id: number]: number
}

const initialState: State = {
    1: 3,
    2: 4,
}

const cartReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return {
                ...state,
                [action.id]: (state[action.id] || 0) + action.count,
            }

        case 'DELETE_PRODUCT_FROM_CART': {
            return omit(state, action.id)
        }

        case 'CHANGE_PRODUCT_QUANTITY': {
            return {
                ...state,
                [action.id]: action.count,
            }
        }
        default:
            return state
    }
}

// export const cartSlice = createSlice({
//     name: 'count',
//     initialState,
//     reducers: {
//         onIncrement: (state, action) => ({
//             ...state,
//             [action.payload]: state[action.payload] + 1,
//         }),
//         onDecrement: (state, action) => ({
//             ...state,
//             [action.payload]: state[action.payload] - 1,
//         }),
//     },
// })

// export const { onIncrement, onDecrement } = cartSlice.actions

// export default cartSlice.reducer

export default cartReducer