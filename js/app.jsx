import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch,NavLink, Link} from "react-router-dom"
import { MainSite, ListSite } from "./components/Components.jsx";
import FishList from "./fishlist"
import '../css/style.scss';
//import '../images';

const Main = (props) =>{    
    return(
        <MainSite fishs={props.fishs}/>
    )
}

const List =(props)=>{
    return(
        <ListSite fishs={props.fishs}/>
    )
}

const NotFund =()=>{
    return(
        <h1>404,Nothing is here</h1>)
}

class App extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={(props) => <Main fishs={this.props.fishs} />} />
                        <Route path='/twoje' component={(props) => <List fishs={this.props.fishs} />} />
                        <Route component={NotFund}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App fishs={FishList}/>,
        document.getElementById('app')

    );
});