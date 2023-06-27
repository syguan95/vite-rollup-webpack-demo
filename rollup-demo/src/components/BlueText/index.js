import styles from "./index.module.scss";
const BlueText = props => {
  return <div className={styles.text}>{props.text}</div>;
};
export default BlueText;
