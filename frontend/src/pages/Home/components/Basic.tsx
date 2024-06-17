
import   { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { useDashboardDataQuery } from '../../../provider/queries/Users.query';
import Loader from '../../../components/Loader';
import { useLocation } from 'react-router-dom';

export default function BasicChart() {

    const {  data,isError,isLoading,isFetching } = useDashboardDataQuery({})
    const location = useLocation()

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    
    useEffect(() => {

            if(!data){
                return
            }

        const chartData = {
            labels: ['user', 'orders','sell' ],
            datasets: [
                {
                    label: ['Total'],
                    data: [data.consumers, data.orders, data.sell],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)', 
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)', 
                    ],
                    borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(chartData);
        setChartOptions(options);
    }, [data, location]);

    if (isFetching || isLoading) {
        return <Loader />
    }
    if (isError) {
        return <>
            something went wrong
        </>
    }


    return ( 
            <Chart type="bar" width='' className=' w-full lg:w-1/2 ' data={chartData} options={chartOptions} />
    
    )
}

