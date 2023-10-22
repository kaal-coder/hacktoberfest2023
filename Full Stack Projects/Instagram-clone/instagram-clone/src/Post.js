import React from 'react'
import './Post.css'
import { useEffect, useState } from 'react';
import { Avatar, Button, Input } from '@mui/material';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from './firebase';
function Post(props) {
  const [comments,Setcomments]= useState([])
  const [comment,Setcomment]=useState('')
  useEffect(()=>{
    let unsubscribe;
    if(props.postId){
      const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
      const dc=doc(db,'posts',props.postId)
      const qq=query(collection(dc,'comments'))
      unsubscribe=onSnapshot(qq, snapshot => {
        Setcomments(snapshot.docs.map(doc => (({
          id: doc.id,
          comment: doc.data()
        })
        )))
      }
  
      )
    }
    return ()=>{unsubscribe()}
  },[props.postId])

  const postComment=(event)=>{
    if(props.user){
event.preventDefault()
const q = query(collection(db, 'posts'))
const dc=doc(db,'posts',props.postId)
addDoc(collection(dc,'comments'),{
  comment: comment,
  username:props.user.displayName,
  timestamp: serverTimestamp() 
});
Setcomment('')}
  }

const delpost=()=>{
  
deleteDoc(doc(db,'posts',props.postId))
  }





  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  return (
    <div className='post'>
        <div className='post__header'>
          <div className='headl'>
 <Avatar
className='post__avatar'
alt={props.username}
src='/static/images/avatar/1.jpg'
/>
    



        <h3>{props.username}</h3></div>
        { props.user && (props.username===props.user.displayName) &&
        
  
        <div className="dropdown">
        <button onClick={myFunction} className="dropbtn">...</button>
        <div id="myDropdown" className="dropdown-content">
        <button
        className='post__delbutton'
        
        type='submit'
        onClick={delpost}>Delete Post</button>
        </div>
      </div>
  }
        </div>
        <img className='post__image' src={props.imageUrl} alt='Nature'/>
        <h4 className='post__text'><strong>{props.username}</strong> {props.caption}</h4>
        {comments.map(({ id, comment }) => (
    <p key={id} className='post__comment'>
      <strong>{comment.username}</strong> {comment.comment}
    </p>
  ))}
  
  {props.user && (<form className='post__commentbox'>
          <Input
          className='post__input'
          type='text'
          placeholder='Add a comment.....'
          value={comment}
          onChange={(e)=>{Setcomment(e.target.value)}}>
          </Input>
          <Button
          className='post__button'
          disabled={!comment}
          type='submit'
          onClick={postComment}>Post</Button>
        </form>)}
        

    </div>
  )
}

export default Post