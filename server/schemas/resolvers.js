const { User, Thought } = require("../models");

const resolvers = {
  Query: {
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },
    // get all users
    users: async () => {
      const data = User.find().select("-__v -password").populate("friends").populate("thoughts");
      return data
    },
    // get a user by username
    user: async (parent, { username }) => {
      const data =User.findOne({ username }).select("-__v -password").populate("friends").populate("thoughts");
      return data
    },
  },
};
        
        
        
      
      
      

module.exports = resolvers;
