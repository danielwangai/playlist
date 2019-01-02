import React, { Component } from 'react';
import { graphql } from "react-apollo";

import { getBooksQuery } from "../queries/queries"

const displayBooks = (props) => {
    var data = props.data;
    if (data.loading) {
        return (<div>Loading Books...</div>)
    } else {
        return data.books.map(book => {
            return (
                <li key={book.id}>{book.name} by {book.author.name}</li>
            )
        })
    }
}

class Booklist extends Component {
    render() {
        return(
            <div>
                <ul id="book-list">
                    { displayBooks(this.props) }
                </ul>
            </div>
        )
    }
}

export default graphql(getBooksQuery)(Booklist);
