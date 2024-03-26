import { RowTodo } from "./RowTodo"


export const TabllaTodo = ({todos, completedTodo}) => {

    // console.log(todos)
  return (
    <ul>
        {
            todos.map(todo=> <RowTodo todo={todo} completedTodo={completedTodo} key={todo.id}/>)
        }
        
    </ul>
  )
}
