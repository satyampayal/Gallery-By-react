import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ImageDetails(){
    const [image,setImage]=useState([]);
    const {id}=useParams();
  async function downloadImages(){
    const url="https://api.slingacademy.com/v1/sample-data/photos/";
    //console.log(id)
    const response=await axios.get(url+id);
   // console.log(response)

   const imagedata=response.data;
   //console.log(imagedata)

   const photo=imagedata.photo;
   //console.log(photo.description)

   setImage(photo)

   
  // console.log(image)




  }
   
    useEffect(()=>{
        downloadImages();
    },[])
   return(
    <div  className="w-[100%] h-[100vh] px-[50px] bg-[rgba(0,0,0,0.7)] grid justify-center place-content-center ">
        <div className="  relative  grid grid-cols-2 justify-center place-content-center ">
            <img className="border-[1px] rounded-tr-[200px] border-white" src={image.url} alt="Image not Uploaded" />
            <div className=" text-white absolute top-[150px] left-[53%] ">
                <h1 className="text-[34px] mb-[50px]"><span className="text-green-500">Title-</span>{image.title}</h1>
                <p className="text-blue-300 text-[20px]"><span className="text-green-500">Descripation</span>-{image.description}</p>

            </div>

        </div>
            
    </div>
   )
}

export default ImageDetails;