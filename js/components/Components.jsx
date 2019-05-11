import React from 'react';
import ReactDOM from 'react-dom';



class FishComp extends React.Component{



    render(){
        return(
            <li key={this.props.fish.index}>
                <img src={this.props.fish.image}/>
                <div>
                    <div>
                        <h3>{this.props.fish.name}</h3>
                        <p>Wielkość: {this.props.fish.size}cm</p>
                    </div>
                    <div>
                        <input/>
                        <button onClick={this.hadleButton}>Dodaj</button>
                    </div>
                </div>
            </li>
        )
    }
}

const Akwarium =(props)=>{
    return(
        <div>
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
                        {this.props.fishs.map((fish,index) => <FishComp fish={fish} />)}
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
                    <li>Lista Gatunków</li>
                    <li>Twoje Akwarium</li>
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
                 <Akwarium {...this.props}/>
                 <Footer/>
            </div>
            
            
        )
    }
}

export { MainSite, ListSite};
