import React, {Fragment} from 'react';
import './BlogPost.css';
import Post from '../../../Component/Post/Post';
import axios from 'axios';

class BlogPost extends React.Component{
    state = {
        post:[]
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((hasil)=>{
            //console.log(hasil.data);
            this.setState ({
                post: hasil.data
            })
            
        })
    }

    render(){
        return(
            <Fragment>
                <p>Ini halaman Blog Post</p>
                <hr/>
            <p className="section-title">Blog Post</p>
            {this.state.post.map(post =>{
                return <Post key={post.id}title={post.title} desc={post.body}/>
            })}
            
            </Fragment>
            
            
        )
    }
}

export default BlogPost;