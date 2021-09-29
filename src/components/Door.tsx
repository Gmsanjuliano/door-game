import styles from "../styles/Door.module.css";
import DoorModel from "../model/door";

interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
  const door = props.value
  const selected = door.selected && !door.opened ? styles.selected : "";

  const alterSelection = e => props.onChange(door.alterSelection())
  const open = e => {
    e.stopPropagation()
    props.onChange(door.open())
  }
  
  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.numero}>{door.number}</div>
        <div className={styles.knob} onClick={open}></div>
      </div>
    )
  }
  
  return (
    <div className={styles.area} onClick={alterSelection}>
      <div className={`${styles.frame} ${selected}`}>
        {door.opened ? false : renderDoor()}
      </div>
      <div className={styles.ground}></div>
    </div>
  );
}
