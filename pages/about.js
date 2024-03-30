import React, {Fragment} from "react"
import Head from "next/head"
import About from "../components/About"

const AboutPage = () => {
  return (
    <Fragment>
    <Head>
    <title>About | Workerr</title>
    <meta 
    name="description" 
    content="Find trusted hands to handle your chores"/>  
    </Head>  
    <About/>
</Fragment>
   
  )
}

export default AboutPage 