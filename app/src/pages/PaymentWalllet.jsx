import React, { useReducer } from 'react'
var initialState={
  amount:0,
  name:'Durgesh',
  Account_no:"32511761402"
};
const reducer= (state,action)=>{
    console.log("action: " + action);
    console.log("state: ",state);
    switch(action){
                case "Credited":{
                    var amount=state.amount+5;
                    //  state.amount=amount;
                     return {...state,amount};
                }
                case "Debited":{
                  var amount=state.amount-5;
                  //  state.amount=amount;
                   return {...state,amount};

               }
                // case "Odd":{
                //   return state-10;
                // }
                default:{
                    return state;
                }
             }
}
export default function PaymentWalllet() {
    const[data,dispatch]= useReducer(reducer,initialState);

    console.log("data",data.amount);
  return (
    <div>PaymentWalllet : {data.amount}<br></br>
    <span>Account Holder Name:{data.name}</span><br></br>
    <span>Account Holder Name:{data.Account_no}</span><br></br>
    <button onClick={()=>dispatch("Credited")}>Credited</button>
    <button onClick={()=>dispatch("Debited")}>Debited</button>
    <button onClick={()=>dispatch("Odd")}>10 debited </button>
    </div>
  )
}
