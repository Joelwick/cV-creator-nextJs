import React,{ useState } from 'react'
import Listtodo from './listtodo'

const AddTodo = () => {
    const [todoName, settodoName] = useState ("") 
    const [todoInfo, settodoInfo] = useState ("") 
    const [date, setdate] = useState ("") 
    const [alltodos, setAlltodos] = useState ([])
    const addTodo = () =>{
      if(!todoName||!todoInfo||!date) return alert("All fields are needed");
      let newTodos = {todoName,todoInfo,date}
      setAlltodos((prev)=>[...prev, newTodos])
      settodoName("")
      settodoInfo("")
      setdate("")
      // setpassword("")
      //  setallStudents = ([...allStudents, newStudents])
    } 
  return (
    <>
         <div>
      <div className="container">
        <div className="row">
          <div className="col-7 mx-auto shadow-sm">
            <h1 className="text-center color-danger">Wickie ToDo</h1>
            <input type="text" placeholder="todo name" className="form-control my-2"
             onChange={(e)=>settodoName(e.target.value)} value={todoName}/>
            <input type="text" placeholder="todo information" className="form-control my-2" 
            onChange={(e)=>settodoInfo(e.target.value)} value={todoInfo}/>
            <input type="date" placeholder="date" className="form-control my-2" 
            onChange={(e)=>setdate(e.target.value)} value={date}/>
            <button className="btn btn-danger w-100" onClick={addTodo} >Submit</button>
          </div>
        </div>
      </div>
    </div>
    <Listtodo alltodos={alltodos}/>
    </>
  )
}

export default AddTodo