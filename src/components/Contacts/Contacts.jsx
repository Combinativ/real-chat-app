import React,{ useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Layout } from '../Layout'
const Contacts = () => {
    const{users,handleToggle,setSendTo,currentUser}=useContext(UserContext)
    const handleSelect = (child)=> {
        setSendTo({id: child.id, name : child.name})
        handleToggle()
    }
  return (
        <div className='border h-full'  style={{overflowY:'auto'}}>
            <div  className='w-full h-full flex-col flex items-center' >
            {users && users.map((v,i)=>{
                return(
                    <div key={i} className='hover:text-[#E3596D] flex-col justif-around p-5 w-full'>
                        {v.name&&v.id!==currentUser.uid && 
                            <button onClick={()=>{handleSelect({id :v.id,name: v.name})}}  style={{boxShadow:'4px 4px black'}} className='focus:outline-none w-full bg-slate-200 p-5 rounded-[50px]'>
                                {v.name.substring(0,28)}
                            </button>
                        }
                    </div>
                )
            })}
        </div>

    </div>
  )
    
    
}

export default Contacts