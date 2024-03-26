

export const RowTodo = ({todo,completedTodo}) => {
  return (
    <li onClick={()=>completedTodo(todo)}   className={(todo.status) ? 'interline' : ''}>{todo.todo} </li>
  )
}

