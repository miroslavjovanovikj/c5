import React, {Component} from 'react'
class Login extends Component{
  constructor(props){
    super(props)
    this.state={email:"", password:"", type:"password"}
    this.RevealPassword= this.RevealPassword.bind(this);

  }
  handleFilds = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  RevealPassword() {
    this.setState(prevState => ({
        type: prevState.type === "password" ? "text" : "password"
    }));
  }
Login=(e)=>{
  e.preventDefault();
    if(this.state.email==="pero@gmail.com" && this.state.password==="secret"){
        this.props.history.push("/dashboard")
  }else{
    alert("wrong pass")
  }
}
  render(){
    const HIDE = () => {
      return <span>❌</span>
    }
    const SHOW = () => {
      return <span>👀</span>
    }
    return(
      <div id="login">
        <form onSubmit={this.Login}>
          <p>
              <input  onChange={this.handleFilds} type="text" placeholder="Enter email" name="email"/>
          </p>
          <p>
              <input onChange={this.handleFilds} type={this.state.type}  placeholder="Enter password" name="password" />
                <button className ="eye" type="button" onClick={this.RevealPassword}>
                  {this.state.type==="password" ? <SHOW /> : <HIDE />}
              </button>
          </p>
          <button className="loginButt" type="submit">Log in</button>
        </form>

      </div>
    )
  }
}
export default Login;
