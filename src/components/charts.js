import React from 'react'
// import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'increasing'
  },
  
  series: [
    {
      name:'inc',
      data: [20,40,60,80,100]
  }
]
}
const chartss = () => <div className='s'>
  <HighchartsReact highcharts={Highcharts} options={options}  /> </div> 
 

  // render(<App />, document.getElementById('root'))

export default chartss