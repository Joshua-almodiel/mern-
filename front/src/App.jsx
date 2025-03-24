import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
import ConstructionLogin from './Section/ConstructionLogin.jsx'
import ConstructionManager from './Section/ConstructionManager.jsx'
import WorkersDashboard from './Section/WorkersDashboard.jsx'
import PrivateRoutes from './Utilities/PrivateRoutes.jsx'
import RoleBaseRoutes from './Utilities/RoleBaseRoutes.jsx'
import ManagerOverview from "./Components/ManagerDashboard/ManagerOverview.jsx"
import SiteList from './Components/Site/SiteList.jsx'
import AddSite from './Components/Site/AddSite.jsx'
import EditSite from './Components/Site/EditSite.jsx'
import List from './Components/Worker/List.jsx'
import Add from './Components/Worker/Add.jsx'
import View from './Components/Worker/View.jsx'
import Edit from './Components/Worker/Edit.jsx'
import AddSalary from './Components/Salaries/Add.jsx'
import ViewSalary from './Components/Salaries/View.jsx'
import Summary from './Components/WorkerDashboard/Summary.jsx'
import LeaveList from './Components/Leaves/List.jsx'
import AddLeave from './Components/Leaves/AddLeave.jsx'
import Setting from './Components/WorkerDashboard/Setting.jsx'
import TableLeave from './Components/Leaves/TableLeave.jsx'
import DetailsLeave from './Components/Leaves/DetailsLeave.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/manager-dashboard" />}></Route>
        <Route path="/login" element={<ConstructionLogin />}></Route>

        <Route path="/manager-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={["manager"]}>
              <ConstructionManager />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }>
          <Route index element={<ManagerOverview />}></Route>

          <Route path="/manager-dashboard/sites" element={<SiteList />}></Route>
          <Route path="/manager-dashboard/add-site" element={<AddSite />}></Route>
          <Route path="/manager-dashboard/site/:id" element={<EditSite />}></Route>

          <Route path="/manager-dashboard/workers" element={<List />}></Route>
          <Route path="/manager-dashboard/add-worker" element={<Add />}></Route>
          <Route path="/manager-dashboard/workers/:id" element={<View />}></Route>
          <Route path="/manager-dashboard/workers/edit/:id" element={<Edit />}></Route>
          <Route path="/manager-dashboard/workers/salary/:id" element={<ViewSalary />}></Route>
          <Route path="/manager-dashboard/workers/leaves/:id" element={<LeaveList />}></Route>

          <Route path="/manager-dashboard/salary/add" element={<AddSalary />}></Route>
          <Route path="/manager-dashboard/setting" element={<Setting />}></Route>

          <Route path="/manager-dashboard/leaves" element={<TableLeave />}></Route>
          <Route path="/manager-dashboard/leaves/:id" element={<DetailsLeave />}></Route>

        </Route>


        <Route path="/worker-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={["manager", "worker"]}>
              <WorkersDashboard />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }>

          <Route index element={<Summary />}></Route>

          <Route path="/worker-dashboard/profile/:id" element={<View />}></Route>
          <Route path="/worker-dashboard/leaves/:id" element={<LeaveList />}></Route>
          <Route path="/worker-dashboard/add-leave" element={<AddLeave />}></Route>
          <Route path="/worker-dashboard/salary/:id" element={<ViewSalary />}></Route>
          <Route path="/worker-dashboard/setting" element={<Setting />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App