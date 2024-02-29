import { fetchImg } from "services/api";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import s from './App.module.css'


import React, { Component } from 'react'

export class App extends Component {
  state = {
    items: [],
    totalImg: 0,
    loading: false,
    error: null,
    page:1,
  }


  async componentDidMount() {
    try {
      const {total, hits} = await fetchImg();
      this.setState({ items: hits, totalImg: total });
    } catch (error) {
      this.setState({ error });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      try {
        const { total, hits } = await fetchImg({ page: this.state.page });
        this.setState(prev => ({items:[...prev.items, ...hits]}));

      } catch (error) {
        
      }
    }
    
  }

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  }

  render() {
    const { items } = this.state;
    return (
      <div className={s.app}>
      <Searchbar />
        <ImageGallery images={ items } />
        <Button onClick={this.handleLoadMore} />

    </div>
    )
  }
}

