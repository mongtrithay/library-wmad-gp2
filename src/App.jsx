import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/core/DashboardPage";
import UserAccountPage from "./pages/userAccount/UserAccountPage";
import BookCatalogPage from "./pages/bookCatalog/BookCatalogPage";
import BookIssuePage from "./pages/bookIssue/BookIssuePage";
import LoginPage from "./pages/auth/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserAccountInfoPage from "./pages/userAccount/UserAccountInfoPage";
import CreateUserAccountPage from "./pages/userAccount/CreateUserAccountPage";
import AppLayout from "./components/AppLayout";
import MemberPage from "./pages/member/MemberPage";
import CreateMemberPage from "./pages/member/CreateMemberPage";
import ListAccount from "./pages/listuseraccount/ListAccount";
import MemberInfo from "./pages/member/MemberInfo";
import CreateCatalogPage from "./pages/bookCatalog/CreateCatalogpage";
import Cataloginformation from "./pages/bookCatalog/Cataloginformation";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user-account">
          <Route index element={<UserAccountPage />} />
          <Route path=":id" element={<UserAccountInfoPage />} />
          <Route path="new" element={<CreateUserAccountPage />} />
        </Route>
        <Route path="/book-catalog" element={<BookCatalogPage />} />
        <Route path="/book-catalog/new" element={<CreateCatalogPage />} />
        <Route path="/book-catalog/:id" element={<Cataloginformation />} />
        <Route path="/book-issue" element={<BookIssuePage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/create-member" element={<CreateMemberPage />} />
        <Route path="/list-account" element={<ListAccount />} />
        <Route path="/member/" element={<MemberPage />} />
        <Route path="/member/:id" element={<MemberInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
