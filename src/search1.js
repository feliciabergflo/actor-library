import React from "react";

const Search = (props) => {
	return (
		<div className="row mt-5">
			<input
                className="form-control me-2"
                type="text"
                placeholder="Search actor ( min 3 letters)"
                aria-label="Search"
                onChange={e => props.setActorAfterSearchResult(e.target.value)}
            ></input>
		</div>
	);
};

export default Search
