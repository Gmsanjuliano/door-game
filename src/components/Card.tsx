import styles from "../styles/Card.module.css"

interface CardProps {
  children?: any
  bgColor?: string
}

export default function Card(props: CardProps) {
  return(
    <div className={styles.card} style={{
      backgroundColor: props.bgColor ?? "#fff"
    }}>
      {props.children}
    </div>
  )
}