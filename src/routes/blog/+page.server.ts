import { allPosts } from "$lib/server/posts";

export const load = () => ({ posts: allPosts() });
