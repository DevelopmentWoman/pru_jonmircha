
export const CardAlumno = ({setTotal, alumnosState}) => {

    const {alumnos, setAlumnos} = alumnosState
    console.log(alumnos)

    const onSumar = (monto,id)=>{

        setTotal((total) => total + parseInt(monto))
        setAlumnos(alumnos=> alumnos.filter(alumno=> alumno.id != id))
    }
    

  return (

    <>
        <div className="container  d-flex justify-content-center align-items-center" style={{ width:"100%"}}>
        {
   
            alumnos.map(alumno=>


                        <div className="card  me-2" key={alumno.id}>
                            <div className="card-body">
                                <h5 className="card-title">{alumno.nombre + " " + alumno.apellido}</h5>
                                <h6>Edad: {alumno.edad}</h6>
                                <h6>Matrícula: {alumno.matricula}</h6>

                            </div>
                            <button className="btn btn-primary mx-5" onClick={()=>onSumar(alumno.matricula, alumno.id)}>Sumar</button>
                        </div>
                        

                )

        }
        </div>
    </>
  )
}


