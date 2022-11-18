
import React from 'react'
import { useState , useEffect } from 'react'
import imageSlide from '../data'
function Colorboard() {
    const [img,setImg]= useState(0)
useEffect(()=>{
    const timer = setTimeout(()=>{
if(img === 2){
    setImg(0)
}else{
    setImg(img+1)
}
},3000)
return()=>clearTimeout(timer)
},[img])

 const bgimgstyle ={
    backgroundImage: `url(${imageSlide[img].url})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    height:'100%'
 }
const goToNext = (img)=>{
    setImg(img)
}
  return (
    <div className='contain'>
<div style={bgimgstyle}></div>
<div className='trans-bk'></div>
<div className='description'>
    <div>
        <h1>{imageSlide[img].title}</h1>
        <p>{imageSlide[img].body}</p>
    </div>
    <div className='carousel-boullt'>
        {
            imageSlide.map((imageSlide,img)=>(
                <span key={img} onClick={()=>goToNext(img)}></span>
            ))
        }
    </div>
</div>

    </div>
  )
}

export default Colorboard