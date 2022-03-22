import React from "react";
import requests from "../../api/requests";
import Banner from "../../components/Banner";
import Row from "../../components/Row";

function MainPage() {
	return (
		<>
			<Banner />
			<Row title="Netflix Originals" id="NO" fetchUrl={requests.fetchNeflixOriginals} isLargeRow />
			<Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rate" id="TR" fetchUrl={requests.fetchTopRate} />
			<Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" id="HM" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" id="RM" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Document Movies" id="DM" fetchUrl={requests.fetchTopRate} />
		</>
	);
}

export default MainPage;
