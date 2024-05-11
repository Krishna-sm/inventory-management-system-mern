import { createSlice } from "@reduxjs/toolkit";

export const SidebarSlice = createSlice({
    name: 'SidebarSlice',
    initialState: {
        toggle: false,
        collapsed: false,
    },
    reducers: {
        toggleSidebar(state) {
            state.toggle = !state.toggle
        },
        collapsedSidebar(state) {
            state.collapsed = !state.collapsed
        },
       
    }
})


export const { toggleSidebar,collapsedSidebar } = SidebarSlice.actions;


export const SidebarSlicePath = (state: any) => state.SidebarSlice