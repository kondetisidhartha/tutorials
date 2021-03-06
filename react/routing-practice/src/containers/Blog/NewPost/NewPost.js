import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Sid',
        submitted: false
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
            .then(response => {
                // console.log(response);
                // this.setState({ submitted: true })
                this.props.history.push('/posts')
                // this.props.history.replace('/posts') --> same as Redirect
            });
    }

    render() {
        // console.log('[New-Posts]', this.props)
        return (
            <div className="NewPost">
                {this.state.submitted ? <Redirect to="/posts" /> : null}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Sid">Sid</option>
                    <option value="Max">Max</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;