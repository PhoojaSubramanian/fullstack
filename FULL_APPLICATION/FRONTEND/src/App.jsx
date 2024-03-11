import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import LazyLayout from "./components/ui/LazyLayout";
import { UserLayout } from "./pages/user/UserLayout";
import { AdminLayout } from "./pages/admin/AdminLayout";

const LazyFooter = lazy(() => import("./components/ui/user/Footer"));
const LazyLogin = lazy(() => import("./pages/auth/Login"));
const LazyRegister = lazy(() => import("./pages/auth/Register"));
const LazyHome = lazy(() => import("./pages/user/UserHome"));
const LazyService = lazy(() => import("./pages/user/ServicePage"));
const LazyBookForm = lazy(() => import("./pages/user/ServiceBookingForm"));
const LazyAllServices = lazy(() => import("./pages/user/AllServices"));
const LazyAdminHome = lazy(() => import("./pages/admin/AdminHome"));
const LazyAdminUserManage = lazy(() => import("./pages/admin/AdminUserManage"));
const LazyAdminServicesManage = lazy(() => import("./pages/admin/AdminServicesManage"));
const LazyAdminBookingsManage = lazy(() => import("./pages/admin/AdminBookingManage"));
const LazyUserProfileManage = lazy(() => import("./pages/user/UserProfile"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/homecare/login" />} />
        <Route
          path="/homecare/login"
          element={<LazyLayout component={LazyLogin} />}
        />
        <Route
          path="/homecare/register"
          element={<LazyLayout component={LazyRegister} />}
        />
        <Route
          path="/homecare/footer"
          element={<UserLayout><LazyLayout component={LazyFooter} /></UserLayout>}
        ></Route>
        <Route
          path="/homecare/home"
          element={<UserLayout><LazyLayout component={LazyHome} /></UserLayout>}
        ></Route>
        <Route
          path="/homecare/service"
          element={<UserLayout><LazyLayout component={LazyService} /></UserLayout>}
        ></Route>
        <Route
          path="/homecare/bookservice"
          element={<UserLayout><LazyLayout component={LazyBookForm} /></UserLayout>}
        ></Route>
        <Route
          path="/homecare/allservices"
          element={<UserLayout><LazyLayout component={LazyAllServices} /></UserLayout>}
        ></Route>
        <Route
          path="/homecare/profile"
          element={<UserLayout><LazyLayout component={LazyUserProfileManage} /></UserLayout>}
        ></Route>
        <Route
          path="/homecare/adminhome"
          element={
            <AdminLayout>
              <LazyLayout component={LazyAdminHome} />
            </AdminLayout>
          }
        />
        <Route
          path="/homecare/adminusermanage"
          element={
            <AdminLayout>
              <LazyLayout component={LazyAdminUserManage} />
            </AdminLayout>
          }
        />
        <Route
          path="/homecare/adminservicesmanage"
          element={
            <AdminLayout>
              <LazyLayout component={LazyAdminServicesManage} />
            </AdminLayout>
          }
        />
        <Route
          path="/homecare/adminbookingsmanage"
          element={
            <AdminLayout>
              <LazyLayout component={LazyAdminBookingsManage} />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
