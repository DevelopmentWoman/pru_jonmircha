import { useEffect, useState } from "react"
import { FormTodo } from "./componentes/todos/FormTodo"
import { TabllaTodo } from "./componentes/todos/TabllaTodo"
import { ButtomForm } from "./componentes/todos/ButtomForm"




const todosInit=(JSON.parse(localStorage.getItem('todos'))) ? JSON.parse(localStorage.getItem('todos')) : []


export const AppTodo = () => {
    const [todos, setTodos] = useState(todosInit)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
 
    const createTodo= (todo)=>{
        setTodos([...todos,todo])   

    }

    const completedTodo = (todo)=>{
        const completTod = todos.map(tod=> (tod.id===todo.id) ? {...tod, status: !tod.status} : tod)
        setTodos(completTod)
    }

    const onDelete = ()=>{
        const todosCompleted = todos.filter(todo => todo.status===false);
        setTodos(todosCompleted);
    }

  return (
    <div className="container">
        <h1>Lista de mis ToDos</h1>
        <FormTodo createTodo={createTodo}/>
        <TabllaTodo todos={todos} completedTodo={completedTodo}/>
        <ButtomForm onDelete={onDelete}/>
    </div>
  )
}
