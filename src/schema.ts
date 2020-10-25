import {makeExecutableSchema} from 'graphql-tools';
import { gql } from "apollo-server-express";
import { Query } from './resolvers/Query';
import ISODate from './scalars/ISODate';

const typeDefs = gql`
  scalar ISODate

  type Query {
    cafes(limit: Int): [Cafe!]!
    cafe(id: ID): Cafe
    roasters: [Roaster!]!
    roaster(id: ID): Roaster
  }
  
  type Cafe {
    id: String!
    name: String!
    address: String!
    thumbnailUrl: String
    facebookUrl: String
    instagramUrl: String
    homepageUrl: String
    hasEspresso: Boolean!
    hasAeropress: Boolean!
    hasPourover: Boolean!
    hasColdbrew: Boolean!
    hasFullImmersion: Boolean!
    espressoMachine: String
    grinder: String
    immersiveGear: String
    pouroverGear: String
    roasters: String
    hasLightRoast: Boolean!
    hasMediumRoast: Boolean!
    hasDarkRoast: Boolean!
    hasSingleOrigin: Boolean!
    hasBlend: Boolean!
    googlePlaceId: String!
    instagramPlaceId: String!
    lat: String!
    lng: String!
    created: ISODate!
    lastUpdated: ISODate!
  }
  
  type Roaster {
    id: String!
    name: String!
    address: String!
    instagramId: String
    googlePlaceId: String
  }
`;

const resolvers = { Query, ISODate };

export default makeExecutableSchema( { typeDefs, resolvers } );