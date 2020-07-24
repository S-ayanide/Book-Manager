import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../../queries/queries";

// Component
import BookDetails from "../BookDetails/BookDetails";

const BookList = (props) => {
	const [selected, setSelectedBook] = useState(undefined);

	const displayBooks = (data, loading) => {
		return loading === false ? (
			<div>
				{data.map((book) => {
					return (
						<li key={book.id} onClick={() => setSelectedBook(book.id)}>
							{book.name}
						</li>
					);
				})}
			</div>
		) : (
			<div>Loading...</div>
		);
	};

	return (
		<div>
			<ul id="book-list">
				{displayBooks(props.data.books, props.data.loading)}
			</ul>
			<BookDetails bookId={selected} />
		</div>
	);
};

export default graphql(getBooksQuery)(BookList);
