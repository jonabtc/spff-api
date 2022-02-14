import { Model, DataTypes } from "sequelize";

interface VehicleAttributes {
  id: number | undefined;
  capacity: string;
  creationDate: Date;
  driverId: number;
  model: string;
  plate: string;
  type: string;
}

export default class Vehicle extends Model<VehicleAttributes> {
  public id!: number;
  public capacity!: string;
  public creationDate!: Date;
  public driverId!: number;
  public model!: string;
  public plate!: string;
  public type!: string;

  public static initialize(sequelize: any) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        capacity: {
          type: DataTypes.STRING,
          allowNull: false
        },
        creationDate: {
          type: DataTypes.DATE,
          allowNull: false,
          field: "creation_date"
        },
        driverId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: "driver_id",
          references: {
            model: "Driver",
            key: "id"
          }
        },
        model: {
          type: DataTypes.STRING,
          allowNull: false
        },
        plate: {
          type: DataTypes.STRING,
          allowNull: false
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: "Vehicle",
        tableName: "vehicle",
        timestamps: false
      }
    );
  }
}
