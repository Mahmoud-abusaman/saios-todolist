import React,{useState} from 'react'
import './Todo.css'

function Todo() {
  const [input,setInput]=useState('');
  const[todos,setTodos]=useState([]);
 
  // var x=0
  const handleSubmit= e => {
    e.preventDefault();
    if(input.length===0){
      alert("type a todo")
    }
    else{
    
      // console.log(todos.indexOf(todos[4]))
      setTodos([input,...todos]);
      setInput("")}
  }
  const handleChange=e=>{
    setInput(e.target.value);

  };

  const remove=e=>{
    e.preventDefault()
   const ind=(e.currentTarget.parentElement.dataset['key'])
    setTodos(todos.filter(item => item !== todos[ind]))


  }

  return (
    <div>
      <div className='background' >
        <div className="shape"></div>
        <div className="shape"></div>

    </div>
    <div className="container">
      <div className="todo">
        <h1 className="text-light mb-3" style={{color: "white", marginLeft:"152%", marginTop:"40px",fontSize:"50px" }}>Todo<span style={{color:"purple"}}>List</span></h1>
  
        <form className="  todo_form" onSubmit={handleSubmit}  >
        <Link to="/"><button className='todo_button_delete' style={{marginTop:"-4%",boxShadow:"none",backgroundColor:"GrayText",marginRight:"-3%",float:"right"}}>log out</button></Link>

          <div className="form-group fix">
            <label  className="light todolabel " style={{fontSize: "25px"}}>Add a task</label>
            <input
              type="text"
              className=" text-light "
              onChange={handleChange}
              value={input}
              style={{marginLeft:"20%" ,float:"left"}}
              name="text"/>
            <span><button 
              className='todo_button' 

              // type="submit" 
              style={{ widthe:"30px"}}>
                Add a todo
            </button></span>
            {/* <div className="invalid-feedback">Looks empty&hellip;</div> */}
          </div>
        
  
        <ul className="todos list-group text-light  scroll">
          { todos.map((todo)=>(
          <li 
          data-key={todos.indexOf(todo)} 
          key={todos.indexOf(todo)}  
          className="list-group-item" 
          style={{fontSize:"20px",paddingLeft:"7%"}}><input className='check' type="checkbox"/>
            {todo} 
            <button  className='todo_button_delete'  type='button' onClick={remove.bind(this)}>
              Delete
            </button> 
          </li>
          ))}

        
        </ul>
        </form>

      </div>
    </div>
    </div>
  // </div>
 
    
  );
}

export default Todo