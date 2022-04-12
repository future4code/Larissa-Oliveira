import express from "express";
import HolderController from "../controller/HolderController/HolderController";
import PayableController from "../controller/PayableController/PayableController";
import CardController from "../controller/CardController/CardController";

const holderController = new HolderController()
const cardController = new CardController()
const payableController = new PayableController()

export const holderRouter = express.Router();
export const cardRouter = express.Router();
export const payableRouter = express.Router();

holderRouter.post("/signup", holderController.createHolder)
holderRouter.post("/login", holderController.login)
cardRouter.post("/card", cardController.createCard)
payableRouter.post("/payable", payableController.createPayable)
payableRouter.get("/all-payable", payableController.getAllPayableByUser)