import { Request, RequestHandler, Response } from "express";
import Driver from "../models/driver.model";
import Database from "../config/database.config";

export default class DriverController {
  public constructor() {
    Database.connect();
    Driver.initialize(Database.getInstance());
  }

  public driverExists = async (driverId: string) => {
    try {
      if (!driverId) {
        return false;
      }

      const driver = await Driver.findOne({
        where: {
          id: driverId
        }
      });

      return !!driver;
    } catch (error) {
      return false;
    }
  };

  public getDriversByDriverId: RequestHandler = async (req: Request, res: Response) => {
    try {
      const { driverId } = req.params;

      if (!driverId) {
        throw new Error("driverId is required");
      }
      const driver = await Driver.findOne({
        where: {
          id: `${driverId}`
        }
      });

      return res.status(200).send(driver);
    } catch (error) {
      return res.status(400).send({ message: `The request body is not valid: ${error}` });
    }
  };

  public getAllDrivers: RequestHandler = async (req: Request, res: Response) => {
    try {
      const drivers = await Driver.findAll();
      return res.status(200).send(drivers);
    } catch (error) {
      return res.status(400).send({ message: `The request body is not valid: ${error}` });
    }
  };
}
