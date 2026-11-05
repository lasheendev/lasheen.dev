import { error } from "@sveltejs/kit";
import { allPosts, getPost } from "$lib/server/posts";

export const entries = () => allPosts().map(({ slug }) => ({ slug }));

export const load = ({ params }) => {
  const post = getPost(params.slug);
  if (!post) error(404, "Post not found");
  const list = allPosts();
  const i = list.findIndex((p) => p.slug === post.slug);
  return { post, newer: list[i - 1] ?? null, older: list[i + 1] ?? null };
};
