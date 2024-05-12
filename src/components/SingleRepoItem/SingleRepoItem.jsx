"use client";

import "./SingleRepoItem.scss";

const SingleRepoItem = ({ allRepoData, handleBookmark, handleUnbookmark }) => {
  return (
    <div className="single-item-container">
      <div className="top-container">
        <div className="name-and-owner">
          <div className="name-wrapper">
            <span> Repo Name: </span>
            <a
              href={allRepoData.clone_url}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-2"
            >
              {allRepoData.name}
            </a>
          </div>

          <p>
            <span>Owner:</span>
            <span className="fsize-20 fweight-500 ms-2">
              {allRepoData.owner.login}
            </span>
          </p>
        </div>

        <div className="star-count">
          <span>No of Stars: </span>
          <span className="fsize-20 fweight-500 ms-2">
            {allRepoData.stargazers_count}
          </span>
        </div>
      </div>
      <div className="content-container">
        <div className="mb-2 description">
          <span>Description: </span>
          {allRepoData.description}
        </div>

        <div className="action-container">
          {handleBookmark ? (
            <button onClick={() => handleBookmark(allRepoData)}>
              Bookmark
            </button>
          ) : (
            <button onClick={() => handleUnbookmark(allRepoData)}>
              UnBookmark
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleRepoItem;
