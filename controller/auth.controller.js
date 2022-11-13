const { request, response } = require("express");
const { AdminModel } = require("../models/admin.model");

const createAdmin = async (req = request, res = response) => {
  const { username, password } = req.body;
  if (!username && !password) {
    res.status(400).send("Username and password are required");
  }

  try {
    const newAdmin = new AdminModel({
      username,
      password,
    });
    await newAdmin.save();
    res.json({
      status: "Ok",
      msg: "Admin created successfully",
    });
  } catch (error) {
    res.send(error);
  }
};

const login = async (req = request, res = response) => {
  
  const { username, password } = req.body;
  if (!username && !password) {
    return res.json({
      status: false,
      msg: "Username and passwords required",
    });
  }

  const user = await AdminModel.findOne({
    username,
    password,
  });

  if (!user) {
    res.json({
      status: false,
      msg: "Username or passwords incorrect",
    });
  }else{
    res.json({
      status: true,
      msg: "Authentication successfully",
      username: user.username,
    });
  }


  res.end();
};

module.exports = {
  createAdmin,
  login,
};
