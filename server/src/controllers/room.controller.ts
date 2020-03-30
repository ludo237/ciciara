import { Request, Response } from "express";
import Router from "express-promise-router";
import { v4 as uuidV4 } from "uuid";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res
    .status(200)
    .json({
      id: uuidV4(),
      status: 200,
      message: "All rooms",
      data: [],
    });
});

export const RoomController = router;
