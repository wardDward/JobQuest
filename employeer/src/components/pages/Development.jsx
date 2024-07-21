import OverView from '../OverView'
import {Bar, Line} from 'react-chartjs-2'

export default function Development() {
  return (
    <div>
        <OverView/>
        <div className='p-7'>
          <h1 className='text-lg font-bold'>
            Count of seekers that view the job post
          </h1>
          {/* <div className='my-7 flex flex-wrap items-center justify-center'>
            <div className='max-h-[500px] md:h-[800px] w-full lg:w-[600px] mx-[0px] md:mx-[50px]'>
            <Bar
              data={{
                labels: ["A", "B", "C"],
                datasets: [
                  {
                    label:"Revenue",
                    data: [200, 255, 55]
                  },
                  {
                    label:"Profit",
                    data: [50, 105, 55]
                  },
                ]
              }}
            />
            </div>
            <div className='max-h-[500px] md:h-[800px] w-full lg:w-[600px] mx-[0px] md:mx-[50px]'>
            <Line  data={{
              labels: ["A" , "B", "C"],
              datasets: [
                {
                  label: 'Test',
                  data: [45,42,11]
                }
              ]
            }}/>
            </div>
          </div> */}
        </div>
    </div>
  )
}
