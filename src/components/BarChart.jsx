import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { Chart as CharJS } from 'chart.js/auto'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment/moment'

const BarChart = () => {
  const { jobs } = useSelector((state) => state.jobs)

  const month = [
    ...new Set(jobs.map((data) => moment(data.createdAt).format('MMM, YYYY'))),
  ]

  const months = [
    jobs.map((data) => moment(data.createdAt).format('MMM, YYYY')),
  ]

  let counter = {}
  for (let element of months.flat()) {
    if (counter[element]) {
      counter[element] += 1
    } else {
      counter[element] = 1
    }
  }
  let count = Object.values(counter)

  const [userData, setUserData] = useState({
    labels: month,
    datasets: [
      {
        label: 'Count',
        data: count,
        backgroundColor: '#3b82f6',
        borderColor: '#102a43',
        borderWidth: 2,
        borderRadius: 5.6,
        // barThickness: 50,
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#102a43',
            font: {
              size: 16,
              weight: 500,
            },
          },
        },
      },
      scales: {
        y: {
          grid: {
            display: false,
          },
          beginAtZero: true,
          ticks: {
            color: '#102a43',
            stepSize: 1,
            font: {
              // size: 12
            },
          },
        },
        x: {
          ticks: {
            color: '#102a43',
          },
          grid: {
            display: false,
          },
        },
      },
    },
  })

  const [toggleChart,setToggleChart] = useState(false)
  return (

    <div className='chart'>
      <button onClick={()=> setToggleChart(!toggleChart)} className="btn-chart">{toggleChart ? "Area Chart" : "Bar Chart"}</button>
      {toggleChart ?
      <Bar data={userData} options={userData.options} /> : 
      <Line data={userData} options={userData.options} /> 
    }
    </div>
  )
}

export default BarChart
