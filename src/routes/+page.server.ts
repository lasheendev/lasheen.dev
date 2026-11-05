import { allPosts, type PostMeta } from "$lib/server/posts";

// Posts shown in "From the blog" on the home page, in this order.
const FEATURED = [
  "introduction-to-linux-a-comprehensive-guide",
  "flutter-appbar-titlebar-header-on-linux",
  "getting-started-with-flutter",
];

export const load = () => {
  const posts = allPosts();
  return {
    blogPosts: FEATURED.map((slug) => posts.find((p) => p.slug === slug)).filter(
      (p): p is PostMeta => p !== undefined,
    ),
  };
};
