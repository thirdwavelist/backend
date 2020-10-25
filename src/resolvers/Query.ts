import * as admin from "firebase-admin";

export const Query = {
    cafes: ( { limit } ) => admin
        .database()
        .ref("cafes")
        .orderByKey()
        .limitToFirst(limit)
        .once("value")
        .then((snap: { val: () => any; }) => snap.val())
        .then((val: { [x: string]: any; }) => Object.keys(val).map(key => val[key]))
    , 
    roasters: (limit: number) => admin
        .database()
        .ref("roasters")
        .orderByKey()
        .limitToFirst(limit)
        .once("value")
        .then((snap: { val: () => any; }) => snap.val())
        .then((val: { [x: string]: any; }) => Object.keys(val).map(key => val[key]))
    ,
    cafe: (id: string) => admin
        .database()
        .ref("cafes")
        .child(id)
        .once("value")
        .then((snap: { val: () => any; }) => snap.val())
        .then((val: { [x: string]: any; }) => Object.keys(val).map(key => val[key]))
    ,
    roaster: (id: string) => admin
        .database()
        .ref("roasters")
        .orderByChild(id)
        .limitToLast(1)
        .once("value")
        .then((val: { [x: string]: any; }) => Object.keys(val).map(key => val[key]))
}