import React from 'react'
import Logo from '../../assets/dimension-drafts-logo.png'
import './Signup.css'

function Signup() {
    return (
        <div className='signupWrapper'>
            <div className='outerLayer'></div>
            <div className="middleLayer"></div>
            <div className="lowerLayer"></div>
            <div className="relative z-10 signupForm">
                <div className="header">
                    <img src={Logo} alt="logo" width={300} />
                    <p>Developers</p>
                </div>
                <div className="main-content">
                    <form>
                        <h1>
                            Sign up
                        </h1>
                        <div className="game-name input-container">
                            <label htmlFor="gameName">Game Name</label>
                            <input type="text" id='gameName' name='gameName' placeholder='Enter Game Name' />
                        </div>
                        <div className="email-address input-container">
                            <label htmlFor="email">Email Address</label>
                            <input type="text" name="email" id="email" placeholder='Enter Email Address' />
                        </div>
                        <div className="password input-container">
                            <label htmlFor="pass">Password</label>
                            <input type="text" name="pass" id="pass" placeholder='Enter Your Password' />
                        </div>
                        <div className="confirm-pass input-container">
                            <label htmlFor="confirmPass">Confirm Password</label>
                            <input type="text" name="confirmPass" id="confirmPass"
                                placeholder='Confirm Your Password' />
                        </div>
                        <div className="signup-btns">
                            <button type='button' className='signup-btn'>Sign up</button>
                            <button type='button' className='already-btn'>Already have an account? Sign in.</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup