import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import data from '../Data/data.json';
import App from '../App';
import Cart from './Cart';
import Header from './Header';
import About from './About';
import Help from "./Help"
import NotFound from "./NotFound"
import Search from "./Search" 
import Footer from "./Footer";


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: data,
          cart: [],
          currentSearch: '' 
        };
      }

      addToCart = (id) => {
        const temp = this.state.data.filter(bier => bier.id === id);
        console.log(temp);
        this.setState({cart: [...this.state.cart, temp[0]]})
      }

      removeFromCart = (id) => {
        const index = this.state.cart.findIndex(item => item.id === id);
        const newBeerArr = [...this.state.cart];
        newBeerArr.splice(index, 1);
        this.setState({
          cart: newBeerArr
        });
      }   

      handleOnChange = (e) => {
        this.setState({
            currentSearch: e.target.value.toLowerCase()
        })
    }
      search = () => {
        
        const filteredBeers = this.state.data.filter(
          item => item.country.toLowerCase().includes(this.state.currentSearch) || item.color.toLowerCase().includes(this.state.currentSearch)); 
          this.setState({
            data: filteredBeers
        })
      }
    
  


    render () {

    return (
      <BrowserRouter>
        <Header length={this.state.cart.length}/>
        <Search handleOnChange={this.handleOnChange} search={this.search}/>
          
        <Switch>
        
        <Route path="/" exact>
            <App data={this.state.data} addToCart={this.addToCart} cart={this.state.cart} />      
        </Route>
        
        <Route path="/about" component={About} exact/>

        <Route path="/cart" exact>
            <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} sum={this.state.cart.length}/>
        </Route>
        <Route path="/help" component={Help} exact/>
        <Route component={NotFound} />
        
        </Switch> 

        <Footer />
        </BrowserRouter>
        )
    }

}
