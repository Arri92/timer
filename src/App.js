
import React from 'react'
import './App.css';
let z= 0
let k =0
export default class App extends React.Component {
componentDidMount(){
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
  this.div.appendChild(script);
}
componentDidMount() {
  let timeLeftVar = this.secondsToTime(this.state.seconds);
  this.setState({ time: timeLeftVar });
}
  
  
    constructor() {
      super();
      this.state = { time: {}, seconds: 25*60, arr:25, arrB:5, arrS:0, z:0, b:0, }
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
      this.AddOne=this.AddOne.bind(this);
      this.MinOne=this.MinOne.bind(this);
      this.AddOneB=this.AddOneB.bind(this);
      this.MinOneB=this.MinOneB.bind(this);
      this.Reset=this.Reset.bind(this);
       
    }
  
    secondsToTime=(secs)=>{
      let divisor_for_minutes = secs ;
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
   seconds = seconds < 10 ? ('0'+ seconds) : seconds;
   minutes = minutes < 10 ? ('0'+ minutes) : minutes;
      let obj = {
        "m": minutes+":"+seconds,
        
      };
      return obj;
    }
  
    
  
    startTimer() {
      
      if (this.state.arrS===0) {
        this.state.arrS+=1
        this.timer = setInterval(this.countDown, 1000);
      }else {
        this.state.arrS*=0
        this.timer = clearInterval(this.timer)
      }
    }
    
      
    Reset=()=>{
      
      this.setState({z:0})
      let seconds = 1500;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      this.setState({arr: 25})
      this.setState({arrB:5})
      this.setState({arrS:0})
      this.setState({b:0})
      this.timer = clearInterval(this.timer)
      const audioEl = document.getElementsByClassName("beep")[0]
    audioEl.pause()
    audioEl.currentTime=0
    }
    
  
    
    countDown() {
      if (this.state.seconds > 0){
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
    }else if (this.state.seconds == 0 && this.state.b===0) { 
        this.setState({b:this.state.b + 1})
        let Break = this.state.arrB
        Break*=60
        let seconds = this.state.seconds + Break
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });

        const audioEl = document.getElementsByClassName("beep")[0]
    audioEl.play()

      }else if(this.state.seconds == 0 && this.state.b===1){
        this.setState({b:this.state.b - 1})
        
        let Sess = this.state.arr
        Sess*=60
        let seconds = this.state.seconds + Sess
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,}) 
          const audioEl = document.getElementsByClassName("beep")[0]
    audioEl.play()
        }
}


AddOne=()=>{
  if (this.state.arr!==60&&this.state.arrS===0&&this.state.b===0){
  this.setState({arr:this.state.arr + 1})
 
  let seconds = (this.state.arr +1)*60;
  this.setState({
    time: this.secondsToTime(seconds),
    seconds: seconds,
  });
} else if (this.state.arr!==60&&this.state.arrS===0&&this.state.b===1){
  this.setState({arrB:this.state.arr + 1})
}
}

    
    MinOne=()=>{
      if (this.state.arr!==1&&this.state.arrS===0&&this.state.b===0){
        this.setState({arr:this.state.arr - 1})
       
        let seconds = (this.state.arr -1)*60;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
      } else if (this.state.arr!==1&&this.state.arrS===0&&this.state.b===1){
        this.setState({arrB:this.state.arr - 1})
      }
      }
      
    
    AddOneB=()=>{
      if (this.state.arrB!==60&&this.state.arrS===0&&this.state.b===1){
        this.setState({arr:this.state.arrB + 1})
       
        let seconds = (this.state.arrB +1)*60;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
      } else if (this.state.arrB!==60&&this.state.arrS===0&&this.state.b===0){
        this.setState({arrB:this.state.arrB + 1})
      }
      }
    MinOneB=()=>{
      if (this.state.arrB!==1&&this.state.arrS===0&&this.state.b===1){
        this.setState({arr:this.state.arrB - 1})
       
        let seconds = (this.state.arrB -1)*60;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
      } else if (this.state.arrB!==1&&this.state.arrS===0&&this.state.b===0){
        this.setState({arrB:this.state.arrB - 1})
      }
      }
    render() {
      return(
        <div class="content">
        <div className="App" ref={el => (this.div = el)}>
          
          <h1>25+5</h1>
          <div><audio className="beep" id="beep" src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" />
          <div class="right"><h2 className="bet" id="break-label">Break Length</h2>
          <div class="grid-container"><button class="col1" id="break-increment" onClick={this.AddOneB}>+</button>
         <div class="col2" id="break-length"> {this.state.arrB} </div> 
          <button class="col3" id="break-decrement" onClick={this.MinOneB}>-</button></div>
        </div>
        <div class="left"><h2 className="bet" id="session-label">Session Length</h2>
          <div class="grid-container"><button class="col1" id="session-increment" onClick={this.AddOne}>+</button>
          <div class="col2" id="session-length">{this.state.arr}</div>
          <button class="col3" id="session-decrement" onClick={this.MinOne}>-</button></div>
        </div></div>
        <div className="ses" id="timer-label">{this.state.b===0&&<div>session</div>}{this.state.b===1&&<div>Break</div>}</div>
          <button class="start" id="start_stop" onClick={this.startTimer}>Start/Stop</button>
          
          <button class="start" id="reset" onClick={this.Reset}>Reset</button>
          <div className="time" id="time-left">{this.state.time.m}</div>
          </div>
          </div>
          
          
      );
    }
  }
  