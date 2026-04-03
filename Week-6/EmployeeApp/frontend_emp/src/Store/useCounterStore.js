import { create } from "zustand";

//create store
export const useCounterStore = create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,
    //add user state(name,age,email)
    user: {name : "rawat" , email: "rawat@mail.com" , age:19},
    //function to change email
    changeEmail:()=>set({...user,email:"test@mail.com"}),
    //function to change name and age
    changeNameAndAge:()=>set({...user,name:"kapish",age:21}),
    //functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    re_reset:()=>set({newCounter:500}),
    decrementCounter1:()=>set(state=>({newCounter1:state.newCounter1-20}))
}))