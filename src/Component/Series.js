import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Input = styled.input`
  background-color: #383838;
`;

const SeriesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=e15d8f52f669e20ff4376d9dee4f447a&language=pt-BR&page=1"
});

export default class Series extends Component {
  state = {
    series: [],
    buscadas: []
  };
  componentDidMount() {
    this.getSeries();
  }

  getSeries = async () => {
    const resposta = await SeriesApi.get();
    console.log(resposta);

    const allSeries = resposta.data.results.map((item) => {
      return {
        ...item,
        imagem: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
      };
    });
    this.setState({
      series: allSeries
    });
  };

  handleChange = (e) => {
    const SeriesBuscadas = this.state.series.filter((item) => {
      if (
        item.original_name.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return true;
      }
    });
    this.setState({
      buscadas: SeriesBuscadas
    });
  };
  render() {
    return (
      <section>
        <Input onChange={this.handleChange} />
        {this.state.buscadas.map((item, index) => (
          <div key={index}>
            <ul>
              <li>{item.original_name}</li>
              <li>{item.overview}</li>
            </ul>
            <img src={item.imagem} alt={item.name} />
          </div>
        ))}
      </section>
    );
  }
}
