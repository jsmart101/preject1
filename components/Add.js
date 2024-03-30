import React, { Fragment, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer"
import classes from "./Add.module.css"
import { useRouter } from 'next/router';
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from "react-redux";
// import { errandActions } from "../../store/errandSlice";
import { useSelector } from "react-redux";
import 'react-phone-number-input/style.css'
import PhoneInput , { formatPhoneNumber, formatPhoneNumberIntl, isPossiblePhoneNumber } from 'react-phone-number-input'

const Stepone = () => {

    const router = useRouter()
    const dispatch = useDispatch()    
    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [notify, setnotify] = useState("")    
    const [filepath, setfilepath] = useState("")    
    const [phone, setPhone] = useState()
    
    const alert = () => toast("Redirecting!");
    
    // const location = useSelector(state => state.errand.location)
    // console.log(location)
 


  async function submitData() {
    let response
    let responsedata
    try{
      response = await fetch(`https://apartment-7e5fd-default-rtdb.firebaseio.com/submissions.json`,{
        method: "POST",     
        body: JSON.stringify({
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            phone: phone,
            "proof": filepath,
            date: new Date().toLocaleString(),
            status: "Approved"
        }),
        headers: {
          'Content-Type': 'application/json',
          },
      })
      responsedata = await response.json()
      console.log("data",responsedata)
      if (response.status == "400"){
        setnotify("An error occured")
      }
      else{
       
        firstnameRef.current.value = ""
        lastnameRef.current.value = ""
        emailRef.current.value = ""
        setPhone("")
        setnotify("Thank you for your submission.")
        setLoading(false)
        alert()
        router.push(`/`)

       
      }
    } catch (error){
      return
    }

  }

    const steponeHandler = () => {
        
        const firstname = firstnameRef.current.value
        const lastname = lastnameRef.current.value
        const email = emailRef.current.value
        
        console.log(phone)

        setLoading(true)
        if(email === "" || phone === undefined){
          toast("Email or Phone Number is required")
            setLoading(false)
        }

        else if(!email.includes("@")){
          toast("Invalid Email")
            setLoading(false)
        }
        else if (filepath === "") {
            toast("Upload an Evidence/proof")
            setLoading(false)
        }
        else{
            submitData()
        }
       
    }

    const uploadImage = (e) => {
        setError("")
        // $(".overlay").fadeOut(1);
        let uploadedFile = e.target.files[0]
      // setLoading(true)
      setnotify("Uploading...")
      const data = new FormData()
      data.append("file", uploadedFile)
      data.append("upload_preset", "p1i3j1wr")
      data.append("cloud_name","dmiiu0273")
      fetch("  https://api.cloudinary.com/v1_1/dmiiu0273/upload",{
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
      // setUrl(data.url)
      console.log(data)
      if(data.error){
        // setnotify("Uploading...")
        setnotify("An error occured")
      }
      else{
        // setidfrontcopy(data.url)
        localStorage.setItem("image", data.secure_url);
        setfilepath(data.secure_url)
        // setLoading(false)
        setnotify("File Uploaded, Submit the form below to proceed")
      }
      $(".overlay").fadeOut(0);
  
      })
      .catch(err => console.log(err))
       
      }
    return (
        <Fragment>
             <Header/>
             <ToastContainer />
             <div className="container">
             <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className={classes.add_box}>
                  <h4 className={classes.steponetitle}>Input details about the possible scam</h4>

<div className="row">
  <div className="col-md-6 col-6">
  <div class="form-group">
<label for="exampleFormControlTextarea1">First Name</label>
<input ref={firstnameRef} class="form-control"  placeholder="Firstname"/>
 </div>
  </div>
  <div className="col-md-6 col-6">
  <div class="form-group">
<label for="exampleFormControlTextarea1">Last Name</label>
<input ref={lastnameRef} class="form-control"  placeholder="Lastname"/>
 </div>
  </div>
</div>


<div className="row">
  <div className="col-md-6">
  <div class="form-group">
<label for="exampleFormControlTextarea1">Email.</label>
<input ref={emailRef} class="form-control"  placeholder="Email"/>
 </div>
  </div>
  <div className="col-md-6">
  <div class="form-group">
<label for="exampleFormControlTextarea1">Phone.</label>

<PhoneInput
  international
  countryCallingCodeEditable={false}
  defaultCountry="CH"
  placeholder="Enter phone number"
  value={phone}
  class="form-control"
  onChange={setPhone}
  />
 </div>
    </div>
</div>

 

 


 <div className="image-upload">
 <label for="exampleFormControlTextarea1">Upload an evidence/proof of scam. (Maximum file size: 10 Megabytes)</label>
 <br/>
    <input type="file" id="file" onChange= {uploadImage}/>
</div>

 {error && <p style={{marginTop:"20px"}}>{error}</p>}
 <p style={{marginTop:"20px"}}  className=''>{notify}</p>
 
    <button  data-testid="num2" onClick={steponeHandler} 
    style={{backgroundColor:"#1683fb", color:"#FFF", marginTop:"25px"}} 
    type="submit" class="btn">
        
    { loading &&   <div style={{marginRight:"10px"}} class="spinner-border spinner-border-sm" role="status">
            <span class="sr-only">Loading...</span>
        </div>}

         Submit Form
        
    </button>
                  </div>
        
             
                </div>

                <div className="col-md-3"></div>
             </div>
            
             <Footer/>
             </div>
             
        </Fragment>
        
    )
}

export default Stepone