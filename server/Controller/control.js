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

exports.updateControl = async (req, res) => {
  const uid = req.params.uid;
  const updateId = await userCollection.findById(uid);
  res.json(updateId);
};

exports.updatedNewControl = async (req, res) => {
  const upId = req.params.nid;
  const upUser = req.body.updateUser;
  const upPass = parseInt(req.body.updatePass);

  await userCollection.findByIdAndUpdate(upId, {
    userName: upUser,
    password: upPass
  });

  res.send({ messege: "Successfully update..." });
};
