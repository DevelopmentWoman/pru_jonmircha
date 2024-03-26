

export const RowLenguajes = ({language, onClickUpdate, onDelete}) => {


  // console.log(language)
  return (
    
    <tr>
        <td>{language.language}</td>
        <td>{language.category}</td>
        <td><button onClick={()=>onClickUpdate(language)}>Edit</button><button onClick={()=>{onDelete(language.id)}}>Delete</button></td>
    </tr>
  )
}

