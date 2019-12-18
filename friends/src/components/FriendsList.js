import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendsCard from './FriendsCard';

class FriendsList extends React.Component {
  state = {
    friends: [],
    friend: {
      name: '',
      age: '',
      email: ''
    },
  }

  componentDidMount() {
    this.getData()
  }
  
  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend, 
        [e.target.name]: e.target.value
      }
    })
  }

  addFriend = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/friends', this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data,
          friend: {
            name: '',
            age: '',
            email: ''
          },
        })
      })
      .catch(err => console.log(err))
  }

  updateFriends = payload => {
    this.setState({
      friends: payload
    })
  }
  
  render() {
    console.log(this.state.friends)
    return (
      <div>
        <div>
          {this.state.friends.map(friend => (
            <FriendsCard key={friend.id} friend={friend} updateFriends={this.updateFriends} />
          ))}
        </div>
        <form onSubmit={this.addFriend}>
          <input 
            type='text'
            name='name'
            id='name'
            value={this.state.friend.name}
            onChange={this.handleChange}
          />
          <input 
            type='number'
            name='age'
            id='age'
            value={this.state.friend.age}
            onChange={this.handleChange}
          />
          <input 
            type='email'
            name='email'
            id='email'
            value={this.state.friend.email}
            onChange={this.handleChange}
          />
          <button>Add Friend</button>
        </form>
      </div>
    )
  }
}

export default FriendsList