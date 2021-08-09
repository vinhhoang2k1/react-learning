import React from 'react';
import './App.css';
import LoginForm from './component/LoginForm';
import Welcome from './component/Welcome';
import Clock from './component/Clock';

function hello(name) {
  return "xin chao " + name
}
function sayHi() {
  alert("hi react js")
}

function App() {
  let name = "hoc tot"
  let click = () => { console.log("clicked") }
  const user = { name: "admin", id: 1 }
  return (
    <div className="App" tabIndex="1"> 
   
    
      {/* <p className="small-text">hello vinh</p>
      <button onClick={click}>click me {name}</button>
      
      <Hello name="xong" styleCss="red"/>
      <Hello name="xong" styleCss="green"/> */}
      {/* <WelcomeAdmin name={user.name} id={user.id} ></WelcomeAdmin> */}
      {/* <WelcomeAdmin {...user} hi={sayHi}></WelcomeAdmin>
       */}
      {/* <Notifycation msg="ok"></Notifycation> */}
      {/* <Notifycation msg="yes"></Notifycation> */}

      {/* {user.id == '1' ? <WelcomeAdmin{...user} hi={sayHi}></WelcomeAdmin> : null} */}
      {/* {user.id =='1'? <Notifycation msg="yes"/>:null} */}
     
        {/* <Welcome user={{id:1,name:"admin"}}/> */}
        {/* <LoginForm hi={sayHi}></LoginForm> */}
       <Clock ></Clock>
    </div>  
  );
}
// const Notifycation=(props) => props.msg=="ok" ? <p>ok</p> :<p>fail</p>
const Notifycation = (props) => {
  if (props.msg == 'ok') {
    return <p>ok</p>
  }else if(props.msg=='yes'){
  return <p>yes</p>
  return <div>
    <p>hello {props.id} {props.name}</p>
    <Hello {...props}></Hello>
  </div>

}
const stylesHello = {
  color: 'blue',
  // backgroundImage: 'url(' + imgUrl + ')',
};
function Hello(props) {
  // let styles = props.styleCss == 'red' ?{ color:'red'}:{color:'green'}
  return <div>
    <p style={stylesHello}>{props.name}</p>
    {/* <p>{props.name}</p> */}
    <p onClick={props.hi}>click</p>
  </div>
}
export default App;
