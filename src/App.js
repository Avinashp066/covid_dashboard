import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchdata } from './Api'
import coronaimage from './images/image.png'

class App extends Component{

    state ={
        data:{},
        country: '',
    }

   async componentDidMount(){
        const fetchedData = await fetchdata()
        this.setState({data:fetchedData})


    }

    handleCountryChange = async (country) => {
       const fetchedData = await fetchdata(country)
       this.setState({data:fetchedData, country:country})
    }

    render() {
        const { data, country } = this.state

        return (
            <>
            <div className={styles.container}>
                <img className={styles.image} alt='COVID-19' src={coronaimage} />
               <p>Wear mask and stay safe</p> 

                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                
            </div>
            </>
        )
    }
}

export default App