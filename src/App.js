import React,{Component} from "react";

import './App.css';

import { CardList } from "./components/card-list/card-list.component";



class App extends Component{

  constructor(){
    super();

    this.state = {
      bookmarks: [],
      monsters:[],
      queryField: "",
    };

    
  }

  async componentDidMount(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(res);
    const data = await res.json();

    // console.log(data); 
    this.setState({monsters : data})

  }


  render(){

    return (

      <div className="App">
        <h1> Avatars Rolodex</h1>
        <input type="search"  placeholder="search avatars" onChange={ (event) => {
          // console.log(event);
          // console.log(event.target.value);
          const value = event.target.value;
                          //updater   
          return this.setState({queryField: value});

          

        }}/>
        
        <CardList   monsters = {this.state.monsters}/>

      </div>
      
  
    );
  }

}


export default App;
