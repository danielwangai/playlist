import { gql } from "apollo-boost"

export const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

export const getBooksQuery = gql`
{
    books{
        name
        id
        genre
        author{
            id
            name
            age
        }
    }
}
`

/**
 * get variables and pass them into mutations
 * mutation variables - define data types e.g. string e.t.c
 * ! sign defines that variable cannot be null
 */
export const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: String!) {
        addBook (name: $name, genre: $genre, authorId: $authorId) {
            id
            name
            genre
        }
    }
`
