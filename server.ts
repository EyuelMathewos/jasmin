const express = require("express");
const app = express();
const port = 3000;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", async (req: any, res: any) => {
  res.send("Express server is running ...");
});
app.post("/", async (req: any, res: any) => {
  // console.log("request POST:", req);
  const { id, from, to, priority, content } = req.body;
  const message = await prisma.message
    .create({
      data: {
        id,
        from,
        to,
        originConnector: req.body["origin-connector"],
        priority,
        content,
      },
    })
    .then(() => {
      res.send("ACK/Jasmin");
    })
    .catch((error: any) => {
      console.log("Prisma Error: ", error);
      res.send("ACK/Jasmin");
    });
  console.log(req.body);
});

app.post("/dlr", async (req: any, res: any) => {
  console.log("request POST:", req);
  console.log(req.body);
  res.send("ACK/Jasmin");
});

app.listen(port, () => {
  console.log(`express listening on port ${port}`);
});
