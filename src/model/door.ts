export default class DoorModel {
  #number: number
  #gifted: boolean
  #selected: boolean
  #opened: boolean

  constructor(number: number, gifted = false, selected = false, opened = false) {
    this.#number = number
    this.#gifted = gifted
    this.#selected = selected
    this.#opened = opened
  }

  get number() {
    return this.#number
  }
  get gifted() {
    return this.#gifted
  }
  get selected() {
    return this.#selected
  }
  get opened() {
    return this.#opened
  }

  deselect() {
    const selected = false
    return new DoorModel(this.number, this.gifted, selected, this.opened)
  }

  alterSelection() {
    const selected = !this.selected
    return new DoorModel(this.number, this.gifted, selected, this.opened)
  }

  open() {
    const opened = true
    return new DoorModel(this.number, this.gifted, this.selected, opened)
  }
}
