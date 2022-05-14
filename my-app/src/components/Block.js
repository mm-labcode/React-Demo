import React from "react";

const Block = (props) => {
    const classes = 'card ' + props.className
    return (
        <>
        <div className={classes}>
            {props.children}
        </div>
        </>
    )
}


export default Block 