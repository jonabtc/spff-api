import { Router } from "express";
import DriverController from "../controllers/driver.controller";

const router = Router();
const driverController = new DriverController();

router.get("/drivers/:driverId", driverController.getDriversByDriverId);
router.get("/drivers", driverController.getAllDrivers);

export default router;
