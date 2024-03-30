import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from "./Home.module.css"


const Header = () => {
  const router = useRouter();

    return (
      <div className="container">
           <h6 className={classes.footer_note}>For Inquiries, Reach out to verifyrentors@gmail.com</h6>
    <h6 className={classes.chores}>&copy; VerifyRentors 2023</h6>
      </div>
 
    )
}

export default Header