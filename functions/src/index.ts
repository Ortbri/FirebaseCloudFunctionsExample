/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


import * as logger from "firebase-functions/logger";
import {onRequest} from "firebase-functions/v2/https";

import {testing} from "./test";
import {testThisHere} from "./testV2";
import {testThree} from "./textV3";
import {testFolder, testFolder2} from "./stripe/testFolder";


export {testing};
export {testThisHere};
export {testThree};


exports.groupA = {
  testing,
  testThisHere,
};

exports.groupB = {
  testFolder,
  testFolder2,
};

export const helloWorld2 = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
