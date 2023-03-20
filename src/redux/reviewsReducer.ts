import { createSlice, AnyAction } from '@reduxjs/toolkit'

type Reviews = {
    name: string
    text: string
}

export const initialState: Reviews[] = [
    {
        name: 'Mariana1',
        text: 'this is the REDUX review',
    },
    { name: 'Mariana2', text: 'this is REDUX the review' },
    {
        name: 'Mariana3',
        text: 'this is the REDUX review',
    },
]

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action) => [...state, action.payload],
    },
})

export const { addReview } = reviewsSlice.actions

export default reviewsSlice.reducer
