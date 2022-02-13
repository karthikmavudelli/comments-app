import {Component} from 'react'
import {Link, Navigate} from 'react-router-dom'
import './index.css'

class SignUp extends Component {

    state = {isLoggedin: false, username: "",password:"", secret: ""}

    onChangeUsername = event => {
        this.setState({username: event.target.value})
    }

     onChangePassword = event => {
         this.setState({password: event.target.value})
    }

    onChangeSecret = event => {
        this.setState({secret: event.target.value})
    }

    onClickSigUpButton = () => {
        const {username,password,secret} = this.state
        if (username !== "" && password !== "" && secret !== ""){
          Navigate("/comments")
        }
    }

    render(){
        const {username,password,secret} = this.state
      return(
        <div className="bg-container">
          <h1 className="main-heading">Sign Up</h1>
          <p className='already-have-an-acc'>Already have an account? <Link className='sign-in' to="/">Sign In</Link></p>
          <div className="inputs">
            <label htmlFor="Username">Email</label>
            <input type="text" onChange={this.onChangeUsername} value={username} id="Username"/>
          </div>
          <div className="inputs">
            <label htmlFor='password'>Password</label>
            <input type="password" onChange={this.onChangePassword} value={password} id="Password"/>
          </div>
          <div className="inputs">
            <label htmlFor='secret'>Secret</label>
            <input type="password" onChange={this.onChangeSecret} value={secret} id="secret"/>
          </div>
            <Link className='signup-link' to="/comments"><button className="signup-button" onClick={this.onClickSignUpButton}>Sign Up</button></Link>
            <p>By clicking "Sign Up" button, you are creating an account, and you agree to the Terns of Use.</p>
        </div>
      )
    }
  }

export default SignUp