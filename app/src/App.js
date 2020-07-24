import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//Components
import BookList from "./components/BookList/BookList";
import AddBooks from "./components/AddBook/AddBook";

// Apollo Client Setup
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div>
				<p id="reading-list">Reading List</p>
				<BookList />
				<AddBooks />
			</div>
		</ApolloProvider>
	);
}

export default App;
