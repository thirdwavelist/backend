import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from './typedefs';
import resolvers from './resolvers';
import cors from 'cors';

admin.initializeApp();

const app = express();
app.use(cors());
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/", cors: true });
exports.graphql = functions.https.onRequest(app);