import React, {useState} from 'react';
import PhotoModal from "./PhotoModal";

const PhotoItem = ({id, url}) => {
    const [isModal, setIsModal] = useState(false);
    const handleModal = () => {
        setIsModal(!isModal)
    };
    const closeFunc = () => {
        setIsModal(false)
    };
    return(
        <div className="photo-item col-sm-4">
            <img src={url} alt="" onClick={handleModal}/>
            {isModal && <PhotoModal id={id} closeFunc={closeFunc}/>}
        </div>
    )
};

export default PhotoItem;