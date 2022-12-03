import React from 'react'

export const Form = (props) => {
    const {task, handleSubmit, handleChange} = props;

  return (
    <>
        <form className='form' onSubmit={handleSubmit}>
            <input className='inputForm' type="text" placeholder="Introduce la tarea"
            onChange={handleChange}
            value={task}>
            </input>
            <input type="submit" className="btn" value="Agregar"
            onClick={handleSubmit}>
            </input>
        </form>
    </>
  )
}
