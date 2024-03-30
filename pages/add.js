import React, {Fragment} from "react"
import Head from "next/head"
import Add from "../components/Add"

const AddPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Add | Apartment </title>
    <meta 
    name="description" 
    content="Find trusted hands to handle your chores"/>  
    </Head>  
    <Add/>
</Fragment>
   
  )
}

export default AddPage 