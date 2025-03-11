import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/Todo/Todoslice'

const Addtodo = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <>
      <div className="container py-3">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input type="text" name="" placeholder='Enter todos...' className='form-control' value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className="col-4">
              <button className='btn btn-outline-success'>Add todos</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Addtodo
