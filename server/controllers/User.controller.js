import UserModel from "../models/User.model.js";

//CREATING USERS

const CreateUser = async (req, res) => {
  try {
    const userData = new UserModel(req.body);

    if (!userData) {
      return res.status(400).json({ message: "Please fill all the fields." });
    }

    const savedData = await userData.save();
    res.status(200).json(savedData);
  } catch (error) {
    console.log("ERROR : ", error);
  }
};

//GETTING ALL USERS
const GetUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    if (!users) {
      return res.status(404).json({ message: "NO USER FOUND..." });
    }

    res.status(200).json({ users });
  } catch (error) {
    console.log("ERROR : ", error);
  }
};

//GETTING A USER BY ID
const GetUserById = async (req, res) => {
  try {
    const userID = req.params.id;
    const user = await UserModel.findById(userID);

    if (!user) {
      return res.status(404).json({ message: "NO USER FOUND..." });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.log("ERROR : ", error);
  }
};

//EDITING USER DETAILS BY TAKING IN THE ID
const EditUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const user = await UserModel.findById(userID);

    if (!user) {
      return res.status(404).json({ message: "NO USER FOUND..." });
    }

    const updatedData = await UserModel.findByIdAndUpdate(userID, req.body, {
      new: true,
    });

    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
  }
};

//DELETE USER BY ID
const DeleteUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const user = await UserModel.findById(userID);

    if (!user) {
      res.status(404).json({ message: "NO USER FOUND..." });
    }

    await UserModel.findByIdAndDelete(userID);

    res.status(200).json({ message: "USER DELETED SUCCESSFULLY..." });
  } catch (error) {
    console.log("ERROR : ", error);
  }
};

export { CreateUser, GetUsers, GetUserById, EditUser, DeleteUser };
