import React from "react";

const ConditionalRendering =({isloggedin,username}) =>{
    
    return  <div>
        {isloggedin ? <h1>hi {username}</h1>: <h3>Hi Guest Please kindly login</h3>}
    </div>
        
    
}
export default ConditionalRendering;