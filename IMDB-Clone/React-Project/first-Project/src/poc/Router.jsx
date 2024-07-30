import React from "react"
import { Link,Routes,Route } from "react-router-dom"

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
            </ul>
        </nav>
        <Routes>
            <Route path='/about/*' element ={<About></About>} />
            <Route path='/' element ={<Home></Home>} />
            <Route path='/Product' element ={<Product></Product>} />
            <Route path='/*' element ={<PageNotFound></PageNotFound>} />
        </Routes>
        </>
    )
}

export default Routing;

