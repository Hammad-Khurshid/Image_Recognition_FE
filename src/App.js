import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkFrom/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Prtls from './Components/Particles/Particles';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignIn from './Components/signin/SignIn';
import Register from './Components/Register/Register';
        
      const raw = new Clarifai.App({
        apiKey: 'eec46ed0322e4dfab533a8a76f938c64'
       });

       const initialState= {

      input: '',
      IMAGEURL: '',
      Data: '',
      route: 'signin',
      isSignedin: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
        }
       }
class  App extends Component {
  constructor(){
    super();
    this.state= initialState;
   }
  loadUser = (data) =>{
      this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      }})
  }

  
  DisplayResult = (Data, concepts , concepts1)=> {
     this.setState({Data: concepts}) 
     
     concepts = Data.outputs[0].data.regions[0].data.concepts[0].value;
    concepts1 = Data.outputs[0].data.regions[0].data.concepts[0].name;
     console.log("There is" , concepts, "% probability, that its picture of", concepts1)
     alert(concepts1)
    }
   onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onTap = ()=>{
    this.setState({IMAGEURL: this.state.input});
    raw.models
      .predict(  Clarifai.CELEBRITY_MODEL ,this.state.input)

    .then(response => {
        if(response){
          fetch('https://young-castle-77342.herokuapp.com/image', 
          {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
             id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries:count}))
          })
          .catch(console.log)
        }
      this.DisplayResult (response)})
      .catch(err=> console.log("error" , err));
    
    }
    onRouteChange=(route) =>{
      if ( route === 'signout'){
        this.setState(initialState)
      }else if (route === 'home') {
        this.setState({isSignedin: true})
      }
      this.setState({route: route}); 
    }     
  render() {
    const {isSignedin , IMAGEURL , route} = this.state;
    return (

      <div className="App">
        <Prtls className="particles"/>
        <Logo />
      <Navigation isSignedin={isSignedin} onRouteChange={this.onRouteChange}/>
      
        { route ==='home'
       ? <div>
        <Rank name={this.state.user.name} entries={this.state.user.entries} />
      <ImageLinkForm onInputChange={this.onInputChange} onTap={this.onTap} />
      <FaceRecognition  IMAGEURL={IMAGEURL} />
          </div>
          :(
            route ==='signin'?
            <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>:
             <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             )
            }
      </div>
  );
}
}

export default App;
