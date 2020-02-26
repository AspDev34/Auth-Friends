import React from 'react';
import axios from 'axios';

// I use a class based component to set up initial state as empty strings for the username and password keys. 
class LoginComp extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

// I use handleChange() to deal with changes in state caused when the user types into the username & password fields.
handleChange = (event) => { 
    this.setState({
        credentials: {
        ...this.state.credentials,
        //this syntax is called "computed property names" & allows the expression to be computed to a single value 
        //which is then used as the property key name. 
        [event.target.name]: event.target.value 
    }})
    };

login = (event) => {
    event.preventDefault();
    axios
        .post('http://localhost:5000/api/login', this.state.credentials) //sending the current login values of state to the api.
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected')
        })
        .catch(err => console.log('Data not received', err));
};

render(){
    return (
        <div>
            <form onSubmit={this.login}>

                <input 
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                />

                <input 
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                />

                <button>Log In</button>
            </form>
        </div>
    )};
};

export default LoginComp;