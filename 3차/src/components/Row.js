import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import MovieModal from './MovieModal';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './row.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  useEffect(() => {
    fetchMovieData();
  }, [fetchUrl]);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <section className="row-wrap">
      <h2>{title}</h2>
      <Swiper
        id={id}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          720: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              } `}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}
