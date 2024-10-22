const userCollection = require("../Module/user");


exports.homeControl = (req, res) => {
  res.send("Hello MongoDb, Express, ReactJs, NodeJs");
};

exports.userDataControl = async (req, res) => {
  const { user, password } = req.body;
  const record = new userCollection({
    userName: user,
    password: password
  });

  await record.save(record);
  res.send({ message: "Successfully Insert data..." });
};

exports.returnDataControl = async (req, res) => {
  const record = await userCollection.find();
  res.json(record);
};
