import React from 'react';
import { axiosWithAuth } from './utilities/axiosWithAuth';

class FriendsComp extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log('No data returned', err));
    };

    render() {
        console.log('friends data from api', this.state.friends);
        return (
            <div>
                {this.state.friends.map(item => (
                    <p>{item.name}</p>
                ))}
            </div>
        )
    };
};

export default FriendsComp;