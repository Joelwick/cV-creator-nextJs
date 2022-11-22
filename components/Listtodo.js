import React from 'react'

const Listtodo = (props) => {
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>S/N</th>
            <th>ToDo Title</th>
            <th>ToDo</th>
            <th>Todo time</th>
          </tr>
        </thead>

        {props.alltodos.map((value,i)=>(
          <tr key={i}>
            <td>{i+1}</td>
            <td>{value.todoName}</td>
            <td>{value.todoInfo}</td>
            <td>{value.date}</td>
          </tr>
        ))}
      </table>
    </>
  )
}

export default Listtodo