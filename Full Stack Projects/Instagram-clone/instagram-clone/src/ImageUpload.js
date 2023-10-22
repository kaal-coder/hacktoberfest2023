import { Input, Modal } from '@mui/material';
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { db, storage } from './firebase';
import {  getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, FieldValue, serverTimestamp } from 'firebase/firestore';
import './ImageUpload.css'
function ImageUpload({username}) {
    const[caption,Setcaption]=useState('')
    const[image,SetImage]=useState(null)
    const[progress,SetProgress]=useState(0)
    const handlechange=(e)=>{
        if((e.target.files[0])){
            SetImage(e.target.files[0])
        }
    }
    
    const handleupload=()=>{
const uploadTask= uploadBytesResumable( ref(storage,`images/${image.name}`), image)
uploadTask.on(
    "state_changed",
    (snapshot)=>{
        const progress=Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes)* 100
        );
        SetProgress(progress)
    },
    (error)=>{
        alert(error.message)
        
    },
    ()=>{
        getDownloadURL(ref(storage,`images/${image.name}`))
        .then((url)=>{
            addDoc(collection(db,'posts'),{
                timestamp: serverTimestamp(),
                caption: caption,
                imageUrl: url,
                username:username
            });
            SetProgress(0)
            Setcaption('')
            SetImage(null)
            
        })
        
    }
)
    }
  return (

<div className='imageUpload'>
    <progress value={progress} max="100" className='prog'/>
    <Input type='text' placeholder='Enter a caption'  onChange={(e)=>{Setcaption(e.target.value)}}   value={caption}/>
    <Input type='file' onChange={handlechange}/>
    <Button onClick={handleupload}>
        Upload
    </Button>
    
</div>
  )
}

export default ImageUpload
// rules_version = '2';
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if false;
//     }
//   }
// }