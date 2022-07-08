import { createSlice } from '@reduxjs/toolkit'

const iconslice= createSlice({
name:"icon",
initialState:{
    icon:'moon'
},
reducers:{
    iconMoon:state=>{
        state.icon= 'moon'
    },
    iconSun:state=>{
        state.icon= 'sun'
    },
}
})

export default iconslice

export const iconAction = iconslice.actions
