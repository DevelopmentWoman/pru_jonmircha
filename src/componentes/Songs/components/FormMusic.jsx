import { useState } from "react"
import { useForm } from "../../../Hooks/useForm"


const formInit = {
    lyrics: '',
    bio: ''
}

const initValidation=
{
  lyrics: [(value)=> value.length>2, 'La canción lyrics debe contener más de 2 caracteres' ],
  bio: [(value)=> value.length>2, 'La bio debe contener más de 2 caracteres' ],
}


export const FormMusic = ({onSearch}) => {

    const {lyrics, bio, formState, onInputChange, onReset, isFormValid,lyricsValid, bioValid} = useForm(formInit, initValidation)
    let [isSubmited,setIsSubmited] = useState(false);


    const onSubmit = (e)=>{
      e.preventDefault();
      setIsSubmited(true);
  
      if (!isFormValid) return
      onSearch(formState)
      onReset(e)
      setIsSubmited(false);
      
    }

  
    
  
    return (
      <form onSubmit={onSubmit} onSearch={onSearch}>
          <input type="text" placeholder="lyrics" name='lyrics' value={lyrics} onChange={onInputChange}/>
          <label style={{display:(!!lyricsValid && isSubmited)?'block':'none', color:'red' }}>{lyricsValid}</label>
          <input type="text" placeholder="Songer" name='bio' value={bio} onChange={onInputChange}/>
          <label style={{display:(!!bioValid && isSubmited)?'block':'none', color:'red' }}>{bioValid}</label>
          <input type="submit"/>
      </form>
    )

}


