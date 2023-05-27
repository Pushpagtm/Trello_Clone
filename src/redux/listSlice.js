import { createSlice } from "@reduxjs/toolkit";
const listSlice=createSlice({
    name:'listSlice',
    initialState:{
        list:[]
    },
    reducers:{
        addList:(state,action)=>{
            state.list.push(action.payload);
            console.log("action called",action)
        },
        addCard:(state,action)=>{
          state.list.forEach((item)=>{
            if(item.id===action.payload.parentId){
                if(Object.hasOwn(item,"children")){
                    item.children.push(action.payload)
                }
                else{
                    item.children=[];
                    item.children.push(action.payload)
                }
            }
          })
            console.log("action called",action)
        }
    }
});
export const {addList,addCard}=listSlice.actions;
export default listSlice.reducer;