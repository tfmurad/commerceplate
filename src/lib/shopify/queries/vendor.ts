export const getVendorsQuery = /* GraphQL */ `
  query getVendors {
		products(first: 250) {
			edges {
				node {
					vendor
				}
			}
		}
  }
`;
