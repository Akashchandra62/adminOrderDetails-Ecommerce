import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    payment: "",
    orderType: "",
    orderStatus: ""
};

const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        setPayment(state, payload){
            state.payment = payload.payload;
        },
        setOrderType(state, payload){
            state.orderType = payload.payload;
        },
        setOrderStatus(state, payload){
            state.orderStatus = payload.payload;
        },
        clearFilter(state){
            state.payment = "";
            state.orderStatus = "";
            state.orderType = "";
        }
    }

})

export const {setOrderStatus, setPayment,setOrderType, clearFilter } = filterSlice.actions;

export default filterSlice.reducer;
