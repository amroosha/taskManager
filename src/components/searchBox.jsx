import React, { useState } from "react";

function SearchBox({ onSearch }) {
    const [query, setQuery] = useState("");

    // Handle input changes
    const handleInputChange = (e) => {
        setQuery(e.target.value); // Update state
        if (onSearch) {
            onSearch(e.target.value); // Pass the input value to the parent component
        }
    };

    return (
        <div id="search-container">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" id="search-icon" />
            <input id="search-input"
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="What are you looking for?"
            />
        </div>
    );
}


export default SearchBox;