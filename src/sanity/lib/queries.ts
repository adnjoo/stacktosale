export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    body,
    mainImage {
      asset-> {
        url
      },
      alt
    },
    coverImageUrl,
    coverImageAlt
  }
`;
