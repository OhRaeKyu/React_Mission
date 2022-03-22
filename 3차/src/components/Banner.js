import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import requests from '../api/requests';
import './banner.css';
import styled from 'styled-components';

function Banner() {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`/movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    });

    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  // Play버튼
  if (!isClicked) {
    return (
      <main
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="contents">
          <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
          <div className="buttons">
            <button
              type="button"
              className="play"
              onClick={() => setIsClicked(true)}
            >
              Play
            </button>
            <button type="button" className="more">
              More Information
            </button>
          </div>
          <p className="description">{truncate(movie?.overview, 200)}</p>
        </div>
        <div className="fadeBottom"></div>
      </main>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            frameborder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></Iframe>
        </HomeContainer>
      </Container>
    );
  }
}

export default Banner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #333;
  color: white;
`;

const HomeContainer = styled.div`
  width: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
