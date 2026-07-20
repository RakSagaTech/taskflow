import jwt from "jsonwebtoken";


const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "2h",
    }
  );

  return token;
};


export default generateToken