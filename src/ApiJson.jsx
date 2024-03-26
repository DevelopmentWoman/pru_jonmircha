import { useEffect, useState } from 'react'
import './App.css'
import { FormLenguajes,TableLenguajes } from './componentes'
import { helpHttp } from './crudapi/helpers/helpHttp'
import { Loader } from './crudapi/componentes/Loader';
import { Message } from './crudapi/componentes/Message';
import { helpHttp1 } from './crudapi/helpers/helpHttp1';

let api = helpHttp();
let url = "http://localhost:3000/lenguajes"

export const ApiJson = () => {

    const [languages, setLanguages] = useState(null);
    const [dataToEdit, setDataToEdit] = useState();
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);



    const loadData = (resp)=>{
        setLanguages(resp)
        setMessage(null)
        setLoading(false)        

    }

    const callGet = async ()=> {
     const resp = await api.get(url)
     setLoading(true)
     if(resp.err){
      setLanguages(null)
      setMessage(resp.statusText)
      setLoading(false)
     }else{
      loadData(resp)
    } 

    }


    useEffect(() => {
        callGet()

    }, [])
    

  
    const onCreateLanguage = async (newLanguage)=> {

        const options={
          body: newLanguage,
          headers: {
            "Content-Type":"application/json",
          },
        }

        const resp = await api.post(url,options)
        if(!resp.err){
          setLanguages([...languages, newLanguage]) 
        }else{
          setMessage(resp.statusText)
       } 
  
    }
  
    const onUpdateLanguage = async(updateLanguage)=> {


      const newUrl = `${url}/${updateLanguage.id}`
      const options={
        body: updateLanguage,
        headers: {
          "Content-Type":"application/json",
        },
      }

        const resp = await api.put(newUrl,options)
        if(!resp.err){

          const lengUpd = languages.map(lang => (lang.id ===updateLanguage.id) ? updateLanguage : lang )
          setLanguages(lengUpd)
        }else{
          setMessage(resp.statusText)
       }         



    }
  
    const onClickUpdate = (formLanguage)=> {
      
      setDataToEdit({'language':'','category':'',...formLanguage})
    }



    const onDelete = async(id)=> {
      if(dataToEdit){
        alert('Estas en modo edicion')
        return
      }
      const respx = confirm('Esta seguro de querer borrar el registro');

      if(respx){

        const newUrl = `${url}/${id}`
        const options={
          headers: {
            "Content-Type":"application/json",
          },
        }
  
          const resp = await api.del(newUrl,options)
          if(!resp.err){  
            const filtLenguaje = languages.filter(lang =>(
              lang.id !== id ))
              setMessage(null)
            setLanguages(filtLenguaje)
          }else{
            setMessage(resp.statusText)
         } 

      }
    }
  
  
    return (
      <>
          <div className="container">
              <FormLenguajes onCreateLanguage={onCreateLanguage} onUpdateLanguage = {onUpdateLanguage} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
              {loading && <Loader/>}
              {message && <Message msg={message} bgColor='#dc3545'/>}
              {<TableLenguajes languages={languages}  onClickUpdate={onClickUpdate} onDelete={onDelete}/>}

          
          </div>
      </>
    )
}


