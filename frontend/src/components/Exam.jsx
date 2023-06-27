import React, { useState } from 'react'

const Exam = () =>
{

    const [value, setValue] = useState('')
    const onchangeHandler = (e) =>
    {
        setValue(e.target.value)
    }
    console.log(value)
    return (
        <div>

            <input type="text" value={value} onChange={onchangeHandler} />
        </div>
    )
}

export default Exam