import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    switch (sort) {
      case "title":
        return [...posts].sort(function (a, b) {
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
      case "body":
        return [...posts].sort(function (a, b) {
          let x = a.body.text.toLowerCase();
          let y = b.body.text.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
      default:
        return posts;
    }
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, filter) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    let lowerSearcher = filter.toLocaleLowerCase();
    return sortedPosts.filter(
      (e) =>
        e.title.toLocaleLowerCase().includes(lowerSearcher) ||
        e.body.text.toLocaleLowerCase().includes(lowerSearcher)
    );
  }, [filter, sortedPosts]);

  return sortedAndSearchedPosts;
};
