const Reports = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div id="wrapper" className="wrapper bg-ash">
      <Headers />
      <div className="dashboard-page-one">
        <Sidebar />
        <div className="dashboard-content-one">
          <div className="breadcrumbs-area d-flex justify-content-between">
            <h3>Reports</h3>
            <div></div>
          </div>
          <div className="card height-auto reports">
            <div className="d-flex justify-content-between flex-wrap pl-4 pr-5">
              <div className="tab mb-2">
                <button
                  className={`tablinks ${activeTab === "1" ? "active" : ""}`}
                  onClick={() => setActiveTab("1")}
                >
                  Subject Overview
                </button>
                <button
                  className={`tablinks ${activeTab === "2" ? "active" : ""}`}
                  onClick={() => setActiveTab("2")}
                >
                  Group Overview
                </button>
                <button
                  className={`tablinks ${activeTab === "3" ? "active" : ""}`}
                  onClick={() => setActiveTab("3")}
                >
                  Overall
                </button>
                <button
                  className={`tablinks ${activeTab === "4" ? "active" : ""}`}
                  onClick={() => setActiveTab("4")}
                >
                  Progress Overview
                </button>
                <button
                  className={`tablinks ${activeTab === "5" ? "active" : ""}`}
                  onClick={() => setActiveTab("5")}
                >
                  New Report
                </button>
              </div>
            </div>

            {/* Conditional Rendering of Components */}
            {activeTab === "1" && <SubOverview />}
            {activeTab === "2" && <GroupOverview />}
            {activeTab === "3" && <Overall />}
            {activeTab === "4" && <ProgressReview />}
            {activeTab === "5" && <NewReport />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
