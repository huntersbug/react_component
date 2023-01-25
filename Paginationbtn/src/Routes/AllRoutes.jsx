import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import RestaurantTable from "../Components/RestaurantTable";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";


function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
         
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/restaurants/:id" element={<RestaurantTable />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
