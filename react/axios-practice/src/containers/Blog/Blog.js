import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios'

class Blog extends Component {

    state = {
        posts: [],
        postSelectedId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                // console.log(response.data)
                const posts = response.data.splice(0, 3);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Sid'
                    }
                })
                this.setState({
                    posts: updatedPosts
                });
            })
            .catch(error => {
                // console.log("Error Received")
                this.setState({ error: true })
            })
    }

    postClickedFetch = (id) => {
        // axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        //     .then(response => {
        //         this.setState({
        //             postSelected: response.data
        //         });
        //     })
        this.setState({ postSelectedId: id });
    }

    render() {

        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postClickedFetch(post.id)} />
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.postSelectedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;