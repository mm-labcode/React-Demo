import React, {useState} from "react";

const Form = (props) => {
    const [enterTitle, setEnterTitle ] = useState('');
    const [enterAmount, setEnterAmount ] = useState('');
    const [enterDate, setEnterDate ] = useState('');
    
    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value);
    };

    const amountChange = (event) => {
        setEnterAmount(event.target.value);
    }

    const dataChange = (event) => {
        setEnterDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expensDate = {
            title: enterTitle,
            amount: enterAmount,
            date: enterDate
        };
        console.log(expensDate)
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    };

    
    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title here</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler} placeholder="Input here" />
                    <input type="text" value={enterAmount} onChange={amountChange} placeholder="Input here" />
                     <input type="text" value={enterDate} onChange={dataChange} placeholder="Input here" />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}


export default Form 