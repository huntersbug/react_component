import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
  const [item, setItem] = React.useState([]);
  const Auth = useContext(AuthContext);
  const [pageno, setPageno] = React.useState(1);
  const [PerPage, setPerPage] = React.useState(10);
  const [totalPages, setTotalPages] = React.useState(0);
  const navigate = useNavigate();
  let { token } = Auth.authState;
  const handellogout = () => {
    Auth.logoutUser();
    navigate("/login");
  };
  const getdata = async () => {
    try {
      let r = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${pageno}&limit=10`
      );

      let data = await r.json();

      setItem(data.data);

      setTotalPages(data.totalPages);
      return data.data;
    } catch (error) {}
  };
  const handlePageChange = (a) => {
    setPageno(a );
  };
  React.useEffect(() => {
    getdata();
  }, [pageno]);
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={handellogout}>
          Logout
        </button>
        <p>
          Token:{token ? token : ""}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={item}></RestaurantTable>
      </div>
      <div data-testid="pagination-container">
        <Pagination
          totalPages={totalPages}
          currentPage={pageno}
          handlePageChange={handlePageChange}
        ></Pagination>
      </div>
    </div>
  );
}

export default Dashboard;
