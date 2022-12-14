import React,{useState,useEffect} from 'react'

export default function Addition() {
    const [values, setValues] = useState([])
    useEffect(()=>{
        const values =localStorage.getItem("values")
        setValues(JSON.parse(values))
    },[])
  return (
    <div>
    <br/>
    {
            values && values.length>0
            ?
            values.map((value)=>{
                return(
                    <>
                    <div>
                    <table className='gap-5'>
                    <tr>
                        <th>{value.name}</th>
                        <th>{value.click}</th>
                        <th>
                            <div className=' gap-5'>
                                <button className='but btn btn-success'>Edit 📝 </button> &nbsp;
                                <button className='but btn btn-danger'>Delete 🗡️ </button>
                            </div>
                        </th>
                    </tr>
                    </table>
                    </div>
                    </>
                )
            })
            :
            "no DAta"
        }
    </div>
  )
}
