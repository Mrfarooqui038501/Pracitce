import React, { useState } from 'react';
function App() {
  
    const [formData, SetformData] = useState({firstName:"",email:""})
    const [error, setError] = useState("")
     
    // below we made the function for button handling 
    const handleSubmit = event => {
        event.preventDefault();

        if(!formData.firstName || !formData.email){
            setError('Please enter details.')
            return;
        }
        console.log(`Name: ${formData.firstName}, Email: ${formData.email} `)
    }

    const handleChange = event =>{
        const {name,value} = event.target;
        SetformData((prevData) =>({...prevData, [name]:value}))
        console.log(formData)
    }
     
     return (
       <>
          <form onSubmit={handleSubmit}>    {/*here we made the form  and add onSubmit beacause the function will take care it */}
           <div>
             <label>Name:</label>
             <input 
             type="text"
             id = "name"
             name='firstName'
             value={formData.firstName}
             onChange={handleChange}  //here we setting the  target value so we can enter the details in form
             />
             <label>Email:</label>
             <input
             type='text'
             id='email'
             name='email'
             value={formData.email}
             onChange={handleChange}
              />
           </div>
            <button type='submit'>Submit</button> {/*its our submit button */}
            <span style={{color:"blue"}}>{error}</span>
         </form>
         
         
           
       </>
     )
   
   }
   
   export default App