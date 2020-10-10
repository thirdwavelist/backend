import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from './schema';

admin.initializeApp();

const app = express();
const server = new ApolloServer({ schema });
server.applyMiddleware({ app, path: "/", cors: true });
exports.graphql = functions.https.onRequest(app);