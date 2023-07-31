import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const BlogList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 8;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const [filteredData, setFilteredData] = useState([]);
  let updatedItems = [];

  useEffect(async () => {
    setLoading(true);
    let result = await fetch("https://api.spacexdata.com/v3/capsules");
    result = await result.json();
    setData(result);
    setLoading(false);
  }, []);

  const filterItem = (catItem) => {
    if(catItem === "") {
      setFilteredData([]);
    } else {
      updatedItems = data.filter((currElem) => currElem.status === catItem);
      setFilteredData(updatedItems);
      setCurrentPage(1);
    }
  }

  function prePage() {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if(currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCPage(i) {
    setCurrentPage(i);
  }

  return (
    <div>
    <div className="searchDiv m-3 grid gp-10 bg-gray-300 rounded-[10px] p-[3rem]">
      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <lable htmlFor="Status" className="text-[#808080] font-semibold">
            Status:
          </lable>
          <select
            name=""
            id="Status"
            className="bg-white rounded-[3px] px-4 py-1"
            onChange={(e) => filterItem(e.target.value)}
          >
            <option value={""}>All</option>
            <option value={"active"}>Active</option>
            <option value={"destroyed"}>Destroyed</option>
            <option value={"retired"}>Retired</option>
            <option value={"unknown"}>Unknown</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <lable htmlFor="type" className="text-[#808080] font-semibold">
            Type:
          </lable>
          <select
            name=""
            id="Type"
            className="bg-white rounded-[3px] px-4 py-1"
            onChange={(e) => filterItem(e.target.value)}
          >
            <option value={"all"}>All</option>
            <option value={"Dragon 1.0"}>Dragon 1.0</option>
            <option value={"Dragon 1.1"}>Dragon 1.1</option>
            <option value={"Dragon 2.0"}>Dragon 2.0</option>
          </select>
        </div>
      </div>
    </div>


    <div id="item-list" className="flex flex-wrap justify-between px-3 mt-2">
      {loading ? (
        <div className="w-full flex justify-center items-center h-96">
          {" "}
          <ThreeDots height={40} color="white" />{" "}
        </div>
      ) : (
        records.map((e, i) => {
          return (
            //<Link to='/Model'>
            <div
              key={i}
              className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500 w-3/12"
            >
              <img
                className="h-30 md:h-72"
                src="https://thumbs.dreamstime.com/b/white-spacex-logo-black-background-new-york-city-us-march-private-company-designs-manufactures-space-launch-275740260.jpg"
              ></img>
              <h1>
                <span className="text-gray-500">Id: </span>
                {e.capsule_id}
              </h1>
              <h1>
                <span className="text-gray-500">Type: </span>
                {e.type}
              </h1>
              <h1>
                <span className="text-gray-500">Status: </span>
                {e.status}
              </h1>
            </div>
           //</Link>
          );
        })
      )}
    </div>
        <nav className="flex m-4 bg-gray-400">
          <ul className="pagination list-style-none flex shadow-sm">
            <li className="page-item">
              <a href="#item-list" className="page-link relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" onClick={prePage}>
                Prev
              </a>
            </li>
            {
              numbers.map((n, i) => (
                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                  <a href="#item-list" className="page-link relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" onClick={() => changeCPage(n)} >{n}</a>
                </li>
              ))
            }
            <li className="page-item">
              <a href="#item-list" className="page-link relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
    </div>
  );

};

export default BlogList;
