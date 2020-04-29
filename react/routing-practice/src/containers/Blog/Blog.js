import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        auth: false
    }

    render() {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li> */}
                            {/* <li><a href="/new-post">New Post</a></li> */}
                            <li><NavLink
                                to="/posts" exact
                                activeClassName="my-active"
                                activeStyle={{ color: '#da55aa', textDecoration: 'underline' }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* Rendering to Path using JSX */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}

                {/* Rendering Component to Route */}
                <Switch>
                    {/* Guards */}
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : <Redirect from="/new-post" to="/posts" />}
                    <Route path="/posts" component={Posts} />

                    {/* Method - 1 to handle unknown errors  */}
                    {/* <Redirect from="/" to="/posts" /> */}

                    {/* Method - 2 to handle unknown error */}
                    {/* <Route component={} /> */}
                    <Route render={() => <h1>Not Found</h1>} />
                </Switch>
                {/* <Route path="/posts/:id" exact component={FullPost} /> */}


                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;