import { Bar, Line } from 'react-chartjs-2'

export default function Production() {
  return (
    <div className="h-screen p-5">
      <h1 className="text-2xl font-bold tracking-wider text-gray-600">Production</h1>
      <div className="flex flex-col my-7">
        <h3 className="text-lg text-gray-500">This Month Hired</h3>
        {/* <div>
          <Line data={{
            // labels: ['A', 'B', "C"],
            datasets: [
              {
                labels: 'Resumes',
                data: [
                  { x: new Date('2023-10-27T00:00:00'), y: 3 },
                  { x: new Date('2023-10-27T00:00:00'), y: 6 },
                  { x: new Date('2023-10-27T00:00:00'), y: 3 },
                  { x: new Date('2023-10-27T00:00:00'), y: 6 },
                  { x: new Date('2023-10-27T00:00:00'), y: 9 },
                  { x: new Date('2023-10-27T00:00:00'), y: 3 },
                ]
              }
            ]
          }} />
        </div> */}
      </div>
    </div>
  )
}
