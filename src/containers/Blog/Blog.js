import React, { useState } from 'react';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Posts from '../Posts/Posts'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { LikedPosts } from '../../store/LikedPosts';
import { APIConfig } from '../../store/API-Config';


const Blog = (props) => {

    const [likedPosts, setLikedPosts] = useState([]);

    return (

        <APIConfig.Provider value={
            {
                postAPI: 'http://localhost:8080/posts/',
                userAPI: 'http://localhost:8080/users/'
            }
        }>
            <LikedPosts.Provider value={{ likedPosts, setLikedPosts }}>
                <div className="Blog">
                    <header>
                        <nav>
                            <ul>
                                <li><Link to="/posts"> Posts</Link></li>
                                <li><Link to={{
                                    pathname: '/new-post',                      // props.match.url + to get 
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</Link></li>
                                {/*<li><a href="/"> Home</a></li>
                        <li><a href="/new-post"> New Post</a></li>*/}
                            </ul>
                        </nav>
                    </header>
                    {/*<Route path="/" exact render={() => <h1 style={{textAlign:'center'}}>Home</h1>} />*/}

                    <Switch>
                        <Route path="/new-post" component={NewPost} />
                        <Route path="/posts" component={Posts} />
                        <Redirect from="/" to="/posts" />      {/* THis will change the url  */}
                        {/* <Route render={()=> <h1> Page Not Found</h1>} />  */}

                        {/* Also conditional redirect  */}
                    </Switch>

                </div>
            </LikedPosts.Provider >
        </APIConfig.Provider>
    );
}


export default Blog;

