const express = require("express");
const cors = require("cors");

const getEventsRoute = require("./routes/getEventsRoute");
const getResidentsRoute = require("./routes/getResidentsRoute");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.use(getEventsRoute);
app.use(getResidentsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
