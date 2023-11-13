const User = require('../Models/userModel');

const createUser = async(req, res) => {
    try {
        const newUser = await new User(req.body);
        await newUser.save();
        res.status(201).json(User);
      } catch (error) {
        res.status(400).send(error);
      }
  }

const fetchUser = async (req, res) => {
    try {
      const id = req.params.id
      const user = await User.findOne({ user_id: id });
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

const fetchUsers = async (req, res) => {
    try {
      const Users = await User.find();
      res.send(Users);
    } catch (error) {
      res.status(500).send(error);
    }
  }

const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        // const student_before_update = await Student.findById(id);
        // if (!student_before_update) {
        //   return res.status(404).send('Student not found');
        // }
        // res.send(student_before_update);

        await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        const student_after_update = await User.findById(id)

        res.send(student_after_update);

        } catch (error) {
            res.status(500).send(error);
        }
  }

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).send('Student not found');
      }
      res.send('Successfully deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  }

module.exports = {
    createUser,
    fetchUser,
    fetchUsers,
    updateUser,
    deleteUser,
}