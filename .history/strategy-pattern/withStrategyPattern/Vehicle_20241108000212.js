class Vehicle {
    static driveObject = new DriveObject()

    Vehicle(driveObject) {
        this.driveObject = driveObject
    }
    drive() {
        this.driveObject.drive()
    }
}