let shipsId = 1
const shipAll = []
class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.id = shipsId++
    shipAll.push(this)
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = crew.length<1 ? true : false
    this.phasersCharge = 'uncharged'
    crew.forEach((c) => {
      c.shipId = this.id
      c.currentShip = this
    })
  }
}
