import React, { Fragment , useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer"
import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from "./Home.module.css"
import { useSelector } from "react-redux";
import Table from "./Table";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret, faList, faShare, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const router = useRouter()

    const redirectHere = () => {
        router.push(`/add`)
    }

const alert = () => toast("Copied to clipboard");
const shareWebsite = ()=> {
    navigator.clipboard.writeText('Visit the website at ')
   alert()
}
     

    // const foundDetails = useSelector(state => state.apartment.details)
    return (
        <Fragment>
                <ToastContainer />
            <Header/>
            <div className={classes.homepage}>

<div className="container">
<div className={classes.box_one}>
                <div className="row">
                    
                    <div className="col-md-6">
                        <p className={classes.first_text}>HELP DETECT RENTAL FRAUD</p>
                    <h4 className={classes.homepage_title}>
                        Introducing DontBeScammed
                        <br/> 
                        </h4>
                    <p className={classes.intro_hero}>
                     <span style={{fontWeight:'bold'}}>1 in 10</span> people living in Poland fall victim to rent fraud. <br/>Protect the next person by submitting details of fraudsters and join a community that's taking action against scammers. Together, we can expose rental fraud and make informed choices.
                    </p>
                    <button class={classes.ctabutton1}>How It Works</button>
                    <Link href="/add" >
                    <button class={classes.ctabutton2}>Report Scam</button>
                    </Link>
                    </div>
                    
                    <div className="col-md-6">
                        <div className={classes.player_animation}>
                        <Player
                        autoplay
                        loop
                        src="/images/search.json"
                        className="img-fluid animation"
                        // style={{ height: '400px', width: '700px', marginTop:"40px" }}
                        >
</Player>
                        </div>

                    </div>
          
                </div>
    </div>     
</div>

 <div className="container">
 <div className={classes.box_two}>
 <p className={classes.hit_heading}>HOW IT WORKS</p>
 <div className="row">
                    <div className="row">
                     
                        <div className="col-md-4">
                            <div className={classes.hiw_box}>
                            <FontAwesomeIcon icon={faUserSecret} width="30" />
                        <p className={classes.hit_title}>Detect Rent Fraud.</p>
                        <p className={classes.hit_subtitle}>Enter the scammers' names, emails, and phone numbers </p>
                         <p onClick={redirectHere} className={classes.hit_button}>Report a scammer  <FontAwesomeIcon icon={faCaretRight} width="8" /></p>
                            </div>
                   
                        </div>

                            <div className="col-md-4">
                            <div className={classes.hiw_box}>
                            <FontAwesomeIcon icon={faList} width="30" />
                            <p className={classes.hit_title}>We'll Populate Our Database.</p>
                            <p className={classes.hit_subtitle}>Check here to view reported rent frauds so you don`t fall victim</p>
                            <p  className={classes.hit_button}>
                                <a href="#submissions">
                                View reported scammers  <FontAwesomeIcon icon={faCaretRight} width="8" />
                                </a>
                                </p>
                            </div>
                            </div>

                            <div className="col-md-4">
                            <div className={classes.hiw_box}>
                            <FontAwesomeIcon icon={faShare} width="30" />
                            <p className={classes.hit_title}>Share your experiences</p>
                            <p className={classes.hit_subtitle}>Invite people to use DontBeScammed and detect fraudsters before they get scammed.</p>
                            <p onClick={shareWebsite} className={classes.hit_button}>Share <FontAwesomeIcon icon={faCaretRight} width="8" /></p>
                            </div>
                            </div>
                    </div>
                    </div>
    </div>   
    </div>       






                

                    <div className="container" id="submissions">
 <div className={classes.box_three}>
                <div className="row">
                    
                    <div className="col-md-12">
                        <p className={classes.all_submissions_text}>ALL SUBMISSIONS</p>
                        <Table/>
                    </div>
                    
          
          
                </div>
    </div>   
    </div>    
    
         

                <Footer/>
            </div>
  
        </Fragment>
       
    )
}

export default Home