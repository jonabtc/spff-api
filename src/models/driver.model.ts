import { Model, DataTypes, Sequelize } from "sequelize";
import Vehicle from "./vehicle.model";

interface DriverAttributes {
  id: number | undefined;
  companyId: number;
  city: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl: string;
  status: string;
  creationDate: Date;
  vehicles?: Vehicle[] | undefined;
}

export default class Driver extends Model<DriverAttributes> {
  public id!: number;
  public companyId!: number;
  public city!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public phone!: string;
  public avatarUrl!: string;
  public status!: string;
  public creationDate!: Date;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        companyId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: "company_id",
          references: {
            model: "Company",
            key: "id"
          }
        },
        city: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "City",
            key: "id"
          }
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "first_name"
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "last_name"
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false
        },
        avatarUrl: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "avatar_url"
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false
        },
        creationDate: {
          type: DataTypes.DATE,
          allowNull: false,
          field: "creation_date"
        }
      },
      {
        sequelize,
        modelName: "Driver",
        tableName: "driver",
        timestamps: false
      }
    );
  }
}
