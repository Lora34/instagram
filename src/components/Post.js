import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <dev className="post">
                <User 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSsI7zlweTix6qAFNNn1pNltWca-gVO0TMFQ&usqp=CAU" 
                alt="man" 
                name="Scott"
                min
                ></User>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </div>
            </dev>
        )
    }
}