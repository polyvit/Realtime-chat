import { createSchema, createPubSub } from "graphql-yoga";

const messages = [];
// const pubSub = createPubSub();
// const subscribers = [];
// const onMessagesUpdates = (fn) => subscribers.push(fn);

export const schema = createSchema({
  typeDefs: `
    type Message {
      id: ID!
      user: String!
      content: String!
    }
    type Query {
      messages: [Message!]
    }
    type Mutation {
      postMessage(user: String!, content: String!): ID!
    }
  `,

  resolvers: {
    Query: {
      messages: () => messages,
    },
    Mutation: {
      postMessage: (parent, { user, content }) => {
        const id = messages.length;
        messages.push({
          id,
          user,
          content,
        });
        // subscribers.forEach(fn => fn());
        return id;
      },
    },
  },
});
