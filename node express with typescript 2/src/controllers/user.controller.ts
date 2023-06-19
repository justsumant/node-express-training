/* for session routes*/
import { NextFunction, Request, Response } from "express";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        id: 1,
        email: "userEmail",
        fullname: "userFullname",
      },
    });
  } catch (e) {
    next(e);
  }
};

/* for error handling */
// import { NextFunction, Request, Response } from "express";

// export const getUsers = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     // res.status(200).json({
//     //   success: true,
//     //   data: {
//     //     id: 1,
//     //     email: "userEmail",
//     //     fullname: "userFullname",
//     //   },
//     // });
//     throw new Error("Error while fetching user");
//   } catch (e) {
//     next(e);
//   }
// };

/* for userlisting from db (prisma session) */

// import { prismaClient } from "../utils/prisma.util";
// import { Request, Response } from "express";

// export const getUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await prismaClient.user.findMany();
//     res.status(200).json(users);
//   } catch (error: any) {
//     res.status(404).json({ message: error.message });
//   }
// };

// import { NextFunction, Request, Response } from "express";
// import { getHashedPassword } from "../utils/encryption";
// import { prismaClient } from "../utils/prisma.util";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

// export const getUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await prismaClient.user.findMany();
//     res.status(200).json(users);
//   } catch (error: any) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export const addUser = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { fullname, email, password, address } = req.body;

//     const user = await prismaClient.user.findUnique({ where: { email } });
//     if (user) throw new Error("User Already Exists");

//     const newUser = await prismaClient.user.create({
//       data: {
//         fullname,
//         email,
//         password: await getHashedPassword(password),
//         address,
//       },
//     });

//     const { id, email: userEmail, fullname: userFullname } = newUser;
//     if (!newUser) throw new Error("Error while register");

//     return res.status(200).json({
//       success: true,
//       data: {
//         id,
//         email: userEmail,
//         fullname: userFullname,
//       },
//     });
//   } catch (e) {
//     next(e);
//   }
// };

// export const login = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { email, password } = req.body;
//     const user = await prismaClient.user.findUnique({ where: { email } });

//     if (!user) throw new Error("User Not Found");

//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) throw new Error("Invalid Password");

//     const payload = { email: user.email, fullname: user.fullname };
//     const token = jwt.sign(payload, process.env.JWT_SECRET!, {
//       expiresIn: 200000, //TODO change to 1 hour,
//     });

//     return res.status(200).json({
//       success: true,
//       token,
//     });
//   } catch (e) {
//     next(e);
//   }
// };
