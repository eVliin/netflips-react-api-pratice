import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Input = styled.input`
  background-color: #383838;
`;

const MoviesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=e15d8f52f669e20ff4376d9dee4f447a&language=pt-BR&page=1"
});

export default class Movies extends Component {
  state = {
    Movies: [],
    buscadas: []
  };
  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const resposta = await MoviesApi.get();
    console.log(resposta);

    const allMovies = resposta.data.results.map((item) => {
      return {
        ...item,
        imagem: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
      };
    });
    this.setState({
      Movies: allMovies
    });
  };

  handleChange = (e) => {
    const MoviesBuscadas = this.state.Movies.filter((item) => {
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      }
    });
    this.setState({
      buscadas: MoviesBuscadas
    });
  };
  render() {
    return (
      <section>
        <Input onChange={this.handleChange} />
        {this.state.buscadas.map((item, index) => (
          <div key={index}>
            <ul>
              <li>{item.title}</li>
              <li>{item.overview}</li>
            </ul>
            <img src={item.imagem} alt={item.name} />
          </div>
        ))}
      </section>
    );
  }
}
