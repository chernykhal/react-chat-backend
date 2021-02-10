import { Request, Response } from "express";
import { UserModel } from "../schemas/index";

class UserController {
  // USER SHOW METHOD
  show(req: Request, res: Response) {
    const id: string = req.params.id;
    UserModel.findById(id, (err: any, user: any) => {
      if (err) {
        return res.status(404).json({ message: "Not Found" });
      }
      res.json(user);
    });
  }

  // USER CREATE METHOD
  create(req: Request, res: Response) {
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
    };
    const user = new UserModel(postData);
    user
      .save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch((reason) => {
        res.json(reason);
      });
  }

  delete(req: Request, res: Response) {
    const id: string = req.params.id;
    UserModel.findOneAndDelete({ _id: id })
      .then((user) => {
        if (user) {
          res.json({ message: `User ${user.fullname} deleted` });
        }
      })
      .catch(() => {
        res.json({ message: "User not found" });
      });
  }

  getAuthUser() {
    // TODO: CREATE METHOD FOR GETTING AUTH USER
  }
}
export default UserController;
