import styles from "../styles/Button.module.css";
const Button = ({ label }) => {
    return <button className={styles.button}>{label}</button>;
};
export default Button;