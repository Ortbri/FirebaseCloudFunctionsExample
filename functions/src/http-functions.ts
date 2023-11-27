// db must be imported like this
// import {db} from "./db";
// // you can now import everything from index.
// import {https} from "./index";
// // or (both work)
// // import { https } from 'firebase-functions';

// export const newComment = https.onRequest(createComment);

// export async function createComment(req: any, res: any) {
//   db.ref("comments").push(req.body.comment);
//   res.send(req.body.comment);
// }
