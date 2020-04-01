import mongoose from "mongoose";

type TInput = {
  db: string;
};

export default ({ db }: TInput) => {

  const connect = () => {
    mongoose
      .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(() => console.info(`Successfully connected to ${db}`))
      .catch(error => {
        console.error(`Error connecting to database: ${db}`, error);
        return process.exit(1);
      });
  };

  connect();

  // Auto retry
  mongoose.connection.on("disconnected", connect);
};
