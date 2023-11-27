
/** working on file strucutre for firebase cloud functions */

// https://stackoverflow.com/questions/43486278/how-do-i-structure-cloud-functions-for-firebase-to-deploy-multiple-functions-fro?rq=2
import * as functions from "firebase-functions";
import * as logger from "firebase-functions/logger";

export const testing = functions.https.onRequest(async (req, res) => {
  logger.info("Hello logs!", {structuredData: true});
  res.send("Hello from Firebase!");
});


