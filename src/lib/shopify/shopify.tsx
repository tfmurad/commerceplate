import { gql, GraphQLClient } from "graphql-request";

// Define the types for the environment variables
type StorefrontAccessToken = string | undefined;
type Endpoint = string | undefined;

// Get the Shopify Storefront Access Token and Shop URL from environment variables
const storefrontAccessToken: StorefrontAccessToken = process.env.STOREFRONTACCESSTOKEN;
const endpoint: Endpoint = process.env.SHOPURL;

if (!storefrontAccessToken || !endpoint) {
  throw new Error("Storefront access token or shop URL not provided in environment variables.");
}

// Create a GraphQLClient with the appropriate headers
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
  },
});

// Define the types for Product and ProductResponse
interface Product {
  id: string;
  title: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  variants: {
    edges: {
      node: {
        compareAtPrice: {
          amount: string;
        };
      }[];
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

interface LatestProductResponse {
  id: string;
  title: string;
  collection: ProductResponse;
}

interface Category {
  title: string;
  handle: string;
  image: {
    url: string;
    altText: string;
  };
  products: {
    nodes: {
      title: string;
    }[];
  };
}

interface CategoriesResponse {
  collections: {
    edges: {
      node: Category;
    }[];
  };
}

export async function getProducts(): Promise<ProductResponse> {
  const getAllProductsQuery = gql`
    {
      products(first: 25) {
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
            variants(first: 25) {
              edges {
                node {
                  compareAtPrice {
                    amount
                  }
                }
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

export async function getLatestProducts(): Promise<LatestProductResponse> {
  const getLatestProductsQuery = gql`
    {
      collection(handle: "latest-products") {
        id
        title
        products(first: 10) {
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
              variants(first: 10) {
                edges {
                  node {
                    compareAtPrice {
                      amount
                    }
                  }
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
    }
  `;

  try {
    return await graphQLClient.request<LatestProductResponse>(getLatestProductsQuery);
  } catch (error) {
    throw new Error(error as any);
  }
}

export async function getCollections(): Promise<CategoriesResponse> {
  const getCollectionsQuery = gql`
    {
      collections(first: 10) {
        edges {
          node {
            title
            handle
            image {
              url
              altText
            }
            products(first: 20) {
              nodes {
                title
              }
            }
          }
        }
      }
    }
  `;

  try {
    return await graphQLClient.request<CategoriesResponse>(getCollectionsQuery);
  } catch (error) {
    throw new Error(error as any);
  }
}
