import styles from "./index.module.scss";
const RedText = props => {
  return <div className={styles.text}>{props.text}</div>;
};
export default RedText;
