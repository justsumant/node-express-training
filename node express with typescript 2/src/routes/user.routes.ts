/* for session router */
import { Router } from "express";
import { getUsers } from "../controllers/user.controller";

const router = Router();
router.get("/", getUsers);

/* testing middle ware*/
// import { Router } from "express";
// import { getUsers } from "../controllers/user.controller";
// import { testMiddleware } from "../middlewares/test.middleware";
// const router = Router();
// router.get("/", testMiddleware, getUsers);

/* for session auth */
// import { Router } from "express";
// import { getUsers, addUser, login } from "../controllers/user.controller";
// import { auth } from "../middlewares/auth.middleware";
// import { getUsers } from "../controllers/user.controller";
// const router = Router();

// router.get("/", (req, res) => {
//   res.send("Hello world!");

// });
// router.get("/", auth, getUsers);
// router.get("/", getUsers);
// router.post("/register", addUser);
// router.post("/login", login);

export default router;
