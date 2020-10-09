import * as admin from "firebase-admin";

export default {
    Query: {
        cafes: () => admin
            .database()
            .ref("cafes")
            .once("value")
            .then((snap: { val: () => any; }) => snap.val())
            .then((val: { [x: string]: any; }) => Object.keys(val).map(key => val[key]))
        ,
        roasters: () =>
            admin
                .database()
                .ref("roasters")
                .once("value")
                .then((snap: { val: () => any; }) => snap.val())
                .then((val: { [x: string]: any; }) => Object.keys(val).map(key => val[key]))
    }
};