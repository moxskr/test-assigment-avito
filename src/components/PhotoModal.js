import React, {useState, useEffect} from 'react';
import CommentItem from "./CommentItem";

const PhotoModal = ({id, closeFunc}) => {
    let lastId = 1000;
    const [url, setUrl] = useState('');
    const [comments, setComments] = useState([]);
    const [form, setFormData] = useState({
       name : '',
       text : ''
    });
    useEffect(() => {
        async function fetchinfo() {
            const resp = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            const data = await resp.json();
            setUrl(data.url);
            setComments(data.comments);
        }
        fetchinfo();
    }, []);
    const submitForm = async (e) => {
        e.preventDefault();
        const date = Date.now();
        const obj = {
            name : form.name,
            comment : form.text
        };
        setFormData({...form, name : '', text : ''});
        setComments([...comments, {text : obj.comment, date : date, id : lastId++}]);
        await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json;charset=utf-8'
            },
            body : JSON.stringify(obj)
        });
    };
    const closeModal = () => {
        closeFunc();
    };
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...form, [name] : value});
    };
    return(
        <div className="photo-modal d-flex align-items-center">
            <div className="container">
                <div className="row photo-modal-bg">
                    <div className="col-sm-7">
                        <img src={url} alt=""/>
                        <form className="photo-modal-form" onSubmit={submitForm}>
                            <input type="text" placeholder="Ваше имя" name="name" onChange={handleChange} value={form.name}/>
                            <input type="text" placeholder="Ваш комментарий" name="text" onChange={handleChange} value={form.text}/>
                            <button>Оставить комментарий</button>
                        </form>
                    </div>
                    <div className="col-sm-5">
                        {!!comments.length && (comments.map(item => <CommentItem key={item.id} date={item.date} text={item.text}/>))}
                        {!comments.length && <div className="w-100 text-center">
                            Комментариев нету!
                        </div>}
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