import * as functions from "firebase-functions";
import * as logger from "firebase-functions/logger";
import {onRequest} from "firebase-functions/v2/https";

export const testFolder = functions.https.onRequest(async (req, res) => {
  logger.info("Hello logs!", {structuredData: true});
  res.send("Hello from Firebase!");
});

export const testFolder2 = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
