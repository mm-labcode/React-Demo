import React, { useState } from "react";
import DateItem from "./DateItem";
import Block from "./Block";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [subtitle, setSubtitle] = useState(props.subtitle);
    const [paragrah, setParagrah] = useState(props.paragrah);

    const clickHandler = () => {
        setTitle('Updates');
        setSubtitle('New Title');
        setParagrah('Paragraph Content here');
    };

    return (
        <>
        <Block className="expens-items">
        <DateItem date={props.date} />
        <div style={{float:"left", width:200, border:'1px solid red'}}>
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
        <h5>{props.amount}</h5>
        <div>
            <p>{paragrah}</p>
        </div>
        <button type="submit">{props.value}</button>
        </div>
        <ul>
            <li>
                {props.listdata}
            </li>
        </ul>
        <button onClick={clickHandler}>Change Title</button>
        </Block>
        </>
    )
}


export default ExpenseItem 