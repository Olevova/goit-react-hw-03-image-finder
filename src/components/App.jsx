import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
state = {
  search:""
}

onHandler = (props)=>{
  this.setState({
    search:props
  })
}

render(){
    return <div>
      <Searchbar onSubmit={this.onHandler}/>
     </div>
  };
};
