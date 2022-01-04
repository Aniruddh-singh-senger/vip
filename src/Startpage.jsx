import React from 'react'
import { useParams } from "react-router-dom";
        

const Startpage = () => {

    let { id } = useParams();

    return (
        <>
           <div className='input'>
<h1>this is detail page but due to time issue i'm not design and render product data on this page </h1>
           </div>
        </>
    )
}

export default Startpage
