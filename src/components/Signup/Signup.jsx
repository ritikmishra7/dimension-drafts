import React from 'react'
import './Signup.css'

function Signup() {
    return (
        <div className='signupWrapper'>
            <div className='outerLayer'></div>
            <div className="middleLayer"></div>
            <div className="lowerLayer"></div>
            <div class="relative z-10 w-full max-w-xl signupForm">
                <div className="header">
                    <h1 className='text-white font-bold text-center text-xl'>
                        <span style={{ color: 'rgb(210,163,246)', fontSize: '2rem', fontWeight: 'lighter' }}>{'{'}</span>
                        DIMENSION DRAFTS
                        <span style={{ color: 'rgb(210,163,246)', fontSize: '2rem', fontWeight: 'lighter' }}>{'}'}</span>
                    </h1>
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
                        <button type='button' className='signup-btn'>Sign up</button>
                        <button type='button' className='already-btn'>Already have an account? Sign in.</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup