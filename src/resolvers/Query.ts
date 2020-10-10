import * as admin from "firebase-admin";

export const Query = {
    cafes: () => admin
        .database()
        .ref("cafes")
        .once("value")
        .then((snap: { val: () => any; }) => snap.val())
        .then((val: { [x: string]: any; }) => Object.keys(val).map(key => val[key]))
}