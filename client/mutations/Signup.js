import gql from 'graphql-tag';

const mutation = gql`
    mutation Signup($email: String, $password: String) {
        signup(email: $email, password: $password) {
            email
        }
    }
`;

export default mutation;