const admin = require('firebase-admin');
const { User } = require('../../db');

const createUserController = async (name, email, password, role) => {
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: name, 
    });

    
    const newUser = await User.create({
      name,
      email,
      role,
      firebaseUid: userRecord.uid,
    });

    return newUser;
  } catch (error) {
    console.error('Error registering a user:', error);
    throw error;
  }
};

module.exports = createUserController;

