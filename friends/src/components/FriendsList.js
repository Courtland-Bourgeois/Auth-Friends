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
    isFetching: false
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
  
  render() {
    console.log(this.state.friends)
    return (
      <div>
        <div>
          {this.state.friends.map(friend => (
            <FriendsCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    )
  }
}

export default FriendsList