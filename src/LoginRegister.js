import React from "react";

function LoginRegister() {
    function SwitchContent() {
        const content = document.getElementById('content');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        registerBtn.addEventListener('click', () => {
            content.classList.add("active")
        });
        loginBtn.addEventListener('click', () => {
            content.classList.remove("active")
        })
    }

    return (
        <div className="content justufy-content-center align-items-center d-flex shadow-lg" id="content">
            {/* --------------------------------Register Form-------------------------------- */}
            <div className="col-md-6 d-flex justify-content-center">
                <form>
                    <div className="header-text mb-4">
                        <h1>Sign up</h1>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Name"
                            className="form-control form-control-lg bg-light fs-6" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" placeholder="Email"
                            className="form-control form-control-lg bg-light fs-6" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" placeholder="Password"
                            className="form-control form-control-lg bg-light fs-6" />
                    </div>
                    <div className="input-group mb-3 justify-content-center">
                        <button className="btn border-white text-white w-50 fs-6">Sign up</button>
                    </div>
                </form>
            </div>

            {/* --------------------------------Login Form-------------------------------- */}
            <div className="col-md-6 right-box">
                <form>
                    <div className="header-text mb-4">
                        <h1>Login</h1>
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" placeholder="Email"
                            className="form-control form-control-lg bg-light fs-6" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" placeholder="Password"
                            className="form-control form-control-lg bg-light fs-6" />
                    </div>
                    <div className="input-group mb-4 d-flex justify-content-between">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label htmlFor="formcheck" className="form-check-label text-secondary">
                                <small>Remember me</small>
                            </label>
                        </div>
                        <div className="forgot">
                            <small>
                                <a href="#">Forgot password?</a>
                            </small>
                        </div>
                    </div>
                    <div className="input-group mb-3 justify-content-center">
                        <button className="btn border-white text-white w-50 fs-6">Login</button>
                    </div>
                </form>
            </div>

            {/* --------------------------------Switch Panel-------------------------------- */}
            <div className="switch-content">
                <div className="switch">
                    <div className="switch-panel switch-left">
                        <h1>Hello again!</h1>
                        <p>Good to see you back</p>
                        <button className="hidden btn border-white text-white w-50 fs-6"
                            id="login" onClick={SwitchContent}>
                            Login
                        </button>
                    </div>
                    <div className="switch-panel switch-right">
                        <h1>Welcome!</h1>
                        <p>Join us now</p>
                        <button className="hidden btn border-white text-white w-50 fs-6"
                            id="register" onClick={SwitchContent}>
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister;