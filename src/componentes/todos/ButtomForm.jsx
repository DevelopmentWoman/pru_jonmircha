


export const ButtomForm = ({onDelete}) => {
  return (
    <buttom onClick={onDelete} style={{ 
        width:'50%', 
        textAlign:"center",
        background:'gray', 
        color:'white', 
        fontWeight:'bold', 
        fontSize:'1.2rem',
        padding:'.5rem',
        borderRadius: '10px' 
    }}
    >
    Eliminar Todos completados
    </buttom>
  )
}


