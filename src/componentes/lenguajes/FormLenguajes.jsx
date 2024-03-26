import { useEffect, useState } from "react"
import { useForm } from "../../Hooks/useForm";

const initLanguage=
{language:'',
  category: '',
  id:null}

const initValidation=
{
  language: [(value)=> value.length>1, 'El lenguaje debe contener más de 2 caracteres' ],
  category: [(value)=> value.length>1, 'La categoría debe contener más de 2 caracteres' ],
}



export const FormLenguajes = ({onCreateLanguage, onUpdateLanguage, dataToEdit=initLanguage, setDataToEdit}) => {
  console.log({...dataToEdit})
  const {id,language, category, formState, onInputChange, onReset, isFormValid, languageValid, categoryValid} = useForm(dataToEdit, initValidation);
  let [isSubmited,setIsSubmited] = useState(false);

  
  useEffect(() => {
    console.log(dataToEdit)
  }, [setDataToEdit])
  
  console.log({...formState})
  const onSubmit = (e)=>{
    e.preventDefault();
    setIsSubmited(true);

    if (!isFormValid) return
    if(id===null){
      onCreateLanguage({id:`${Date.now()}`,language,category})
    }else{

      onUpdateLanguage({...formState})
      console.log(dataToEdit)
      
    }
    setDataToEdit(initLanguage)
    onReset(e)
    setIsSubmited(false);
    
  }

  //const editLenguage = ()=>{};

  

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Language" name='language'  value={language} onChange={onInputChange}/>
        <label style={{display:(!!languageValid && isSubmited)?'block':'none', color:'red' }}>{languageValid}</label>
        <input type="text" placeholder="Category" name='category' value={category} onChange={onInputChange}/>
        <label style={{display:(!!categoryValid && isSubmited)?'block':'none', color:'red' }}>{categoryValid}</label>
        <input type="submit"/>
    </form>
  )
}
