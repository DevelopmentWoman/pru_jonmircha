import { useState } from 'react'
import './App.css'
import { CardAlumno } from './componentes/CardAlumno'

const  alumnosArray =[
  {id:1, nombre:'Rafael', apellido: 'Herrera', edad: '20', matricula: '100'},
  {id:2, nombre:'Martha', apellido: 'Perez', edad: '28', matricula: '100'},
  {id:3, nombre:'Linda', apellido: 'Marcano', edad: '18', matricula: '100'},
  {id:4, nombre:'Fabiana', apellido: 'Bernal', edad: '22', matricula: '100'}
]

function App() {
  const [total, setTotal] = useState(0)
  const [alumnos, setAlumnos] = useState(alumnosArray)

  return (
    <>
      <h1>Total Matrícula: {total}</h1>
      <CardAlumno alumnosState={{ alumnos, setAlumnos }} setTotal={setTotal}/>
    </>
  )
}

export default App
