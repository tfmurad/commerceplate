import { gql, GraphQLClient } from "graphql-request";

const storefrontAccessToken: string | undefined = process.env.STOREFRONTACCESSTOKEN;
const endpoint: string | undefined = process.env.SHOPURL;

if (!storefrontAccessToken || !endpoint) {
	throw new Error("Storefront access token or shop URL not provided in environment variables.");
}

const graphQLClient = new GraphQLClient(endpoint, {
	headers: {
		"X-Shopify-Storefront-Access-Token": storefrontAccessToken,
	},
});

interface Product {
	id: string;
	title: string;
	handle: string;
	priceRange: {
		minVariantPrice: {
			amount: string;
		};
	};
	featuredImage: {
		altText: string;
		url: string;
	};
}

interface ProductResponse {
	products: {
		edges: {
			node: Product;
		}[];
	};
}

export async function getProducts(): Promise<ProductResponse> {
	const getAllProductsQuery = gql`
    {
      products(first: 100) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            featuredImage {
              altText
              url
            }
          }
        }
      }
    }
  `;

	try {
		return await graphQLClient.request<ProductResponse>(getAllProductsQuery);
	} catch (error) {
		throw new Error(error as any);
	}
}
