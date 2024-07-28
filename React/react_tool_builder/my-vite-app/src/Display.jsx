import React from "react";
const Display = ({fruits,profile}) => {
    console.log(fruits,profile)

return <div>
    <h2>fruits list:</h2>
    <ul>
        {/*  */}
        {fruits.map((fruits,index) =>{
            return <li key={index}>{fruits}</li>
        })}
    </ul>
    <h2> person info:</h2>
    <p>Name:{profile.name}</p>
    <p>Profile:{profile.profile}</p>
</div>
}
export default Display;