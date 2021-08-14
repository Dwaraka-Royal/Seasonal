import React,{Component} from 'react'
import './App.css'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            lat:"",
            long:""
        }
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we call setstate
                this.setState({
                    lat:position.coords.latitude,
                    long:position.coords.longitude
                })
            },
            (err)=>console.log("you got an error",err)
        )
    }

    
    render(){
        
        return(
            <div>
                <span>Latitude : {this.state.lat}</span>
                <span>Longitude : {this.state.long}</span>
            </div>
        )
    }
}
export default App;