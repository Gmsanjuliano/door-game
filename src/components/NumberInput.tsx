import styles from "../styles/NumberInput.module.css"

interface NumberInputProps {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function NumberInput(props: NumberInputProps) {
  const less = () => props.onChange(props.value - 1)
  const more = () => props.onChange(props.value + 1)

  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={less}>-</button>
        <button className={styles.btn} onClick={more}>+</button>
      </div>
    </div>
  )
}