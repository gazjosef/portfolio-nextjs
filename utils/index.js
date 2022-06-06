export const sortByOrder = (a, b) => {
  return a.frontmatter.order - b.frontmatter.order;
};
