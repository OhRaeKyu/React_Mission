import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path=":movieId" element={<DetailPage />} />
					<Route path="search" element={<SearchPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
