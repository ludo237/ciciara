import { Request, Response, NextFunction } from "express";
import Router from "express-promise-router";
import { v4 as uuidV4 } from "uuid";
import { request } from "http";
import mongoose from "mongoose";
import Validator from "validatorjs";
import Room, { IRoom } from "../entities/room.entity";

const router = Router();

router.get("/", async (request: Request, response: Response, next: NextFunction) => {
  Room
    .find()
    .then((rooms: IRoom[]) => {
      response
        .status(200)
        .json({
          id: uuidV4(),
          status: 200,
          message: "All rooms",
          data: rooms,
        });
      next();
    })
    .catch(next);
});

router.post("/", async (request: Request, response: Response, next: NextFunction) => {
  const rules = {
    name: "required|min:3"
  };
  const validation = new Validator(request.body, rules);

  if (validation.fails()) {
    response
      .status(422)
      .json({
        id: uuidV4(),
        status: 422,
        message: "Invalid data",
        errors: validation.errors
      });

    next();
    return;
  }

  new Room({ name: request.body.name })
    .save()
    .then((room: IRoom) => {
      response
        .status(200)
        .json({
          id: uuidV4(),
          status: 200,
          message: "Room created",
          data: room,
        });
      next();
    })
    .catch(next);
});

router.get("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const id = request.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    response
      .status(404)
      .json({
        id: uuidV4(),
        status: 404,
        message: `Room ${id} cannot be found`,
        data: null,
      });

    next();
    return;
  }

  Room
    .findById(id)
    .then((room: IRoom | null) => {
      if (room === null) {
        response
          .status(404)
          .json({
            id: uuidV4(),
            status: 404,
            message: `Room ${id} cannot be found`,
            data: null,
          });

        next();
        return;
      }

      response
        .status(200)
        .json({
          id: uuidV4(),
          status: 200,
          message: `Room ${id}`,
          data: room,
        });
      next();
    })
    .catch(next);
});

export const RoomController = router;
