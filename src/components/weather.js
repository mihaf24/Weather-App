import React from 'react';

const Weather = (props)=>{
    console.log(props)
    return(
        <div>
            <h3>city: {props.data.city} </h3>
            <h3>country: {props.data.country} </h3>
            <h3>humidity: {props.data.humidity} </h3>
            <h3>temparature: {props.data.temparature} </h3>
            
            
            
            
        </div>
    )
}


export default Weather;

/**class Weather extends React.Component{
    render(){
        return(
            <div>
                <h3>city: {this.props.data.city} </h3>
                <h3>city: {this.props.data.city} </h3>
                <h3>city: {this.props.data.city} </h3>
                <h3>city: {this.props.data.city} </h3>
            </div>
        )
    }
} */