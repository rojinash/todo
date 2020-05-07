import React, {useState} from 'react'

class Todo {
    constructor(str){
        this.text = str;
        this.completed = false;
    }

    toggleCompleted(){
        this.completed = !this.completed;
    }
}

const Todos = () => {
    const [inputVal, setInputVal] = useState('');
    const [todos, setTodos] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        const newTodo = new Todo(inputVal);
        
        setTodos([...todos, newTodo]);

        setInputVal('');
    }

    function handleDelete(index){
        const newTodos = todos.filter((todo, i) => i!==index)
        setTodos(newTodos);
    }
    function toggleCompleted(index){
        const todo = todos[index];
        todo.toggleCompleted();
        setTodos([...todos]);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                value={inputVal} 
                onChange={event => setInputVal(event.target.value)}
                >
                </input>
                <button>Add</button>
            </form>
            {todos.map((todo, index) => (
                <div key={index}>
                <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
                <input type="checkbox"
                onChange={()=>toggleCompleted(index)}
                checked={todo.completed}></input>
                <button onClick={()=> handleDelete(index)}>Delete!</button>
                </div>
            ))}
        </div>
    )
}


export default Todos