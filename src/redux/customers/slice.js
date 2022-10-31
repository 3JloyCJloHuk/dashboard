import { createSlice } from "@reduxjs/toolkit";
import { fetchCustomers } from "./asyncAction";

const initialState = {
    customers: [],
    page: 1,
    count: 8,
    totalPage: null,
    totalCount: null,
    status: "loading",
    searchValueName: "",
}

const sliceCustomers = createSlice({
    name: "customers",
    initialState: initialState,
    reducers: {
        // змінна сторінки
        setPage(state, action) {
            state.page = action.payload;
        },
        setSearchValueName(state, action) {
            state.searchValueName = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCustomers.pending, (state) => {
            state.status = "loading";
            state.customers = [];
        });
        builder.addCase(fetchCustomers.fulfilled, (state, action) => {
            state.customers = action.payload.items;
            state.totalPage = Math.ceil(action.payload.count / state.count);
            state.totalCount = action.payload.count;
            if (state.pageCount < state.page) {
                state.page = 1;
            }
            state.status = "success";
        });
        builder.addCase(fetchCustomers.rejected, (state) => {
            state.status = "error";
            state.items = [];
        });
    }
})

export const { setPage, setSearchValueName } = sliceCustomers.actions;

export default sliceCustomers.reducer;