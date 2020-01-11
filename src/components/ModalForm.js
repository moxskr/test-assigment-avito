import React, {useState} from 'react';

const ModalForm = ({setComments, comments, id, displayClasses}) => {
    let lastId = 1000;
    const [form, setFormData] = useState({
        name : '',
        text : ''
    });
    const submitForm = async (e) => {
        if(form.name === '' || form.text === '') {
            alert('Введите имя и комментарий');
            return;
        }
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
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...form, [name] : value});
    };
    return <form className={"photo-modal-form " + displayClasses} onSubmit={submitForm}>
        <input type="text" placeholder="Ваше имя" name="name" onChange={handleChange} value={form.name}/>
        <input type="text" placeholder="Ваш комментарий" name="text" onChange={handleChange} value={form.text}/>
        <button>Оставить комментарий</button>
    </form>
};

export default ModalForm;