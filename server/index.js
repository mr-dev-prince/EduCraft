import { ConnectDB } from "./Database/db.js";
import { app } from "./app.js";


ConnectDB()
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log("⚙️  Server is running at ", process.env.PORT)
    )
  )
  .catch((err) => {
    console.error("MongoDB connection error", err);
  });
