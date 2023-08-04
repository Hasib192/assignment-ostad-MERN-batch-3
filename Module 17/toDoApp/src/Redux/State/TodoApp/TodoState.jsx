import {createSlice} from "@reduxjs/toolkit";


const todoCreateSlices = createSlice({
    name:"MY-ToDo",
    initialState:{
        value:[]
    },
    reducers:{
        addData:(state,action)=>{
            state.value.push(action.payload);
        },
        deleteData:(state,action)=>{
                state.value.splice(action.payload,1);
        },
        updateTOdoData:(state,action)=>{
            state.value.splice(action.payload["index"],1,action.payload["text"]);
        },
        allCelarData:(state)=>{
            state.value = state.value=[];
        }
    }
});

export const {addData,deleteData,updateTOdoData,allCelarData} = todoCreateSlices.actions;
export default todoCreateSlices.reducer;