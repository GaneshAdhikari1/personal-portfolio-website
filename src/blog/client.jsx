import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BlogListing, BlogArticle } from "./components";

const root = document.getElementById("blog-root");
if (root) hydrateRoot(root, root.dataset.page === "article" ? <BlogArticle slug={root.dataset.slug} /> : <BlogListing />);
