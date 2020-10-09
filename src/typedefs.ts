import { gql } from "apollo-server-express";

export default gql`
type Query {
    cafes: [Cafe]
    roasters: [Roaster]
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
  }
  
  type Roaster {
    id: String!
    name: String!
    address: String!
    instagramId: String
    googlePlaceId: String
  }
  
`;