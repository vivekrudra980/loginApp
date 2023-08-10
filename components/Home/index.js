// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  statusChange = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="home-container">
        <div className="container">
          <Message status={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.statusChange} />
          ) : (
            <Login login={this.statusChange} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
