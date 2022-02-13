import {Component} from 'react'
import {Link,Navigate} from 'react-router-dom'
import './index.css'

class SignIn extends Component {

    state = {isLoggedin: false, username: "",secret:""}

    onChangeUsername = event => {
        this.setState({username: event.target.value})
    }

     onChangeSecret = event => {
         this.setState({secret: event.target.value})
    }

    onClickSignInButton = () => {
        const {username,secret} = this.state
        if (username !== "" && secret !== ""){
          Navigate("/comments")
        }
    }


    render(){
        const {username,secret} = this.state
      return(
        <div className="bg-container">
          <h1 className="main-heading">Forgot Password</h1>
          <div className="inputs">
            <label htmlFor="Username">Email</label>
            <input type="text" onChange={this.onChangeUsername} value={username} id="Username"/>
          </div>
          <div className="inputs">
            <label htmlFor='password'>Secret</label>
            <input type="password" onChange={this.onChangeSecret} value={secret} id="Password"/>
          </div>
            <Link className="signin-link" to="/comments"><button className="signin-button" onClick={this.onClickSignInButton}>Sign In</button></Link>
        </div>
      )
    }
  }

export default SignIn