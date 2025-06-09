import React from "react";
import styles from "./TopNavBar.module.css";

function TopNavBar() {
  return (
    <div className={styles.topNavBar}>
      {/* Builder.io logo on the left */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>B</div>
        <span className={styles.logoText}>Builder.io</span>
      </div>

      {/* Right side controls */}
      <div className={styles.navControls}>
        <button className={styles.navButton} disabled>
          <span className={styles.buttonIcon}>↶</span>
          <span className={styles.buttonText}>Undo</span>
        </button>

        <button className={styles.navButton} disabled>
          <span className={styles.buttonIcon}>↷</span>
          <span className={styles.buttonText}>Redo</span>
        </button>

        <button className={styles.navButton}>
          <span className={styles.buttonIcon}>⟨/⟩</span>
          <span className={styles.buttonText}>Get code</span>
        </button>

        <button className={styles.navButton}>
          <span className={styles.buttonIcon}>↗</span>
          <span className={styles.buttonText}>Share</span>
        </button>

        <button className={styles.saveButton}>
          <span className={styles.buttonText}>Save</span>
        </button>
      </div>
    </div>
  );
}

export default TopNavBar;
