import React from 'react';

const CommentItem = ({date, text}) => {
    return(
        <div className="comment-item">
            <p className="comment-item-date">{makeStringDate(date)}</p>
            <p>{text}</p>
        </div>
    )
};

const makeStringDate = (str) => {
    const date = new Date(str);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
};

export default CommentItem;