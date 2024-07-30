import React, { useState } from 'react';
function App() {
  
    const[Name,setName] = useState('');  // these details will mention in the form
    const[Email,setEmail] = useState('');
    
    // below we made the function for button handling 
    const hadnlebutton = event =>{
     event.preventDefault(); // here we are setting to defualt show the data will not be disappear
     console.log(`Name: ${Name}, Email: ${Email}`)  // here we did console so we can see the value
     setName(""); // here we are refershing the form values
     setEmail(""); // here we are refershing the form values
    }
     
     return (
       <>
          <form onSubmit={hadnlebutton}>    {/*here we made the form  and add onSubmit beacause the function will take care it */}
           <div>
             <label>Name:</label>
             <input 
             type="text"
             id = "Name"
             value={Name}
             onChange={(e) =>setName(e.target.value)}  //here we setting the  target value so we can enter the details in form
             />
             <label>Email:</label>
             <input
             type='text'
             id='Email'
             value={Email}
             onChange={(e) =>setEmail(e.target.value)}
              />
           </div>
            <button type='submit'>Submit</button> {/*its our submit button */}
         </form>
         
         
           
       </>
     )
   
   }
   
   export default App