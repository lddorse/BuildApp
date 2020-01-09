import React from 'react';
import Header from './Header';
import Home from './Home';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      homeLink: "Home",
      homeMounted: true
    };
  }
  onGreet(){
    alert("Hello!");
  }

  onChangeLinkName(newName){
    this.setState({
      homeLink: newName
    });
  }
  
  onChangeHomeMounted(){
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }
  render() {
    let homeCmp = "";
    if(this.state.homeMounted){
      homeCmp = (
          <Home 
                name={"Leo"} 
                initialAge={26} 
                greet={this.onGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                initialLinkName={this.state.homeLink}
                />
        
      );
    }
    return (
      <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Header homeLink={this.state.homeLink}/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              {homeCmp}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <button onClick={this.onChangeHomeMounted.bind(this)} className ="btu btn-primary">(Un)Mount Home</button>
            </div>
          </div>
      </div>
    )
  }
}
export default App;
