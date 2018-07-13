import React from 'react';
import Title from './components/title';
import Form from './components/form';
import Weather from './components/weather';


class App extends React.Component{

  state={
    city: null,
    country: null,
    temparature: null
  }
  
  getWeather= async(e)=>{
    e.preventDefault();
    const city= e.target.elements.city.value;
    console.log(city)
    const country= e.target.elements.country.value;
    console.log(country)
    const API_KEY="9883b3f39b0e69371a1caac8e9da6205"
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data= await api_call.json();
    console.log(data)

    this.setState({
      city: city,
      country: country,
      temparature: data.main.temp,
      humidity: data.main.humidity

    })
  }
  render(){
    return(
      <div>
        <Title/>
        <Form getWeather={this.getWeather} />
        <Weather data= {this.state} />
      </div>
    )
  }
}

export default App;