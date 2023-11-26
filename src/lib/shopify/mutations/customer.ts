export const createCustomerMutation = /* GraphQL */ `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        firstName
        lastName
        email
        phone
        acceptsMarketing
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`;

export const getCustomerAccessTokenMutation = /* GraphQL */ `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
      }
      customerUserErrors {
        message
        code
        field
      }
    }
  }
`;

export const getUserDetailsQuery = /* GraphQL */ `
  query getOrders($input: String!) {
    customer(customerAccessToken: $input) {
      id
      firstName
      lastName
      acceptsMarketing
      email
      phone
    }
  }
`;
