import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        product: {
            id: 1,
            productName: "Sofa",
            manufacturingCost: 5000,
            priceList: [{
                "pricingModel": "Subscription",
                "status": "Inactive",
                "amount": "2000/year"
            },
            {
                "pricingModel": "EMI",
                "status": "Active",
                "amount": "10 * 2500/month"
            },
            {
                "pricingModel": "Lumpsum",
                "status": "Inactive",
                "amount": "2,00,000"
            }],
        }
    },

    reducers: {
        newProduct(state, payload) {
            state.product = payload;

            // console.log(state.product.payload);
        }
    }
});

export const productSliceActions = productSlice.actions;
export default productSlice;