"use client";

import { useState } from "react";

import SingleRepoItem from "@/components/SingleRepoItem/SingleRepoItem";

const Bookmarks = () => {
  const [bookmark, setBookmark] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );

  const getBookmarks = () => {
    try {
      return JSON.parse(localStorage.getItem("bookmarks")) || [];
    } catch (error) {
      return [];
    }
  };

  const bookmarks = getBookmarks();

  const handleUnbookmark = (repo) => {
    const newBookmarkList = bookmark.filter((item) => item.id !== repo.id);
    setBookmark(newBookmarkList);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarkList));
  };

  return (
    <div className="bookmarks-container">
      <div className="container">
        <h1 className="my-5 text-center">Bookmarks</h1>
        {bookmarks.length > 0 ? (
          bookmarks.map((repo) => (
            <SingleRepoItem
              key={`${repo.name}-${repo.id}`}
              allRepoData={repo}
              handleUnbookmark={handleUnbookmark}
            />
          ))
        ) : (
          <h2 className="my-5 text-center">No Bookmarked Repos</h2>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
