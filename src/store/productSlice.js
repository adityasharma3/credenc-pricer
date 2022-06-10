import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        product: 'Sofa'
    },

    reducers: {
        newProduct(state, payload) {
            state.product = payload;

            console.log(state.product);
        }
    }
});

export const productSliceActions = productSlice.actions;
export default productSlice;