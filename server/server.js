const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList
} = require('graphql');
const app = express();
const questions = require('../questions.json');

const QuestionType = new GraphQLObjectType({
    name: 'Question',
    description: 'This represents a single question',
    fields: () => ({
        id: { type: GraphQLString },
        type: { type: GraphQLString },
        min: { type: GraphQLInt },
        max: { type: GraphQLInt },
        title: { type: GraphQLString },
        enabled: { type: GraphQLBoolean },
        required: { type: GraphQLBoolean },
    }),
});

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        questions: {
            type: new GraphQLList(QuestionType),
            description: 'List of all questions',
            resolve: () => questions
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(5000, () => console.log('Server is running...'));