import React from "react";

const DateItem = (props) => {
    const date = props.date;
    const submitdate = props.submitdate;
    return (
        <>
            <p>{date}</p>
            <p>{submitdate}</p>
        </>
    )
}


export default DateItem 