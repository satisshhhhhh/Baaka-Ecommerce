import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jay Rathod",
    email: "jay@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Satya Sahoo",
    email: "satya@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Vedant Shirole",
    email: "vedz@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
