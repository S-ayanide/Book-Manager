import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import {
	getAuthorsQuery,
	addBookMutation,
	getBooksQuery,
} from "../../queries/queries";

const displayAuthors = (authors, loading) => {
	return loading === true ? (
		<option disabled>Loading Authors</option>
	) : (
		authors.map((author) => {
			return (
				<option key={author.id} value={author.id}>
					{author.name}
				</option>
			);
		})
	);
};

const AddBook = (props) => {
	const [deatils, setDetails] = useState({
		name: "",
		genre: "",
		authorId: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		props.addBookMutation({
			variables: {
				name: deatils.name,
				genre: deatils.genre,
				authorId: deatils.authorId,
			},
			refetchQueries: [
				{
					query: getBooksQuery,
				},
			],
		});
	};

	return (
		<form id="add-book" onSubmit={handleSubmit}>
			<div className="field">
				<label>Book Name: </label>
				<input
					type="text"
					onChange={(e) =>
						setDetails({ ...deatils, name: e.target.value })
					}
				/>
			</div>

			<div className="field">
				<label>Genre: </label>
				<input
					type="text"
					onChange={(e) =>
						setDetails({ ...deatils, genre: e.target.value })
					}
				/>
			</div>

			<div className="field">
				<label>Author: </label>
				<select
					onChange={(e) =>
						setDetails({ ...deatils, authorId: e.target.value })
					}
				>
					<option>Select Author</option>
					{displayAuthors(
						props.getAuthorsQuery.authors,
						props.getAuthorsQuery.loading
					)}
				</select>
			</div>

			<button>+</button>
		</form>
	);
};

export default compose(
	graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
	graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
