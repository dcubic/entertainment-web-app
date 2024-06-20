import { Link } from "react-router-dom";
import styles from "./Authentication.module.css";
import LogoIcon from "../../../assets/icons/logo.svg?react";
import { ChangeEvent, FormEvent, useState } from "react";
import EmailValidator from "email-validator";
import { EmailState, InputIdentifier } from "./authUtils";

function SignupPage() {
  const [inputText, setInputText] = useState({
    emailAddress: "",
    password: "",
    repeatedPassword: "",
  });
  const [emailState, setEmailState] = useState(EmailState.Valid);
  const [isEmptyPasswordError, setIsEmptyPasswordError] = useState(false);
  const [matchingPasswordError, setMatchingPasswordError] = useState(false);

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

    setMatchingPasswordError(false);
  }

  const inlineErrorMessage = (identifier: InputIdentifier) => {
    if (identifier === InputIdentifier.EmailAddress) {
      if (emailState === EmailState.Empty) return "Can't be empty";
      return "";
    } else if (identifier === InputIdentifier.Password) {
      if (isEmptyPasswordError) return "Can't be empty";
      return "";
    } else {
      return "";
    }
  };

  const validationErrorMessage = () => {
    if (emailState === EmailState.Invalid) {
        return "Enter a valid email";
    } else if (matchingPasswordError) {
        return "Passwords must match";
    } else {
        return "" // TODO this will also handle pre-existing accounts
    }
  }

  function handleSignup(event: FormEvent<HTMLFormElement>) {
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

    if (inputText.repeatedPassword !== inputText.password) {
        setMatchingPasswordError(true);
    } else {
        setMatchingPasswordError(false);
    }

    if (
      inputText.emailAddress === "" ||
      !EmailValidator.validate(inputText.emailAddress) ||
      inputText.password === "" ||
      inputText.password !== inputText.repeatedPassword
    )
      return;

    // TODO
  }

  return (
    <div className={styles.pageContainer}>
      <LogoIcon className={styles.logo} />
      <form className={styles.form} onSubmit={handleSignup}>
        <h1 className={styles.title}>Sign Up</h1>
        <div className={styles.inputsContainer}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder={"Email address"}
              value={inputText.emailAddress}
              onChange={(event) =>
                updateInput(event, InputIdentifier.EmailAddress)
              }
            />
            <p className={styles.inputErrorText}>{validationErrorMessage()}</p>
            <p className={styles.emptyErrorText}>
              {inlineErrorMessage(InputIdentifier.EmailAddress)}
            </p>
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder={InputIdentifier.Password}
              value={inputText.password}
              onChange={(event) => updateInput(event, InputIdentifier.Password)}
            />
            <p className={styles.emptyErrorText}>
              {inlineErrorMessage(InputIdentifier.Password)}
            </p>
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder={"Repeat Password"}
              value={inputText.repeatedPassword}
              onChange={(event) =>
                updateInput(event, InputIdentifier.RepeatedPassword)
              }
              type="password"
            />
            <p className={styles.emptyErrorText}>
              {inlineErrorMessage(InputIdentifier.RepeatedPassword)}
            </p>
          </div>
        </div>
        <div className={styles.clickablesContainer}>
          <button className={styles.button}>Create an account</button>
          <div className={styles.modeSwapContainer}>
            <p className={styles.text}>Already have an account?</p>
            <Link to="/login" className={styles.linkText}>
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
