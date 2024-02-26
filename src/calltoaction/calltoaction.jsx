import { useState } from 'react';
import styles from './calltoactioncss.module.css';
import calltoactionimg from '../assets/im3rd-media.jpg';

export default function CallToAction() {
    const [isOpen, setIsOpen] = useState(false)

    return(
            <div className={styles.calltoaction__row}>
                <div className={styles.calltoaction__col}>          
                <img
                    alt=""
                    src={calltoactionimg}
                    width="100%"
                    height="100%"
                />   
                </div>
                <div className={styles.calltoaction__col}>
                        <h1 className={styles.calltoaction__H1}>About Us</h1>
                        <h2 className={isOpen ? styles.isOpencalltoaction__H2 : styles.calltoaction__H2}>Isn't it hard to find a dependeble contractor?
                        With Hammer4Service you will have dependeble contractors and subcontractors at a rate that doesn't break the bank.
                        Managing your home improvement projects shouldn't feel daunting. It should feel exciting!
                        We take the hard work out of your projects, so you can just focus on what is really important
                        We serve the low country! That is, Savannah and surrounding areas. Feel like we may not serve you? Give us a shout! We may be able to make an exception. 😉
                        When you call, you will talk to a real person who wants to solve your problem. Call us today!
                        </h2>

                    <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className={styles.readMoreButton}>
                        {isOpen ? "read less..." : "read more..."}
                    </button>
                </div>
            </div>
    )
}