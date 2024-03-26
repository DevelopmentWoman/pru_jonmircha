import { useState } from "react";
import { useFormTodos } from "../../Hooks/useFormTodos";

const initForm={
    id:'',
    todo:'',
    status: false
}



const initValidations={
    todo: [(value)=> value.length > 2, 'El todo debe ser mayor a 2 caracteres']
}

export const FormTodo = ({createTodo}) => {
    const {todo,status,id, formState, onChange, onReset, todoValid, isValidForm} = useFormTodos(initForm, initValidations);
    const [isSubmited, setIsSubmited] = useState(false);


    const onSubmit =(e)=>{
        e.preventDefault();
        setIsSubmited(true)
        if(!isValidForm) return 
        createTodo({id:Date.now(),todo,status});  
        onReset(e);
        setIsSubmited(false)
    }


  return (
        <form onSubmit={onSubmit} className="form-todo">
            <input type="text" name='todo' onChange={onChange} value={todo}/>
            <label 
            style={{display:(!!todoValid && isSubmited ) ? 'block' : 'none', color:'red'}} 
            >{todoValid}</label>
            <input type="submit" value='Enviar'/>
        </form>
  )
}

