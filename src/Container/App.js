import React, {Component} from 'react';
import CardList from '../Component/CardList';
// import {robots} from './robots';
import Searchbox from '../Component/Searchbox';
import Scroll from '../Component/Scroll';

class App extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            robots: [],
            searchField:''
        }
    }

    onSearchChange=(event)=>
    {
        this.setState({searchField:event.target.value});
        console.log(event.target.value);
    }

    render()
    {
        const {robots, searchField}=this.state;
        const filteredRobots=robots.filter(robot=>{
            return robot.username.toLowerCase().includes(searchField.toLowerCase());
        })

        return(
            <div className='tc'>
                <h1 className='white'>Bot Search</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            );
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>this.setState({robots:users}));
    }
   
}

export default App;