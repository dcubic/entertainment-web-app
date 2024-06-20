import { Link } from "react-router-dom";
import styles from "./Authentication.module.css";
import LogoIcon from "../../../assets/icons/logo.svg?react";
import { ChangeEvent, FormEvent, useState } from "react";
import EmailValidator from "email-validator";
import { EmailState, InputIdentifier } from "./authUtils";

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

    if (identifier === InputIdentifier.EmailAddress) {
      setEmailState(EmailState.Valid);
    } else if (identifier === InputIdentifier.Password) {
      setIsEmptyPasswordError(false);
    }
  }

  const credentialsErrorMessage = () => {
    if (emailState === EmailState.Invalid) {
      return "Enter a valid email";
    } else {
      return ""; // TODO this will handle credentials as well
    }
  };

  const emptyErrorMessage = (identifier: InputIdentifier) => {
    if (identifier === InputIdentifier.EmailAddress) {
      if (emailState === EmailState.Empty) return "Can't be empty";
      return "";
    } else if (identifier === InputIdentifier.Password) {
      if (isEmptyPasswordError) return "Can't be empty";
      return "";
    } else {
      return ""
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

    // TODO actually log in
  }

  return (
    <div className={styles.pageContainer}>
      <LogoIcon className={styles.logo} />
      <form className={styles.form} onSubmit={handleLogin}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.inputsContainer}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder={'Email address'}
              value={inputText.emailAddress}
              onChange={(event) =>
                updateInput(event, InputIdentifier.EmailAddress)
              }
            />
            <p className={styles.inputErrorText}>{credentialsErrorMessage()}</p>
            <p className={styles.emptyErrorText}>
              {emptyErrorMessage(InputIdentifier.EmailAddress)}
            </p>
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder={InputIdentifier.Password}
              value={inputText.password}
              onChange={(event) =>
                updateInput(event, InputIdentifier.Password)
              }
            />
            <p className={styles.emptyErrorText}>
              {emptyErrorMessage(InputIdentifier.Password)}
            </p>
          </div>
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
