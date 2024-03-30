import React from "react";
import Link from 'next/link';
import classes from "./Header.module.css"
import { useRouter } from 'next/router';


const Header = () => {
  const router = useRouter();

    return (
      <div className="container">
               <nav style={{marginTop:"15px", marginBottom:"15px"}} class="navbar navbar-expand-lg navbar-light">
      

      <Link href="/" activeClassName="is-active" >
      <a class="navbar-brand" href="/">DontBeScammed</a>
            </Link>
     
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
       
          {/* <Link href="/add" activeClassName="is-active" >
            <a className={router.pathname == "/add" ? "nav-link nav-item navitemactive" : "nav-link nav-item"} href="#">Add a possible scam</a>
            </Link> */}
      
            {/* <Link href="/about" activeClassName="is-active" >
            <a className={router.pathname == "/about" ? "nav-link nav-item navitemactive" : "nav-link nav-item"} href="#">About </a>
            </Link>
     */}
        </ul>
        <div class="my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">

        {/* <Link href="/signup" activeClassName="is-active" >
            <a className={router.pathname == "/signup" ? "nav-link nav-item navitemactive" : "nav-link nav-item"} href="#">Sign Up </a>
            </Link> */}

            {
              router.pathname =="/" && <>
            <Link href="/add" >
            <button className="headerbutton">
            <a>Add Scam</a>
            </button>
            </Link>
              </>
            }

      {
              router.pathname =="/add" && <>
                   <Link href="/" >
          <button className="headerbutton">
          <a>Go home</a>

          </button>
            </Link>
              </>
            }
   
    
        </ul>
        </div>
      </div>
    </nav>
      </div>
 
    )
}

export default Header