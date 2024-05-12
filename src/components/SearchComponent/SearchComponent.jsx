"use client";

// import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";

import "./SearchComponent.scss";

const SearchComponent = ({ onSearch, value, onClear }) => {
  return (
    <div className="w-85 search-input-wrapper">
      <TextField
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        variant="outlined"
        placeholder="Search Repo..."
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {value && (
                <IconButton onClick={onClear} edge="end">
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchComponent;
