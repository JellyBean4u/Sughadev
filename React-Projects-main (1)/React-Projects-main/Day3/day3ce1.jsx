import React, {Component} from 'react'

class Firstd3c1 extends Component{
   constructor()
   {
        super();
        this.state={
            message:true
        }
   }
   toggleMessage = () =>{
    this.setState(prevState => ({
            message: prevState.message === true?false:true
    }));
   };
   render(){
    return(
        <div style={{backgroundColor:'darkred',height:'100vh',textAlign:'center',justifyContent:'center',alignContent:'center'}}> 
                <button  style={{color:'black',font:'message-box',fontFamily:'fantasy',fontWeight:'bolder',cursor:'pointer'}}     onClick={this.toggleMessage}>{this.state.message === true? 'Hide Component': 'Show Component'}</button>
                <br/>
                <div style={{color:'white',fontWeight:'bolder'}}>
                {this.state.message && <p>Hi, How are you</p>}
                </div>
        </div>
    )
   }
}

export default Firstd3c1
