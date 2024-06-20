import { Link } from "react-router-dom";
import styles from "./Authentication.module.css";
import LogoIcon from "../../../assets/icons/logo.svg?react";
import { ChangeEvent, FormEvent, useState } from "react";
import EmailValidator from "email-validator";

enum InputIdentifier {
  EmailAddress = "emailAddress",
  Password = "password",
}

enum EmailState {
  Empty,
  Invalid,
  Valid,
}

function LoginPage() {
  const [inputText, setInputText] = useState({
    emailAddress: "",
    password: "",
  });
  const [emailState, setEmailState] = useState(EmailState.Valid);
  const [isEmptyPasswordError, setIsEmptyPasswordError] = useState(false);

  function updateInput(
    event: ChangeEvent<HTMLInputElement>,
    identifier: InputIdentifier
  ) {
    setInputText((previousState) => ({
      ...previousState,
      [identifier]: event.target.value,
    }));
  }

  const emailErrorMessage = () => {
    if (emailState === EmailState.Empty) {
      return "Can't be empty";
    } else if (emailState === EmailState.Invalid) {
      return "Enter a valid email";
    } else {
      return "";
    }
  };

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (inputText.emailAddress === "") {
      setEmailState(EmailState.Empty);
    } else if (!EmailValidator.validate(inputText.emailAddress)) {
      setEmailState(EmailState.Invalid);
    } else {
      setEmailState(EmailState.Valid);
    }

    if (inputText.password === "") {
      setIsEmptyPasswordError(true);
    } else {
      setIsEmptyPasswordError(false);
    }

    if (
      inputText.emailAddress === "" ||
      !EmailValidator.validate(inputText.emailAddress) ||
      inputText.password === ""
    )
      return;
  }

  return (
    <div className={styles.pageContainer}>
      <LogoIcon className={styles.logo} />
      <form className={styles.form} onSubmit={handleLogin}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.inputsContainer}>
          {/* <p className={styles.credentialErrorText}>Incorrect Credentials</p> */}
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder={InputIdentifier.EmailAddress}
              value={inputText.emailAddress}
              onChange={(event) =>
                updateInput(event, InputIdentifier.EmailAddress)
              }
            />
            <p className={styles.inputErrorText}>{emailErrorMessage()}</p>
          </div>

          <input
            className={styles.input}
            placeholder={InputIdentifier.Password}
            value={inputText.password}
            onChange={(event) => updateInput(event, InputIdentifier.Password)}
          />
        </div>
        <div className={styles.clickablesContainer}>
          <button className={styles.button}>Login to your account</button>
          <div className={styles.modeSwapContainer}>
            <p className={styles.text}>Don't have an account?</p>
            <Link to="/signup" className={styles.linkText}>
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
