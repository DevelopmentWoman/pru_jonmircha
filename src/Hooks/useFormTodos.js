import { useEffect, useMemo, useState } from "react"


export const useFormTodos = (initForm={}, initValidations={}) => {

    const [formState, setFormState] = useState(initForm)
    const [formValidations, setFormValidations] = useState(initValidations)


    useEffect(() => {
        createValid();

    }, [formState])
    

    // useEffect(() => {
    //     setFormState(initForm)
    // }, [initForm])
    

    const isValidForm = useMemo(() => {

        for(const fieldValid of Object.keys(formValidations)){
            if (formValidations[fieldValid]!==null) return false; 
        }
        return true;
    
    },[formValidations])
    



    const onChange = (e)=>{
        const {name,value} = e.target;
        setFormState({
            ...formState,
            [name]:value, 

        })

    }

    const onReset = (e)=>{
        e.preventDefault()
        setFormState(initForm)
    }

    const createValid = ()=>{
        const formField = {};
        for (const keyField of Object.keys(initValidations)){
            const [fn, error] = initValidations[keyField]
            formField[`${keyField}Valid`] = fn(formState[keyField]) ? null : error
        }
        setFormValidations(formField);

    }


  return {
    ...formState, 
    formState, 
    isValidForm,
    onChange, 
    onReset,
    ...formValidations,
  }
    
}


