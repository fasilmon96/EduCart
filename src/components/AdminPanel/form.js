import React, { useContext } from 'react'
import './form.css'
import { useState } from 'react'
import { AuthContext, FirebaseContext } from '../Context/FirebaseContext'
import { useNavigate } from 'react-router-dom'


function Form() {

  const[name,setName]=useState('')
  const[category,setCategory]=useState('')
  const[image,setImage]=useState(null)
  const[price,setPrice]=useState('')
  const{firebase}=useContext(FirebaseContext)
  const{user}=useContext(AuthContext)
  const date=new Date
  const Nav= useNavigate()
  
   const handleSubmit=(e)=>{

    e.preventDefault()


    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
         firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt: date.toDateString()

        })
         
         Nav('/')
      })
    })
   }

  

  return (

         <div className='c'>
      <div className='container4'>
          
           <form onSubmit={handleSubmit} >
        <div className='sectionformat'>
            <input
            value={name}
             onChange={(e)=>setName(e.target.value)} className='b' type="text" required />
            <label className='a' htmlFor="">Name</label>
        </div>
        <div className='sectionformat'>
            <input
            value={category}
            onChange={(e)=>setCategory(e.target.value)} required className='b' type="text" />
            <label className='a' htmlFor="" >Category</label>
        </div>
        <div className='sectionformat'>
             <img src={image ? URL.createObjectURL(image):''} width={'200px'} height={'200px'}/>
            <input onChange={(e)=>setImage(e.target.files[0])} className='d' type="file" />
          
        </div>
        <div  className='sectionformat'>
            <input
            value={price} 
             onChange={(e)=>setPrice(e.target.value)} required className='b' type="text" />
             <label className='a' htmlFor="">Price</label>
        </div>
        <div className='sectionformat1'>
      <button  className='submit' type='submit'>Upload file</button>
        </div>
        </form>
     </div>
     </div>

     
  )
}

export default Form