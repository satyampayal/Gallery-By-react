import React from "react";
import {Link} from 'react-router-dom'
function PhotoGallery({id,url,title,description}){
    return(
        <Link to={`/gallery/${id}`}  className=" hover:scale-[102%]" >
            <img className="border-[1px] border-white rounded-[10px]"  src={url} alt="" />
        </Link>
    )
}
export default PhotoGallery;