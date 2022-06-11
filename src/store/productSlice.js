import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        product: {
            id: 1,
            productName: "Sofa",
            manufacturingCost: 5000,
            priceList: [],
        }
    },

    reducers: {
        newProduct(state, payload) {
            state.product = payload;
        }
    }
});

export const productSliceActions = productSlice.actions;
export default productSlice;