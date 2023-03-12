import { createSlice, AnyAction } from '@reduxjs/toolkit'

type ProductsLike = {
    [id: number]: boolean
}

export const initialState: ProductsLike = {
    1: true,
    2: true,
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
    },
})

export const { toggleLike } = likeSlice.actions

export default likeSlice.reducer

// const likeReducer = (state = initialState, action: AnyAction) => {
//     switch (action.type) {
//         case 'TOGGLE_LIKE': {
//             return {
//                 ...state,
//                 [action.id]: !state[action.id],
//             }
//         }
//         default:
//             return state
//     }
// }

// export default likeReducer
