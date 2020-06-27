import React from 'react';
import Navigation from './components/Nevigation/Nevigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import SignIn from './components/signIn/signIn.js';
 import Register from './components/Register/register.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
 apiKey: '6ef77839122245d58d3255d64d758bfa'
});

const particles0 ={
particles: {
		number:{
			value:50,
			density:{
				enable:true,
				value_area:500
			}
		}
    } 
}

class App extends React.Component {

    constructor(){
      super();
      this.state={
        input:'',
        imgUrl:'',
        box:'',
        route:'signin',
        issignIn:false
      }
    }


   /* componentDidMount(){
      fetch('http://localhost:3030/')
        .then(response=>response.json())
        .then(console.log)
    }*/


    onInputChange=(event)=>{
        this.setState({input: event.target.value});
        //console.log(this.state.input)
    }



    faceLocation = (data) =>{
      console.log(data);
      const clarifiaFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      console.log("orgi",clarifiaFace);
      const image = document.getElementById('image');
      const width = image.width;
      const height = image.height;
      return {
        top : height*clarifiaFace.top_row,
        left : width*clarifiaFace.left_col,
        right : width - (width*clarifiaFace.right_col),
        bottom : height - (height*clarifiaFace.bottom_row)
      }
    }

    displayFaceBox = (box) =>{
      this.setState({box:box})
      console.log("disp",this.state.box);
    }

    onSubmit = () => {
      this.setState({imgUrl:this.state.input});
      app.models.predict(Clarifai.FACE_DETECT_MODEL,
         this.state.input)
          .then(response=>this.displayFaceBox(this.faceLocation(response)))
          .catch(err => console.log(err))
    }
    onRouteChange = (route) =>{
      if(route==='home'){
        this.state.issignIn = true;
      }else{
        this.state.issignIn = false;
      }
      this.setState({route: route})
    }
  render(){
   const {issignIn,imgUrl,route,box} = this.state;
  return (
    <div className="App">
      <Particles className="particle"
            params={particles0} />
      <Navigation onRouteChange = {this.onRouteChange} issignIn={issignIn} />
     {route === 'home'?
         <div>
            <Logo />
            <Rank/>
            <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
            <FaceRecognition box = {box} imgUrl={imgUrl}  />
          </div>
      :(  
          this.state.route === 'signin'?
          <SignIn onRouteChange = {this.onRouteChange}/>:
          <Register onRouteChange = {this.onRouteChange}/>
        )
      
      
    }
    </div>
  );}
}

export default App;
