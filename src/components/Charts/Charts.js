import React,{useEffect,useState} from 'react'
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2'
import styles from './Charts.module.css'
const Charts = ({data:{confirmed,recovered,deaths},country}) => {
    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        async function getDailyData(){
             setDailyData(await fetchDailyData())
         }
         getDailyData()
     }, [])

     const lineChart = (
        dailyData.length!==0? ( <Line
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:'Deaths',
                    borderColor:'red',
                    fill:true
                }]
            }}
         />):null
     )

     const barChart = (
        confirmed? ( <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:['blue','red','green'],
                    data:[confirmed.value,recovered.value,deaths.value],
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current state in ${country}`}
            }}
         />):null
     )
    return (
        <div className={styles.container}>
            {country?barChart:lineChart}


        </div>
    )
}

export default Charts
