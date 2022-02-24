import React from "react";

export default function Login() {
    return (
        <div className="uk-flex uk-flex-center uk-grid">
            <div className="uk-card uk-card-default">
                <div className="uk-child-width-1-4@s uk-flex uk-flex-center" uk-grid>
                    <div>
                        <div className="">
                            <h3 className="uk-card-title">Sign-up</h3>
                            <div className="uk-flex uk-flex-column">
                            <form id="signup">
                                <input placeholder="Username"></input>
                                <input placeholder="someone@email.com"></input>
                                <input placeholder="Password(Requirements)"></input>
                            </form>
                            </div>
                        </div>
                    </div>
                    <div>
                    <h3 className="uk-card-title">Login</h3>
                        <form id="login">
                            <input placeholder="Username"></input>
                            <input placeholder="someone@email.com"></input>
                            <input placeholder="Password(Requirements)"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}