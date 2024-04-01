import { useState } from "react"
import { useForm } from "../../../Hooks/useForm"


const formInit = {
    song: '',
    artist: '',
}

const initValidation=
{
  song: [(value)=> value.length>2, 'La canción lyrics debe contener más de 2 caracteres' ],
  artist: [(value)=> value.length>2, '_El nombre del artista debe contener más de 2 caracteres' ],
}


export const FormMusic = ({onSearch}) => {

    const {song, artist, formState, onInputChange, onReset, isFormValid,songValid, artistValid} = useForm(formInit, initValidation)
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
          <input type="text" placeholder="lyrics" name='song' value={song} onChange={onInputChange}/>
          <label style={{display:(!!songValid && isSubmited)?'block':'none', color:'red' }}>{songValid}</label>
          <input type="text" placeholder="Songer" name='artist' value={artist} onChange={onInputChange}/>
          <label style={{display:(!!artistValid && isSubmited)?'block':'none', color:'red' }}>{artistValid}</label>
          <input type="submit"/>
      </form>
    )

}


