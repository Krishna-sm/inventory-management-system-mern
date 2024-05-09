import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserSlice } from "./slice/user.slice";

export const store = configureStore({
    reducer:{
        [UserSlice.name]: UserSlice.reducer
    },

    middleware: (d) => d().concat()
}) 

setupListeners(store.dispatch)