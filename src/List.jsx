import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "./aws-exports";
import { listTodos } from "./graphql/queries";

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: awsconfig.aws_appsync_apiKey,
  },
});

export default function List() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    client.query({ query: gql(listTodos) }).then(({ data: { listTodos } }) => {
      setTodos(listTodos.items);
    });
  });

  return (
    <div>
      <header>
        <h2>List of Todos</h2>
      </header>
      <div className="list-of-todos">
        {todos.length > 0 && todos.map((todo) => <li key={todo.id}>{todo.name}</li>)}
      </div>
    </div>
  );
}
