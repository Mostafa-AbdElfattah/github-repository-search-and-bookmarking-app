"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import SearchComponent from "@/components/SearchComponent/SearchComponent";
import SingleRepoItem from "@/components/SingleRepoItem/SingleRepoItem";
import Pagination from "@/components/Pagination";
import "./Home.scss";

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [repoCount, setRepoCount] = useState(0);
  const [bookmark, setBookmark] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}&per_page=10&page=${page}`
      );
      setRepos(response.data.items);
      setRepoCount(response.data.total_count);
    };
    if (query) {
      fetchRepos();
    }
  }, [query, page]);

  const handleBookmark = (repo) => {
    const newBookmarkList = [...bookmark, repo];
    setBookmark(newBookmarkList);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarkList));
  };


  return (
    <main className="home-page">
      <div className="container">
        <h1 className="my-5 text-center">
          GitHub Repository Search and Bookmarking App{" "}
        </h1>
        <SearchComponent
          value={query}
          onSearch={(value) => setQuery(value)}
          onClear={() => {
            setQuery("");
            setRepoCount(0);
            setPage(1);
          }}
        />
        <ul className="mt-5 p-0 mx-0 w-100 d-flex flex-column justify-content-center align-items-center">
          {query &&
            repos.map((repo) => (
              <SingleRepoItem
                key={`${repo.name}-${repo.id}`}
                allRepoData={repo}
                handleBookmark={handleBookmark}
              />
            ))}

          <div className="d-flex justify-content-center py-3">
            {repoCount > 1 && repoCount / 10 > 1 && (
              <Pagination
                count={repoCount}
                page={page}
                handleChange={(event, page) => {
                  setPage(page);
                }}
                defaultPage={1}
              />
            )}
          </div>
        </ul>
      </div>
    </main>
  );
};

export default Home;
