import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch,NavLink, Link} from "react-router-dom"



 class FishComp extends React.Component{
    render(){
        return(
            <li key={this.props.fish.index}>
                <img src={this.props.fish.image}/>
                <div>
                    <div className="box1">
                        <h3>{this.props.fish.name}</h3>
                        <p>Wielkość: {this.props.fish.size}cm</p>
                    </div>
                    <div className="box2">
                        <input/>
                        <button >Dodaj </button>
                    </div>
                </div>
            </li>
        )
    }
}

const Akwarium =(props)=>{
    
    return(
        <div className="box-center">
            <input/>
            <button>Gotowe!</button>
            <div className='minefishes'>
                <p></p>

            </div>
            <div className="answer">

            </div>
        </div>
    )
}


class MainSection extends React.Component{
    render(){
        console.info(this.props);
        return(
            <div className="mainsection">
                <div className="mainsection-container">
                    <ul className="fish-list">
                        {this.props.fishs.map((fish) => <FishComp fish={fish} />)}
                    </ul>
                </div>
            </div>
        )
    }

}

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <p>weronikaszotowicz@gmail.com</p>

            </div>
        )
    }

}

class Navi extends React.Component{
    render(){
        return(
            <div>
                <ul className="nawigacja">
                    <li><Link to="/">Lista Gatunków</Link></li>
                    <li><Link to="/twoje">Twoje Akwarium</Link></li>
                </ul>
            </div>
        )
    }
}

class Header1 extends React.Component{
    render(){
        return(
            <div className="heder1">
                <Navi />
                <h1>Ryby Akwariowe</h1>
                <p>Dobierz obsade ryb do swojego akwarium</p>

            </div>

        )
    }
}

class Header2 extends React.Component{
    render(){
        return(
            <div className="heder2">
                <Navi />
                <h1>Twoje Akwarium</h1>

            </div>

        )
    }
}


class MainSite extends React.Component{
    render(){
        return (
            <div>
                <Header1/>
                
                <MainSection {...this.props} />
                
                <Footer/>

            </div>
            
        )
    }
}

class ListSite extends React.Component{
    render(){
        return (
            <div>
                 <Header2/>
                 <div className="container-site2">
                 <Akwarium {...this.props}/>
                 </div>                
                 <Footer/>
            </div>
            
            
        )
    }
}

export { MainSite, ListSite};
