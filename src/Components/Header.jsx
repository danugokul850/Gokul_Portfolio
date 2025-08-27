import styles from "../Styles/header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.heading}>
        <h1 className={styles.name}>Gokul S.H Danu</h1>
        <div className={styles.but}>
          <button className={styles.button}>Home</button>
          <button className={styles.button}>Education</button>
          <button className={styles.button}>Skills</button>
          <button className={styles.button}>Projects</button>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
    </>
  );
}
