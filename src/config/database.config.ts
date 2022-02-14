import { Sequelize } from "sequelize";

export default class Database {
  private static sequelize: Sequelize;

  public static async connect(): Promise<Sequelize> {
    if (Database.sequelize) {
      return Database.sequelize;
    }

    Database.sequelize = new Sequelize({
      dialect: "mysql",
      database: process.env.DB_NAME || "",
      host: process.env.DB_HOST || "",
      password: process.env.DB_PASSWORD || "",
      username: process.env.DB_USER || "",
      logging: console.log
    });

    await this.authenticate();
    
    return Database.sequelize;
  }
  
  static async authenticate(): Promise<void> {
    try {
      await Database.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }

  }

  public static async disconnect(): Promise<void> {
    if (Database.sequelize) {
      await Database.sequelize.close();
    }
  }
  
  public static getInstance(): Sequelize {
    return Database.sequelize;
  }
}
