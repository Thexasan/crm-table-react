import { createSlice } from "@reduxjs/toolkit";
import { deleteTodo, editTodo, getTodos, patchTodo, postTodo, searchTodo } from "../api/todos";

const initialState = {
    list:[],
    title:"",
    loading:false,
    searchResult:[]
}

const setLoading  = (state)=>{
    state.loading = true
}


export const slice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        handleChange(state,action){
            state.title = action.payload
        },
        updateSearchResults(state,action){
            state.searchResult = action.payload
        }
    },
    extraReducers:(builder)=>{
        //getTodos
        builder.addCase(getTodos.pending,setLoading)
        builder.addCase(getTodos.fulfilled,(state,action)=>{
            state.loading = false
            state.list = action.payload
        })
        builder.addCase(getTodos.rejected,(state)=>{
            state.loading = false
        })

        //postTodos
        builder.addCase(postTodo.pending,setLoading)
        builder.addCase(postTodo.fulfilled,(state,action)=>{
            state.loading = false
            console.log(action.payload);
        })
        builder.addCase(postTodo.rejected,(state)=>{
            state.loading = false
        })

        //patchTodo
        builder.addCase(patchTodo.pending,setLoading)
        builder.addCase(patchTodo.fulfilled,(state,action)=>{
        state.loading = false
        })
        builder.addCase(patchTodo.rejected,(state,action)=>{
            state.loading = false
            })

        //delete
        builder.addCase(deleteTodo.pending,setLoading)
        builder.addCase(deleteTodo.fulfilled,(state,action)=>{
            state.loading = false
        })
        builder.addCase(deleteTodo.rejected,(state,action)=>{
            state.loading = false
        })

        //editTodo
        builder.addCase(editTodo.pending,setLoading)
        builder.addCase(editTodo.fulfilled,(state,action)=>{
            state.loading = false
        })
        builder.addCase(editTodo.rejected,(state)=>{
            state.loading = false
        })

           //searchdata
           builder.addCase(searchTodo.pending,setLoading)
           builder.addCase(searchTodo.fulfilled,(state,action)=>{
               state.loading = false
           })
           builder.addCase(searchTodo.rejected,(state)=>{
               state.loading = false
           })


    }
})

export const { handleChange,updateSearchResults } = slice.actions
export default slice.reducer