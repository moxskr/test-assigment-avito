import React, {useState, useEffect} from 'react';
import CommentItem from "./CommentItem";
import ModalForm from "./ModalForm";

const PhotoModal = ({id, closeFunc}) => {
    const [url, setUrl] = useState('');
    const [comments, setComments] = useState([]);
    useEffect(() => {
        async function fetchinfo() {
            const resp = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            const data = await resp.json();
            setUrl(data.url);
            setComments(data.comments);
        }
        fetchinfo();
    }, []);
    const closeModal = () => {
        closeFunc();
    };
    return(
        <div className="photo-modal d-flex align-items-center">
            <div className="container">
                <div className="row photo-modal-bg">
                    <div className="col-sm-7">
                        <img src={url} alt=""/>
                        <ModalForm setComments={setComments} comments={comments} id={id} displayClasses={"d-none d-sm-block"}/>
                    </div>
                    <div className="col-sm-5 comment-list">
                        {!!comments.length && (comments.map(item => <CommentItem key={item.id} date={item.date} text={item.text}/>))}
                        {!comments.length && <div className="w-100 text-center">
                            Комментариев нету!
                        </div>}
                        <ModalForm setComments={setComments} comments={comments} id={id} displayClasses={"d-sm-none"}/>
                    </div>
                    <button className="close-btn" onClick={closeModal}>
                        &times;
                    </button>
                </div>
            </div>
        </div>
    )
};

export default PhotoModal;