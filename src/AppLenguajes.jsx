import { useState } from 'react'
import './App.css'
import { FormLenguajes,TableLenguajes } from './componentes'

const languagesInit = [
    {id: 1, language: 'Java', category: 'Desktop Web lenguage'},
    {id: 2, language: 'JavaScript', category: 'Web lenguage'},
    {id: 3, language: 'Python', category: 'Desktop Web lenguage'},
    {id: 4, language: 'C++', category: 'Desptok lenguage'}
]

export const AppLenguajes = () => {

  const [languages, setLanguages] = useState(languagesInit);
  const [dataToEdit, setDataToEdit] = useState();


  const onCreateLanguage = (newLanguage)=> {
      setLanguages([...languages, newLanguage]) 
      localStorage.setItem(['languages',JSON.stringify(languages)])

  }

  const onUpdateLanguage = (updateLanguage)=> {
    const lengUpd = languages.map(lang => (lang.id ===updateLanguage.id) ? updateLanguage : lang )
    setLanguages(lengUpd)
  }

  const onClickUpdate = (formLanguage)=> setDataToEdit(formLanguage)

  const onDelete = (id)=> {
    if(dataToEdit){
      alert('Estas en modo edicion')
      return
    }
    const resp = confirm('Esta seguro de querer borrar el registro');
    if(resp){
      const filtLenguaje = languages.filter(lang =>(
          lang.id !== id 
      ))
      setLanguages(filtLenguaje)
    }
  }


  return (
    <>
        <div className="container">
            <FormLenguajes onCreateLanguage={onCreateLanguage} onUpdateLanguage = {onUpdateLanguage} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <TableLenguajes languages={languages}  onClickUpdate={onClickUpdate} onDelete={onDelete}/>
        
        </div>
    </>
  )
}
