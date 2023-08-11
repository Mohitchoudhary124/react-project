import React, { Component } from "react";
import CompDelete from "./CompDelete";

export default class Classcmp extends Component {
  constructor() {
    super();
    this.state = {
      name: "hello Durgesh",
      email: "",
      status:0
    };
     this.fun = () => {
      console.log("Hello all");
    }
  }

  // if(this.state.status==1){
        
    // componentWillUnmount(){//it's just after rendering the component
    //   // if(this.state.status==1){
    //     alert("comonent will unmount after click");
    //   // }
     
    // }
        // }

  // static getDerivedStateFromProps(){
  //           // this.setState({name:props.name})
  //           console.log("hello world");
  // }


  

  // componentWillUpdate(){//it's just before rendering the component
  //   if(this.state.status==1){
  //     console.log("hello world");
  //   }
    
  //   // this.setState({statu:1});
  // }

  render() {
    return (
      <div>
        {
          this.state.status==0?<CompDelete/>:""
        }
        <button
          onClick={() =>
            this.setState({ name: "Prajapat", email: "tkp2954@gmail.com" ,status:1 })
          }
        >
          Click Me for delete component
        </button>
        {/* <button
          onClick={() => {
           this.fun();
          }}
        >Fun</button> */}
      </div>
    );
  }
}
