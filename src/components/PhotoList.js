import React, {useState, useEffect} from "react";
import PhotoItem from "./PhotoItem";

const PhotoList = () => {
    const [photoList, setPhotoList] = useState(null);
    useEffect(() => {
        async function fetchList() {
            const resp = await fetch("https://boiling-refuge-66454.herokuapp.com/images");
            const data = await resp.json();
            setPhotoList(data);
        }
        fetchList();
    }, []);
    return(
        <>
            {photoList && photoList.map(item => <PhotoItem id={item.id} url={item.url} key={item.id}/>)}
        </>
    )
};

export default PhotoList;