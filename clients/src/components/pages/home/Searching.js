import React, { useRef } from "react";
import Dashbord from "./Dashbord";

const Searching = (props) => {
  const inputEl = useRef("");

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    // <form className="form-inline m-4">
    //   <input
    //     className="form-control mr-sm-2"
    //     type="search"
    //     placeholder="Search....."
    //     aria-label="Search"
    //   />
    // </form>

    <div className="main">
      <div className="ui search">
        <div className="form-inline m-4">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Blood Group or Address"
            className="form-control mr-sm-2"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      {/* <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts available"}
      </div> */}
    </div>
  );
};

export default Searching;
