'use strict';

let userService = {};

/** 
 * function to register a new  user
 */
userService.registerUser = async (payload) => {
  // encrypt user's password and store it in the database.
  payload.password = utils.hashPassword(payload.password);
  return await userModel(payload).save();
};

/**
 * function to update user.
 */
userService.updateUser = async (criteria, dataToUpdate, projection = {}) => {
  let userData = await userService.getUser(criteria);
  let updatedUserData = await userModel.findOneAndUpdate(criteria, dataToUpdate, { new: true, projection: projection }).lean();
  return updatedUserData;
};

/**
 * function to fetch user from the system based on criteria.
 */
userService.getUser = async (criteria, projection, options = {}) => {
  return await userModel.findOne(criteria, projection, options)
};


/**
 * function to create new user into the system.
 */
userService.createUser = async (payload) => {
  // fetch initial rank type and rank value for new user. 
  let defaultRankType = await rankTypeModel.findOne({ isDefault: true, isDeleted: false });
  payload.rankType = defaultRankType._id;
  payload.rankValue = defaultRankType.maxRank;
  return await userModel(payload).save();
};

/**
 * function to get user's current rank.
 */
userService.getUserRank = async (userId) => {
  let user = await userModel.findOne({ _id: userId }).lean();
};

/**
 * function to fetch count of users from the system based on criteria.
 */
userService.getCountOfUsers = async (criteria) => {
  return await userModel.countDocuments(criteria);
};

/**
 * function to fetch users from the system based on criteria.
 */
userService.getUsers = async (criteria, projection, options) => {
  return await userModel.find(criteria, projection, options);
};

userService.addUsers = async (userIds, teacher_email) => {
  return await userModel.aggregate([
    { $match: { _id: { $in: userIds } } },
    {$set: {assign_teacher: {$concatArrays: ['$assign_teacher', [teacher_email]]}}},
    { $project: { assign_teacher: { $setIntersection: [ "$assign_teacher", "$assign_teacher" ] }}},
    { $merge: { into: 'users' } }
  ])
};


module.exports = userService;