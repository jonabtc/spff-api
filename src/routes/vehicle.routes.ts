import { Router } from "express";
import VehicleController from "../controllers/vehicle.controller";

const router = Router();
const vehicleController = new VehicleController();

router.get("/vehicles", vehicleController.getVehiclesByDriverId);
router.post("/vehicles", vehicleController.createVehicle);
router.put("/vehicles/:id", vehicleController.updateVehicle);
router.delete("/vehicles/:id", vehicleController.deleteVehicle);

export default router;
