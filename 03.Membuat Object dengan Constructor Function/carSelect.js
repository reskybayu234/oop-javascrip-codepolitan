function Car(merk, speed, elevationRight, cc){
    this.merk = merk;
    this.speed = speed;
    this.elevationRight = elevationRight;
    this.elevationLeft = elevationLeft;
}

Car.prototype.turnLeft = function(left){
    let { merk, speed, elevationRight, elevationLeft} = this;
    return {
        merk,
        speed,
        elevationLeft : elevationLeft + left,
        elevationRight
    }
}

Car.prototype.turnRight = function(right){
    let { merk, speed, elevationRight, elevationLeft} = this;
    return {
        merk,
        speed,
        elevationLeft,
        elevationRight : elevationRight + right
    }
}

