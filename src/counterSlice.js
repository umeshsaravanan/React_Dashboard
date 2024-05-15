import { createSlice } from "@reduxjs/toolkit";
import { close, menu, sunny, moon } from "ionicons/icons";
import profilePic from './images/compressed.jpg'
const initial = () => {
    const darkMode = localStorage.getItem('dark') === 'true';
    const isSidebarVisible = window.innerWidth >= 1024;
    const visible = false;
    const icon = isSidebarVisible ? close : menu;
    const mode = darkMode ? sunny : moon;
    const profile = profilePic

    return {
        darkMode,
        isSidebarVisible,
        visible,
        icon,
        mode,
        profile
    }
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initial(),
    reducers: {
        toggleDarkMode: state => {
            state.darkMode = !state.darkMode;
            localStorage.setItem('dark', state.darkMode ? 'true' : 'false');
            state.mode = state.mode === sunny ? moon : sunny
        },

        toggleSidebar: state => {
            state.icon = state.isSidebarVisible ? menu : close
            state.isSidebarVisible = !state.isSidebarVisible;
        },

        toggleVisible: state => {
            state.visible = !state.visible
        }
    }
})

export const { toggleDarkMode, toggleSidebar, toggleVisible } = counterSlice.actions

export default counterSlice.reducer