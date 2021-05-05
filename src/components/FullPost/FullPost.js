import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './FullPost.css';
import { APIConfig } from '../../store/API-Config';


const FullPost = (props) => {

    const APIs = useContext(APIConfig);
    const postAPI = APIs.postAPI; 


    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }

    const [postCall, setPostCall] = useState({});
    const [renderedId, setRenderedId] = useState(null); // remove this one

    useEffect(() => {
        setRenderedId(props.match.params.id);
    }, []);

    useEffect(() => {
        if (renderedId !== props.match.params.id) {
            axios(postAPI + props.match.params.id, { headers })
                .then(response => {
                    setPostCall(response.data);
                    setRenderedId(props.match.params.id);
                    console.log('This wont get called again ');
                })
        }
        // return () =>{
        //     console.log('post was unmounted')
        // };
    }, [props]);  // if I leave this empty here, it will update twice.  



    const deletePost = () => {
        axios.delete(postAPI + props.match.params.id, { headers })
            .then(response => {
                props.history.push('/');
                console.log(response);
            });
    };


    let post = <p style={{ justifyContent: 'space-around' }}> Please select a Post!</p>;
    if (props.match.params.id != null) {
        post = (
            <div className="FullPost">
                <h1>{postCall.title}</h1>
                <p>{postCall.content}</p>
                <div className="Edit">
                    <button onClick={deletePost} className="Delete">Delete</button>
                </div>
            </div>
        );
    }


    return post;
}

export default FullPost;