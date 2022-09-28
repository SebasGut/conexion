export class MYSQLConnection {
    instance = null;
    constructor() {
      this.instance = mysql.createConnection({
        host: "localhost",
        user: "dbuser",
        password: "s3kreee7",
        database: "my_db",
      });
    }
  
    getConnection() {
      if (this.instance) {
        return this.instance;
      }
  
      this.instance = new MYSQLConnection();
      return this.instance;
    }
  }
  