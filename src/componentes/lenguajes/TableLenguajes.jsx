import { useState } from "react"
import {RowLenguajes} from "./RowLenguajes"

export const TableLenguajes = ({languages, onClickUpdate, onDelete}) => {

  return (

    <table>
            <thead>
                <tr>
                    <th>Lenguage</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
              
              {
                languages ?
                languages.map(language=> <RowLenguajes language={language} key={language.id } onClickUpdate={onClickUpdate} onDelete={onDelete}/>)
                :
                <tr>
                  <td>
                    Sin datos
                  </td>
                </tr>
              }
            </tbody>
    </table>
  
  )
}
