import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../Common/FormsControls/FormsControls";
import { login, logout } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import styles from "../Common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          validate={[required]}
          name={"email"}
          placeholder={"Email"}
        />
      </div>
      <div>
        <Field
          component={Input}
          validate={[required]}
          name={"password"}
          placeholder={"Password"}
          type={"password"}
        />
      </div>
      <div>
        <Field
          component={Input}
          validate={[required]}
          name={"rememberMe"}
          type={"checkbox"}
        />
        Remember me
      </div>
      {props.error && (
        <div className={styles.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

const LoginRexuxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginRexuxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(
  mapStateToProps,
  { login, logout }
)(Login);
