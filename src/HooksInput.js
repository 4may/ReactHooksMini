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
        console.log('update state!')
        //setStateの呼び出しは非同期的に行われるため、呼び出し直後にstateが更新されるわけではない。
        //だから、setState(prevState => { something: prevState.whatever })のように一つ前のstateを参照していた。
        setState(e.target.value)
    }

    useEffect(
        () => {
            //stateとeffectStateの値にはズレがある。
            //effectStateはsetEffectStateの呼び出し直後には更新されないため、ここで表示されるeffectStateは更新前の値(一つ前のstateの値)となる。
            console.log("state: ", state) //testin
            setEffectState(state) 
            console.log("effectstate(delay): ", effectState) //testing
        },
        //第二引数を指定することで、useEffectの実行タイミングを制御することができる。
        //第二引数を指定しない場合、setEffectState() -> useEffect() -> setEffectState() -> useEffect() -> ...の無限ループになってしまう
        //以下のように指定することで、マウント時、アンマウント時、state値の変更時にだけ呼び出すことができる。
        [state]
    )

    useEffect(
        () => {
            //stateと同じ
            console.log("effectstate(correct): ", effectState) //testin
        },
        //effectStateの値が更新された時に呼び出される。
        [effectState]
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