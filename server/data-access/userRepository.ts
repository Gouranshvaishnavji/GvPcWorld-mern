export default function makeUserRepository(UserModel: any) {
  return {
    findByEmail: async (email: string) => {
      return await UserModel.findOne({ email });
    },
    create: async (userInfo: any) => {
      const newUser = new UserModel(userInfo);
      return await newUser.save();
    },
    findById: async (id: string) => {
      return await UserModel.findById(id).select('-password');
    },
  };
}