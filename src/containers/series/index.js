import React, { Component } from 'react';
import Intro from '../../components/Intro/intro-component';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
      }
    
      
    
      onSeriesInputChange = e => { 
        this.setState({ seriesName: e.target.value, isFetching: true  }) 
      fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({ series: json, isFetching: false })) 
    }

    render(){
      const { series, seriesName, isFetching } = this.state
        return(
            <div> 
              <Intro message="Find all your favorite TV shows!"/>           
            <div>
              <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
            </div>
            { 
              !isFetching && series.length === 0 && seriesName.trim() === '' && <p>Please enter a valid series name</p>
            } 
            {
              !isFetching && series.length === 0 && seriesName.trim() != '' && <p>No TV series have been found with this name</p>
            } 
            {
              isFetching && <Loader />
            }
            {
              !isFetching && <SeriesList list={this.state.series} />
            }         
            <SeriesList list={this.state.series} />
          
            </div>
        )
    }
}

export default Series;