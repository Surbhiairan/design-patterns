class SportyVehicle extends Vehicle {
    SportyVehicle() {
        super(new SportDriveStrategy())
    }
}