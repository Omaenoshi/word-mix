import React, { useState } from "react";
import styles from "./SignupModal.module.css";

interface SignupModalProps {
  onClose: () => void;
}

function SignupModal({ onClose }: SignupModalProps) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(value.includes("@") && value.includes("."));
  };

  const handleGetStarted = () => {
    if (isValidEmail) {
      console.log("Starting with email:", email);
      onClose();
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.signupModal} onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        {/* Left panel with preview */}
        <div className={styles.modalLeftPanel}>
          <div className={styles.previewContent}>
            <div className={styles.previewHeader}>
              <div className={styles.previewTitle}>Figma to React</div>
              <div className={styles.previewSubtitle}>in seconds</div>
            </div>
            <div className={styles.previewImage}>
              <div className={styles.figmaIcon}>F</div>
              <div className={styles.arrowIcon}>→</div>
              <div className={styles.reactIcon}>⚛</div>
            </div>
            <div className={styles.previewDescription}>
              Convert your Figma designs into clean, production-ready React code
            </div>
          </div>
        </div>

        {/* Right panel with signup form */}
        <div className={styles.modalRightPanel}>
          <div className={styles.signupForm}>
            {/* Logo */}
            <div className={styles.logo}>
              <div className={styles.logoIcon}>B</div>
              <span className={styles.logoText}>Builder.io</span>
            </div>

            {/* Heading */}
            <h1 className={styles.heading}>Create an account</h1>

            {/* Social buttons */}
            <div className={styles.socialButtons}>
              <button
                className={styles.socialButton}
                onClick={() => handleSocialLogin("Google")}
              >
                <span className={styles.socialIcon}>G</span>
                <span>Continue with Google</span>
              </button>

              <button
                className={styles.socialButton}
                onClick={() => handleSocialLogin("GitHub")}
              >
                <span className={styles.socialIcon}>⚡</span>
                <span>Continue with GitHub</span>
              </button>
            </div>

            {/* Divider */}
            <div className={styles.divider}>
              <span className={styles.dividerText}>or</span>
            </div>

            {/* Email form */}
            <div className={styles.emailForm}>
              <input
                type="email"
                placeholder="stephanie@mycompany.com"
                value={email}
                onChange={handleEmailChange}
                className={styles.emailInput}
              />

              <button
                className={`${styles.submitButton} ${!isValidEmail ? styles.submitButtonDisabled : ""}`}
                onClick={handleGetStarted}
                disabled={!isValidEmail}
              >
                Get started
              </button>
            </div>

            {/* Terms */}
            <div className={styles.terms}>
              By signing up, you agree to our{" "}
              <a href="#" className={styles.termsLink}>
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className={styles.termsLink}>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
