import { Kind } from 'graphql/language';
import { GraphQLScalarType } from 'graphql';

function serialize(value: any) {
    try {
        return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
      } catch (e) {
        return null;
      }
}

function parseValue(value: string) {
    return value === null ? null : new Date(value)
}

function parseLiteral(ast: any) {
    return ast.kind === Kind.STRING ? parseValue(ast.value) : null;
}

export default new GraphQLScalarType({
    name: 'ISODate',
    description: 'JavaScript Date object as an ISO timestamp',
    serialize, parseValue, parseLiteral
});