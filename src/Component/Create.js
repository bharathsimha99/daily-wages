import React, { useState } from 'react'

const Create = () => {
    const [details,setDetails] =useState(
        {
        Company:'',
        Location:'',
        Work:'',
        Contact:'',
        phn:''
    })

    const handleChange =(e)=>{
        const {name,value} = e.target
        setDetails({...details,[name]:value})
        
    }
    
    

  return (
    <div>
       <label>Company:</label> 
      <input
      name="Company"
      value={details.Company}
      type='text'
      onChange={handleChange}

      />
    </div>
  )
}

export default Create
