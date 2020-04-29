import React, { Component } from "react";
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import { Link, Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost'

import './Posts.css'

class Posts extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    console.log('[Posts]', this.props)
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Sid'
          }
        });
        this.setState({ posts: updatedPosts });
        // console.log( response );
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
    // this.props.history.push({pathname:'/'+id})
  }

  render() {

    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={'/posts/' + post.id} key={post.id}>
          <Link to={this.props.match.url + '/' + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              // {...this.props}
              clicked={() => this.postSelectedHandler(post.id)} />
          </Link>
        )
      });
    }

    return (
      <div>
        <section className="Posts">
          <p>Posts here</p>
          {posts}
        </section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
      </div>
    )
  }
}

export default Posts