class CrewMember {
  constructor(position) {
    this.position = position
    this.shipId = null
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive() {
    if (this.shipId && this.position==="Pilot") {
      this.currentShip.warpDrive = "engaged!"
    } else {
      return "had no effect"
    }
  }

  setsInvisibility() {
    if (this.shipId && this.position==="Defender") {
      this.currentShip.cloaked = true
    } else {
      return "had no effect"
    }
  }

  chargePhasers() {
    if (this.shipId && this.position==="Gunner") {
      this.currentShip.phasersCharge = "charged!"
    } else {
      return "had no effect"
    }
  }
}
