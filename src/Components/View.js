import React from 'react'
import {Icon} from "react-icons-kit";
import {trash} from "react-icons-kit/feather/trash";
function View({update,deleteData}) {
  return update.map(datas=>(
    <tr key={datas.number}>
        <td >{datas.number}</td>
        <td>{datas.name}</td>
        <td>{datas.email}</td>
        <td onClick={()=>deleteData(update.number)}><Icon icon={trash}/></td>
    </tr>
  ))
}
export default View
