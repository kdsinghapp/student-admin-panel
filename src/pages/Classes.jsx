import React, { useState } from "react";
import Headers from "../components/Headers";
import fiList from "../assets/assets/icon/fi_list.png";
import classList from "../assets/assets/icon/class.png";
import tableEdit from "../assets/assets/icon/tabler_edit.png";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Sidebar from "../components/Sidebar";
import DownloadTemplate from "../components/ClassAddOn/DownloadTemplate";
import AddNewFile from "../components/ClassAddOn/AddNewFile";
import AddNewClass from "../components/ClassAddOn/AddNewClass";

const Classes = () => {
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });
  // const []

  const [data, setData] = useState([
    { id: 1010, name: "George Martin" },
    { id: 1005, name: "Alice Smith" },
    { id: 1008, name: "John Doe" },
    { id: 1012, name: "Michael Brown" },
    { id: 1002, name: "Emily White" },
  ]);

  // Sorting function
  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc"
        ? "fas fa-sort-up"
        : "fas fa-sort-down";
    }
    return "fas fa-sort"; // Default state (unsorted)
  };
  return (
    <>
      <div id="wrapper" className="wrapper bg-ash">
        <Headers />
        <div className="dashboard-page-one">
          <Sidebar />
          <div className="dashboard-content-one">
            <div className="breadcrumbs-area">
              <h3>Class Lists</h3>
            </div>
            <div className="filter-bar">
              <div className="filter-group form-group filter-container mb-3">
                <button className="btn btn-light">
                  <i className="fas fa-filter" />
                </button>
                <span className="btn">Filter By</span>
                <input
                  type="text"
                  className="filter-input form-control"
                  id="date-input"
                  placeholder="Date"
                  onclick="toggleCalendar()"
                />
                <div className="calendar" id="calendar">
                  <div className="calendar-header">
                    <button onclick="prevMonth()">◁</button>
                    <span id="month-year" />
                    <button onclick="nextMonth()">▷</button>
                  </div>
                  <div className="calendar-grid" id="calendar-grid" />
                  <button className="apply-button" onclick="applyDate()">
                    Apply Now
                  </button>
                </div>
                <select className="form-control">
                  <option> Name</option>
                </select>
                <span className="reset-filter btn">
                  <i className="fas fa-sync-alt" /> Reset Filter
                </span>
              </div>
              <div>
                <button
                  className="btn btn-purple modal-trigger"
                  data-toggle="modal"
                  data-target="#download"
                  onClick={() => {
                    console.log("Template button clicked");
                  }}
                >
                  <i className="fas fa-download" /> Template
                </button>
                <button
                  className="btn btn-purple modal-trigger"
                  data-toggle="modal"
                  data-target="#upload"
                >
                  <i className="fas fa-upload" /> Upload
                </button>
                <button
                  className="btn btn-purple modal-trigger"
                  data-toggle="modal"
                  data-target="#addclass"
                >
                  <i className="fas fa-plus" /> Add New
                </button>
              </div>
            </div>
            {/* Class Table Area Start Here */}
            <div className="card height-auto">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table display data-table">
                    <thead>
                      <tr>
                        <th
                          onClick={() => sortData("id")}
                          style={{ cursor: "pointer" }}
                        >
                          <img src={fiList} alt="Class ID" /> Class ID{" "}
                          <i className={getSortIcon("id")} />
                        </th>
                        <th
                          onClick={() => sortData("name")}
                          style={{ width: "60%", cursor: "pointer" }}
                        >
                          <img src={classList} alt="Class Name" /> Class Name{" "}
                          <i className={getSortIcon("name")} />
                        </th>
                        <th>
                          <img src={tableEdit} alt="Action" /> Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td className="action-icons">
                            <a href="#">
                              <i className="fas fa-edit" />
                            </a>
                            <a href="#">
                              <i className="fas fa-eye" />
                            </a>
                            <a href="#">
                              <i className="fas fa-trash" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DownloadTemplate />
      <AddNewFile />
      <AddNewClass />
    </>
  );
};

export default Classes;
