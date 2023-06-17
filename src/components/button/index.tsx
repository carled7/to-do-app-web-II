import styles from "./button.module.css";

interface Props {
  text: string;
}

const Button = (props: Props) => {
  return (
    <div className={styles.container}>
      <p>{(props.text).toUpperCase()}</p>
    </div>
  );
};

export default Button;
