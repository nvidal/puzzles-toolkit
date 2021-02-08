import React, { useState } from 'react';

const GridSymbol = (props: { id: string | undefined; }) => {

    const [selected, setSelect] = useState(false);
    let styles= {
        backgroundColor: (selected ? "blue" : "pink"),
        borderRadius: "50px",
        width: "40px",
        height: "40px"
    }
    return (
        <div>
            <div onClick={() => setSelect(!selected)} style={styles} id={props.id} />
        </div>

    )
}

export default GridSymbol;