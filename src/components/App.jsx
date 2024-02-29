import { fetchImg } from "services/api";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import s from './App.module.css'


import React, { Component } from 'react'
import Loader from "./Loader/Loader";


export class App extends Component {
  state = {
    items: [],
    totalImg: 0,
    loading: false,
    error: null,
    page: 1,
    query:'',
  }

  async componentDidMount() {
    try {
      this.setState({loading:true})
      const {total, hits} = await fetchImg();
      this.setState({ items: hits, totalImg: total });
    } catch (error) {
      this.setState({ error });
    }
    finally {
      this.setState({loading:false})
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page || prevState.query!==this.state.query) {
      try {
        this.setState({ loading: true });
        const { total, hits } = await fetchImg({ page: this.state.page, q: this.state.query });
        this.setState(prev => ({ items: [...prev.items, ...hits], totalImg: total }));

      } catch (error) {
        
      }
      finally {
      this.setState({loading:false})
    }
    }
    
  }

  handleSetQuery = (query) => {
    this.setState({query, items:[], page: 1})
  }

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  }

  render() {
    const { items, loading, totalImg} = this.state;
    return (
      <div className={s.app}>
        <Searchbar handleSetQuery={this.handleSetQuery} />
        <ImageGallery images={items} />
        
        {loading && <Loader/>}
        {items.length && items.length < totalImg && <Button onClick={this.handleLoadMore} />}
        

    </div>
    )
  }
}

