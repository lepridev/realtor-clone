import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Offers from "./Pages/Offers";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/offers" element={<Offers />} />
					<Route path="/forgotPassword" element={<ForgotPassword />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
