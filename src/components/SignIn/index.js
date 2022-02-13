import {Component} from 'react'
import {Link,Navigate} from 'react-router-dom'
import './index.css'

class SignIn extends Component {

    state = {isLoggedin: false, username: "",password:""}

    onChangeUsername = event => {
        this.setState({username: event.target.value})
    }

     onChangePassword = event => {
         this.setState({password: event.target.value})
    }

    onClickSignInButton = () => {
        const {username,password} = this.state
        if (username !== "" && password !== ""){
            Navigate("/comments")
        }
    }


    render(){
        const {username,password} = this.state
      return(
        <div className="bg-container">
          <h1 className="main-heading">Sign In</h1>
          <p className='dont-have-an-acc'>Don't have an account? <Link className='sign-up' to="/signup">Sign up</Link></p>
          <div className="inputs">
            <label htmlFor="Username">Email</label>
            <input type="text" onChange={this.onChangeUsername} value={username} id="Username"/>
          </div>
          <div className="inputs">
            <label htmlFor='password'>Password</label>
            <input type="password" onChange={this.onChangePassword} value={password} id="Password"/>
          </div>
          <Link to="/forgotpassword" className='link'><button className='forgot-password'>Forgot your Password?</button></Link>
            <Link to="/comments" className='signin-link'><button className="signin-button" onClick={this.onClickSignInButton}>Sign In</button></Link>
        </div>
      )
    }
  }

export default SignIn