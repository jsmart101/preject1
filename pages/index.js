import React, {Fragment} from "react"
import Head from "next/head"
import Home from "../components/Home"

const HomePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Home | VerifyRentors </title>
    <meta 
    name="description" 
    content="Verify Rentors"/>  
    </Head>  
    <Home/>
</Fragment>
   
  )
}

export default HomePage 