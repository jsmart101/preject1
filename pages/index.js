import React, {Fragment} from "react"
import Head from "next/head"
import Home from "../components/Home"

const HomePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Home | DontBeScammed </title>
    <meta 
    name="description" 
    content="DontBe Scammed"/>  
    </Head>  
    <Home/>
</Fragment>
   
  )
}

export default HomePage 