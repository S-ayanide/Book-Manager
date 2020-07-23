import React from "react";
import BookList from "./components/BookList/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";

// Apollo Client Setup
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<BookList />
			</div>
		</ApolloProvider>
	);
}

export default App;
