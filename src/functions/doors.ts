import DoorModel from "../model/door";

export function createDoors(qnt: number, giftedDoor: number): DoorModel[] {
  return Array.from({length: qnt}, (_,i) => {
    const number = i + 1
    const gifted = number === giftedDoor
    return new DoorModel(number, gifted)
  })
}

export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel) {
  return doors.map(currentDoor => {
    const equalsModified = currentDoor.number === modifiedDoor.number

    if (equalsModified) {
      return modifiedDoor
    } else {
      return modifiedDoor.opened ? currentDoor: currentDoor.deselect()
    }
  })
}