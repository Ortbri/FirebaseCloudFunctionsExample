import * as functions from "firebase-functions";
import * as logger from "firebase-functions/logger";

export const testThisHere = functions.https.onRequest(async (req, res) => {
  logger.info("Hello logs!", {structuredData: true});
  res.send("Hello from Firebase!");
});
