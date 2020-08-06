import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import {fetchCountries, fetchDailyData} from '../../api'
import styles from './CountryPicker.module.css'
const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountry, setFetchedCountry] = useState([])

    useEffect(() => {
       async  function getCountries(){
        setFetchedCountry(await fetchCountries())
        }
        getCountries()
    }, [setFetchedCountry])
    return (
           <FormControl className={styles.formControl}>
               <NativeSelect onChange={(e)=>handleCountryChange(e.target.value)}>
               <option value="">Global</option>
               {fetchedCountry.map((country,i)=><option key={i} value={country} >{country}</option>)}

               </NativeSelect>
           </FormControl>
    )
}

export default CountryPicker
