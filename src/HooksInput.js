import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//divではなくinputにしなければならない、
const StyledInput = styled.input`
    display : block;
    width : 400px;
    height : 50px;
    margin : 100px auto;
    border : 2px solid #000;
    font-size : 28px;
    padding : 10px 0 12px 20px;
    border-radius : 50px;

    :focus {
        outline : none;
    }
`

//先頭は大文字で始める必要がある。
const HooksInput = () => {
    const [state, setState] = useState("testing")
    const [effectState, setEffectState] = useState("")

    const updateValue = e => {
        setState(e.target.value)
    }

    useEffect(
        () => {
            console.log("state: ", state);
        }
    )

    return(
        <div>
            <StyledInput
                name="test"
                type='text'
                value={state}
                onChange={updateValue}
                placeholder="write some text here"
            />
        </div>
    )
}

export default HooksInput