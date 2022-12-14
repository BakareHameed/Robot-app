import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
// import Scroll from './Scroll';
import './App.css'

class App extends Component {
    constructor (){
        super()
        this.state= {
            robots : robots,
            searchField : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return   response.json();
        })
        .then(users =>{
            this.setState({robots: users})
        });
    }

    onSearchChange=(event)=>{
        this.setState({ searchField: event.target.value})
    }

    render(){
        const filteredRobots=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(this.state.robots === 0){
            return <h1>Loading...</h1>
        }
        else{
            return(
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>  
              );          
        }
    }
}


export default App;