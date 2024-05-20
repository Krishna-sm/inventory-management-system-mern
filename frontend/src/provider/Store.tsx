import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserSlice } from "./slice/user.slice";
import { SidebarSlice } from "./slice/Sidebar.slice";
import { AuthApi } from "./queries/Auth.query";
import { UserApi } from "./queries/Users.query";

export const store = configureStore({
    reducer:{
        [UserSlice.name]: UserSlice.reducer,
        [SidebarSlice.name]: SidebarSlice.reducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
        [UserApi.reducerPath]: UserApi.reducer
    },

    middleware: (d) => d().concat(AuthApi.middleware, UserApi.middleware)
}) 

setupListeners(store.dispatch)