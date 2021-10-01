import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";
import styles from "../../../styles/Game.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Game() {
  const router = useRouter()

  const [ok, setOk] = useState(false)
  const [doors, setDoors] = useState([])

  useEffect(() => {
    const doors = +router.query.doors
    const gifted = +router.query.gifted
    const okDoors = doors >= 3 && doors <= 100
    const okGift = gifted >= 1 && gifted <= doors

    setOk(okDoors && okGift)
  }, [doors, router.query.doors, router.query.gifted])

  useEffect(() => {
    const doors = +router.query.doors
    const gifted = +router.query.gifted
    setDoors(createDoors(doors, gifted))
  }, [router?.query])

  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.number} value={door} 
      onChange={ newDoor => setDoors(updateDoors(doors, newDoor)) } />
    })
  }
  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {ok ? renderDoors() : <div>
          <h1>(404 NOT FOUND) - Press Restart Game</h1>
          <h2>- Check the value of doors or gift -</h2>
        </div> }
      </div>
      <div>
        <Link href="/" passHref>
          <button className={styles.btn}>Restart Game</button>
        </Link>
      </div>
    </div>
  )
}