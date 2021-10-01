import Card from "../components/Card";
import styles from "../styles/Home.module.css"
import Link from "next/link";
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Home() {
  const [qntDoors, setQntDoors] = useState(3)
  const [isGifted, setIsGifted] = useState(1)
  
  return (
    <div className={styles.home}>
      <div>
        <Card bgColor="#c0392c"><h1>Doors Game</h1></Card>
        <Card>
          <NumberInput text="Doors?" value={qntDoors} onChange={newQnt => setQntDoors(newQnt)}/>
        </Card>
      </div>
      <div>
        <Card > <NumberInput text="Gift?" value={isGifted} onChange={newGift => setIsGifted(newGift)}/> </Card>
        <Card bgColor="#555555" >
          <Link href={`/game/${qntDoors}/${isGifted}`} passHref>
            <h2 className={styles.link}>
              Start
            </h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
