import React from "react";
import { renderToString } from "react-dom/server";
import { BlogListing, BlogArticle } from "./components";

export const renderBlogListing = () => renderToString(<BlogListing />);
export const renderBlogArticle = (slug) => renderToString(<BlogArticle slug={slug} />);
