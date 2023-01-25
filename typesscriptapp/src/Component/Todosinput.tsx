import React from 'react'

interface addtodohandeler{
    addtodos:(value:string)=>void;

}

 const Todosinput = ({addtodos}:addtodohandeler) => {

    
    const [text, setText] = React.useState<string>("")
    const handelchange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value)
    }
    const handelclick = () => {
addtodos(text)
    }
    return (
        <div className='input_box'>
            <input placeholder='enter something' onChange={handelchange} />
            <button onClick={handelclick}>Add</button>

        </div>

    )
}

export default Todosinput