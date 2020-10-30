import * as admin from "firebase-admin";

const DEFAULT_PAGE_SIZE = 10;

export const Query = {
    cafes: async (_: null, args: { pageSize: number, after: string }) => {
        let ref = admin
            .database()
            .ref("cafes")
            .orderByKey()
            .limitToFirst((args.pageSize === undefined) ? DEFAULT_PAGE_SIZE : args.pageSize);

        if (args.after !== undefined) {
            ref = ref.startAt(args.after)
        }
        return ref
            .once("value")
            .then((snap: { val: () => any; }) => snap.val())
            .then((val: { [x: string]: any; }) => Object.keys(val).map(key => {
                const cafe = val[key];
                cafe["id"] = key;
                return cafe;
            }));
    }
    ,
    roasters: async (_: null, args: { pageSize: number, after: string }) => {
        let ref = admin
            .database()
            .ref("roasters")
            .orderByKey()
            .limitToFirst((args.pageSize === undefined) ? DEFAULT_PAGE_SIZE : args.pageSize);
        if (args.after !== undefined) {
            ref = ref.startAt(args.after)
        }
        return ref
            .once("value")
            .then((snap: { val: () => any; }) => snap.val())
            .then((val: { [x: string]: any; }) => Object.keys(val).map(key => {
                const roaster = val[key];
                roaster["id"] = key;
                return roaster;
            }));
    }
    ,
    cafe: async (_: null, args: { id: string }) => admin
        .database()
        .ref("cafes")
        .child(args.id)
        .once("value")
        .then((snap: { val: () => any; }) => snap.val())
        .then((val: { [x: string]: any; }) => {
            const cafe = val;
            cafe["id"] = args.id;
            return cafe;
        })
    ,
    roaster: async (_: null, args: { id: string }) => admin
        .database()
        .ref("roasters")
        .orderByChild(args.id)
        .limitToLast(1)
        .once("value")
        .then((val: { [x: string]: any; }) => {
            const roaster = val;
            roaster["id"] = args.id;
            return roaster;
        })
}