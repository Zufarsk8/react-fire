import React, { Component } from "react";
import "./index.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import { withFirebase } from "../Firebase";

class SignUp extends Component {
  render() {
    return (
      <div className="body__outer">
        <div className="body__inner shadow">
          <div className="row" style={{ padding: 0, margin: 0 }}>
            <div className="col-md-6 login__container__left">
              <div className="login__msg__container">
                <div className="login__msg">Welcome back to MyApp!</div>
                <br />
                <button
                  onClick={this.props.firebase.logIn}
                  className="ui button btn btn--login shadow"
                >
                  Login with <i className="fa fa-google	"></i>
                </button>
                <div className="float-right signup_btn">
                  Forgot your password?
                </div>
                <div className="float-left signup_btn">Sign Up</div>
              </div>
            </div>
            <div className="col-md-6 login__container__right">
              <div className="info-c">
                <div className="info_c__content">APP NAME</div>
                <div className="info_c__sub-content">App info here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebase(SignUp);
