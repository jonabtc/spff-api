import { Application } from "express";

import vehicleRoutes from "../routes/vehicle.routes";
import driverRoutes from "../routes/driver.routes";

export const loadEndpoints = (app: Application): void => {
  const prefix = "/api/" + app.get("version");

  app.use(prefix, vehicleRoutes);
  app.use(prefix, driverRoutes);
};
