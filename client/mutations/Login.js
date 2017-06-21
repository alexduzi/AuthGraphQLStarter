import gql from 'graphql-tag';

const mutation = gql`
    mutation Login($email: String, $password: String) {
        login(email: $email, password: $password) {
            email
        }
    }
`;

export default mutation;