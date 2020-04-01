import { Request, Response } from "express";
import Router from "express-promise-router";
import { v4 as uuidV4 } from "uuid";
import { request } from "http";

const router = Router();

router.get("/", async (request: Request, response: Response) => {
  response
    .status(200)
    .json({
      id: uuidV4(),
      status: 200,
      message: "All rooms",
      data: [],
    });
});

router.get("/:id", async (request: Request, response: Response) => {
  response
    .status(200)
    .json({
      id: uuidV4(),
      status: 200,
      message: `Room ${request.params.id}`,
      data: [],
    });
});

export const RoomController = router;
