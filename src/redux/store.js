import { configureStore } from "@reduxjs/toolkit";
import sliceCustomers from './customers/slice';

export const store = configureStore({
    reducer: {
        customers: sliceCustomers,
    }
});