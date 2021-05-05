import React, { useContext } from 'react';
import { LikedPosts } from '../../store/LikedPosts';

import './Post.css';

const Post = (props) => {

    const { likedPosts, setLikedPosts } = useContext(LikedPosts);

    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
           
            </div>
            {
                likedPosts.includes(props.id)
                    ?
                    <button onClick={() => { console.log('ANSWER HERE'); }}>
                        Unfollow </button>
                    :
                    <button onClick={() => { console.log(likedPosts); setLikedPosts([...likedPosts, props.id]) }}>
                        Follow </button>}
        </article>
    );
}

export default Post;