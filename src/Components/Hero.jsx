//import {Routes,Route} from 'react-router-dom';
import React from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import PhotoGallery from "./PhotoGallery";

function Hero() {
    const photo_url = 'https://api.slingacademy.com/v1/sample-data/photos'
    const [photo, setPhoto] = useState([]);

    async function downloadPhotos() {

        const response = await axios.get(photo_url);
        console.log(response)


        const photoList = response.data.photos;

        const photoFinalList = photoList.map((photo, idx) => {
            return {
                id: photo.id,
                url: photo.url,
                title: photo.title,
                description: photo.description
            }
        })
        setPhoto(photoFinalList);


    }
    useEffect(() => {
        downloadPhotos();
    }, [])

    return (
        <div className="grid grid-cols-3 gap-10  px-[20px]">
            {photo.map((photo) => <PhotoGallery key={photo.id} url={photo.url} title={photo.title}
                description={photo.description} id={photo.id} />)}
        </div>
    )
}
export default Hero;


