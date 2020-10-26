import React, {Component} from 'react';
import InstaServices from '../services/instaService';
import User from './User';
import ErrorMessage from './Error';

export default class Users extends Component {
    InstaServices = new InstaServices();
    state = {
        users: [],
        error: false
    }
    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaServices.getAllUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError)
    }
    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false
        })
    }
    onError = (err) => {
        this.setState({
            error: true
        })
        
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, photo, alt, id} = item;
            return(
                        <div  key = {id} className="users_block">
                                <User 
                                
                                    src={photo}
                                    alt={alt}
                                    name={name}
                                    min
                                />
                        </div>
            )
        })
    }
    render () {
        const {error, users} = this.state;

        if (error) {
            return <ErrorMessage/>
        }
        const items = this.renderItems(users);
        return (
            <div className="right">
                <div   className="user">
                        <User 
                            src="https://cdn.lifehack.org/wp-content/uploads/2015/01/alpha-woman-1024x768.jpeg"
                            alt=""
                            name="Kate"
                        ></User>    
                </div>    
                {items}
            </div>
        )
    }
}