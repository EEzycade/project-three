import React from 'react';
import '../Portal/style.css'

function Portal() {

    return (
        <div>
            <header>
                <div className='nav-buttons'>
                    <a href="/">blank</a>
                    <a href="/">blank</a>
                    <div>
                        <a href="/" className='app-name'>Health <span className='app-symbol'> + </span> Wealth</a>
                    </div>
                    <a href="/">Contact</a>
                    <a href="/">blank</a>
                </div>
                <img src={require("../../assets/img/hero.jpg").default} alt='healthy food' className='hero-img' />
                <div className='welcome-forms'>
                    <form className='sign-in-form'>
                        <p>Sign In!</p>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <form className='sign-up-form'>
                        <p>Sign Me Up!</p>
                        <div class="mb-3">
                            <input type="first-name" class="form-control" placeholder="First Name" />
                        </div>
                        <div class="mb-3">
                            <input type="last-name" class="form-control" placeholder="Last Name" />
                        </div>
                        <div class="mb-3">
                            <input type="Username" class="form-control" placeholder="Username" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </header>
        </div>



    )
}

export default Portal;