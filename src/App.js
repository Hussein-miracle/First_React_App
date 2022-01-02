import React,{Component} from "react";

import './App.css';

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox} from "./components/search-box/search-box.component"


class App extends Component{

  constructor(){
    super();

    this.state = {
      bookmarks: [],
      monsters:[],
      queryField: "",
    };

    // this.handleChange = this.handleChange.bind(this);


    
  }

  async componentDidMount(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(res);
    const data = await res.json();

    // console.log(data); 
    this.setState({monsters : data})

  }

  handleChange = (e) => {
    const queryValue = e.target.value;

    this.setState({queryField : queryValue })
  }


  render(){
    const {monsters,queryField} = this.state;

    const filteredAvatars = monsters.filter( monster => {

      return    monster.name.toLowerCase().includes( queryField.toLowerCase() ) ;

    })


    return (

      <div className="App">
        <h1> Avatars Rolodex</h1>

        <SearchBox placeholder= "Search avatar"  handleChange = { this.handleChange} />
        
        <CardList   monsters = { filteredAvatars }/>        

      </div>
      
  
    );
  }

}


export default App;
