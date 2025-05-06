import LOGO from "../../public/logo.svg";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "./Cards/ProfileInfo";
import SearchBar from "./input/SearchBar";
import PropTypes from "prop-types";

const Navbar = ({
	userInfo,
	searchQuery,
	setSearchQuery,
	onSearchNote,
	handleClearSearch,
}) => {
	const isTonken = localStorage.getItem("token");
	const navigate = useNavigate();

	const onLogout = () => {
		localStorage.clear();
		navigate("/login");
	};

	const handleSearch = () => {
		if (searchQuery) {
			onSearchNote(searchQuery);
		}
	};

	const onClearSearch = () => {
		handleClearSearch();
		setSearchQuery("");
	};
	return (
		<div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow sticky top-0 z-10">
			<img src={LOGO} alt="travel story" className="h-9" />

			{isTonken && (
				<>
					<SearchBar
						value={searchQuery}
						onChange={({ target }) => {
							setSearchQuery(target.value);
						}}
						handleSearch={handleSearch}
						onClearSearch={onClearSearch}
					/>

					<ProfileInfo userInfo={userInfo} onLogout={onLogout} />
				</>
			)}
		</div>
	);
};
Navbar.propTypes = {
	userInfo: PropTypes.object,
	searchQuery: PropTypes.string,
	setSearchQuery: PropTypes.func.isRequired,
	onSearchNote: PropTypes.func.isRequired,
	handleClearSearch: PropTypes.func.isRequired,
};

export default Navbar;
