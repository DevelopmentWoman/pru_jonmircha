import { useEffect, useMemo, useState } from "react";


export const useForm = (initValue={}, initValidations={}) => {

  let [formState, setFormState] = useState(initValue)
  let [formValidations, setFormValidations] = useState({})


    useEffect(() => {
     
      setFormState(initValue)
    }, [initValue])
    

    
    const onInputChange = (e)=>{
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value
            })
    };

    const onReset = (e)=>{
        e.preventDefault();
        setFormState(initValue)

    };

    useEffect(()=>{
        createValidations();
    },[formState])


    const isFormValid = useMemo(() => {
        

        for( const formValue of Object.keys(formValidations)){
           //console.log(formValidations)
           if(formValidations[formValue] !== null) return  false;
        }
        return true;
    
    }, [formValidations])



    const createValidations = ()=>{
        const formCheckedValues={}

        for (const keyField of Object.keys(initValidations)){
            
            const [fn,error] = initValidations[keyField]
            //console.log(fn)
            formCheckedValues[`${keyField}Valid`]= fn(formState[keyField]) ? null : error;
        }
            // console.log(formCheckedValues)
        setFormValidations(formCheckedValues)
        //console.log(formValidations)
        //console.log(isFormValid)
    }

  return {
        ...formState,
        formState,
        onInputChange,
        onReset,
        isFormValid,
        ...formValidations,
    }
    
  
}


