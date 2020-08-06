import React, { useEffect,useState } from 'react'
import corona from './images/image.png'
import styles from './App.module.css'
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import CountryPicker from './components/CountryPicker/CountryPicker'
// Fetch methods
import {fetchData,fetchDailyData,fetchCountryData} from './api'
const App = () => {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('')

    const handleCountryChange = async(country) =>{
        setCountry(country)
        setData(await fetchData(country))
    }
    useEffect(() => {
       async function getData(){
            const data = await fetchData()
            setData(data)
        }
        getData()
    }, [])


    return (
        <div className={styles.container}>
            <img src={corona} alt="logo" className={styles.image}/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Charts data={data} country={country}/>

        </div>
    )
}

export default App
