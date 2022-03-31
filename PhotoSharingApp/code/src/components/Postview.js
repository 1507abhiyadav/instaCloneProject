import { React, useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Postview.css';
import heartLike from '../images/heartLike.svg';
import sent from '../images/msgSent.png'    
import Header from './header';
import { v4 as uuid } from 'uuid';

const date = new Date().toLocaleDateString();

const Postview = () => {
  const [posts, setpostData] = useState([]);
  const token = localStorage.getItem('token');
  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then(res => {
    setpostData(res.data.post)
    // localStorage.setItem('token',data.token)
    // console.log(localStorage.getItem('token'))
    console.log(res.data)});
  }, {
    headers: {
      authorization: "test " + token
    }
  }, []);
  return (
    <>
    <Header />
    <div className="site-container" >
      {posts.map((post) => {
        return (<div className='post-card' key={uuid()}>
          <section className='name-location-option'>
            <div className='name-location'>
              <h4>{post.name}</h4>
              <p>{post.location}</p>
            </div>
            <div className="post-option" >
              <p><strong>...</strong></p>
            </div>
          </section>
          <img className='post-image' src={post.PostImage} alt="post" />
          <div className='image-footer'>
            <div className='likes'>
              <span><img className='likebutton' src={heartLike} alt="likes" /><img className='sentbutton' src={sent} alt="sent-btn" /></span>
            </div>

            <div>
              <p className='date'>{date}</p>
            </div>

          </div>
          <p className='likes-count'>{post.likes} likes</p>
          <article className="post-article">
            <h4>{post.description}</h4>
          </article>
        </div>)
      })}

    </div>
    </>
  );
}

export default Postview;
