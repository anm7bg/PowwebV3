import { fetchAPI } from "./base";

export async function getProekti() {
  const data = await fetchAPI(
    `query FetchPosts {
      category(id: "dGVybTo5") {
        posts(first: 100, where: {orderby: {field: DATE, order: ASC}}) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
             url {
              projectLink
            }
          }
        }
      }
    }`,
  );
  return data?.category?.posts?.nodes;
}

export async function getStores() {
  const data = await fetchAPI(
    `query FetchPosts {
      category(id: "dGVybToxMA==") {
        posts(first: 100, where: {orderby: {field: DATE, order: ASC}}) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
              url {
              projectLink
            }
          }
        }
      }
    }`,
  );
  return data?.category?.posts?.nodes;
}

export async function getBlogs() {
  const data = await fetchAPI(
    `query FetchPosts {
      category(id: "dGVybToxMQ==") {
        posts(first: 100, where: {orderby: {field: DATE, order: DESC}}) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
              url {
              projectLink
            }
          }
        }
      }
    }`,
  );
  return data?.category?.posts?.nodes;
}

export async function getSpaProjects() {
  const data = await fetchAPI(
    `query FetchPosts {
      category(id: "dGVybTo1") {
        posts(first: 100, where: {orderby: {field: DATE, order: DESC}}) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
              url {
              projectLink
            }
          }
        }
      }
    }`,
  );
  return data?.category?.posts?.nodes;
}


export async function getPosts() {
  const data = await fetchAPI(
    `query FetchPosts {
      category(id: "dGVybToz") {
        posts(first: 100) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
          }
        }
      }
    }`,
  );
  return data?.category?.posts?.nodes;
}

export async function getSeoPosts() {
  const data = await fetchAPI(
    `query FetchPosts {
      category(id: "dGVybTo0") {
        posts(first: 100) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
          }
        }
      }
    }`,
  );

  return data?.category?.posts?.nodes;
}

export async function getWpPosts() {
  const data = await fetchAPI(
    `query FetchPosts {
      category(id: "dGVybTo2") {
        posts(first: 100) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
          }
        }
      }
    }`,
  );

  return data?.category?.posts?.nodes;
}


export async function getPostBySlug(postSlug: string) {
  const data = await fetchAPI(
    `query GetPost($id: ID = "") {
    post(id: $id, idType: SLUG) {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
      title
    }
  }`,
    {
      variables: {
        id: postSlug,
      },
    }
  );

  return data?.post;
}