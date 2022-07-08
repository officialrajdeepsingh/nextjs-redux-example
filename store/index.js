import { configureStore } from '@reduxjs/toolkit'
import iconslice from './icon-slice'

const store= configureStore({
    reducer: {
        icon: iconslice.reducer
    }
})

export default store
