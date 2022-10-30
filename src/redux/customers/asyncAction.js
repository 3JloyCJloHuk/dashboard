import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// отримання users
export const fetchCustomers = createAsyncThunk(
    'customers/fetchCustomersStatus',
    async (params) => {
        const { page, count, searchValueName } = params;
        const { data } = await axios.get(
            `https://62a9f7673b314385543f63b0.mockapi.io/posts?page=${page}&limit=${count}&Name=${searchValueName}`,
        );
        console.log(data)
        return data;
    }
)