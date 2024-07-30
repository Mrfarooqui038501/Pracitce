import React, { useEffect, useState } from "react"
import { Link,Routes,Route,useParams, useInRouterContext } from "react-router-dom"

function About(){
    return<h1>I am from About page </h1>
}

function Home(){
    return <h1>I am from Home page </h1>
}

function Product(){
    return <h1>I am from Product page </h1>
}

function PageNotFound(){
    return <h1>404,error Page not found, check URL. </h1>
}

function Users(props){
console.log(props)
  let {userId} = useParams();

let [user, setUser] = useState(null);
const[isLoading,setisLoading] = useState(false)

useEffect(() =>{
    async function apiCall(){
     setisLoading(true)   
    const resp = await fetch(`https://fakestoreapi.com/users/${userId}`);
    const data = await resp.json();
    setisLoading(false)
    console.log(data)
    setUser(data);
    }
    apiCall()
},[])

return <>
{isLoading && user === null? <h3>Loading....</h3>:null}
{!isLoading && user ? <>

<h4>User First name:{user?.name?.firstname}</h4>
<h4>User Last name:{user?.name?.lastname}</h4>
<h4>User email:{user?.email}</h4>
</> : null}
{!isLoading && user === null ?<h5>Data not found</h5>:null}

</>
}

function Routing(){
    return(
        <>
        <h1>Routing Example</h1>
        <nav>
            <ul>
            <li>
                <Link to={'/about'}>About</Link>
                </li>
            <li>
                <Link to={'/'}> Home </Link></li>
            <li>
               <Link to = {'/product'} >Product</Link> 
               </li>
            <li>
               <Link to = {'/users/1'} >Users</Link> 
               </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/about/*' element ={<About></About>} />
            <Route path='/' element ={<Home></Home>} />
            <Route path='/Product' element ={<Product></Product>} />
            <Route path='/*' element ={<PageNotFound></PageNotFound>} />
            <Route path='/users/:userId' element = {<Users isAdmin={true}></Users>} />
        </Routes>
        </>
    )
}

export default Routing;

