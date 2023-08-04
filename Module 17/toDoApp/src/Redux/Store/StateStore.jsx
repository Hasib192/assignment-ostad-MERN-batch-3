import {configureStore} from "@reduxjs/toolkit";
import todoCreateSlicess from "../State/TodoApp/TodoState"

const stateconfigureStore = configureStore({
    reducer:{
        todoApp:todoCreateSlicess,
    }
})
export default stateconfigureStore;