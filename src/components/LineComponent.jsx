import { Line } from 'react-chartjs-2'
import {
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Chart as ChartJS,
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export function LineComponent() {
  const data = {
    labels: [
      'Maio',
      'Abril',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
    ],
    datasets: [
      {
        data: [8, 5, 6, 3, 8.4],
        backgroundColor: 'transparent',
        borderColor: '#f26c6c',
        pointBorderColor: 'transparent',
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  }
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value + 'k',
        },
        grid: {
          borderDash: [2],
        },
      },
    },
  }
  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  )
}
