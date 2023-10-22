import { React, useState, useEffect } from "react";
import useAxiosJWT from '../../hooks/useAxiosJWT';
import { Line } from 'react-chartjs-2';

import calculateUsersByDate from "./calculateUsersByDate.js";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
} from "reactstrap";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Card2RPD() {

    const axiosJWT = useAxiosJWT();

    //STATES
    const [totalUsers, setTotalUsers] = useState(0);
    const [allChartData, setAllChartData] = useState([]);
    const [cardReady, setCardReady] = useState(false);

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {

        try {

            var users = await axiosJWT.get("/admin/users");
            console.log(users.data);

            let ubdData = calculateUsersByDate(users.data);

            let ubdArray = ubdData.ubdArray;

            // FORMAT CHART DATA
            let calcLabels = [];
            let calcData = [];

            ubdArray.forEach((ubd) => {
                calcLabels.push(ubd.label);
                calcData.push(ubd.userCount);
            });

            let formattedData = {
                labels: calcLabels,
                datasets: [
                    {
                        label: 'Users',
                        data: calcData,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }

            setAllChartData(formattedData);
            setTotalUsers(ubdData.totalUsers);
            setCardReady(true);

        } catch (err) {
            console.log(err); // TODO: Flash Messages?
        }
    }

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    // TODO: default render loading wheel
    return (
        <>
            {
                !cardReady ? <h1>Loading...</h1> :
                    <Card className="card-chart my-5" >
                        <CardHeader>
                            <CardTitle tag="h3">
                                <i className="custom-icons bell-icon text-info" /> New Users Per Day
                            </CardTitle>

                        </CardHeader>
                        <CardBody>
                            <div className="chart-area">
                                <h4>Total Users Created: {totalUsers}</h4>
                                <Line data={allChartData} options={chartOptions} />
                            </div>
                        </CardBody>
                    </Card>
            }

        </>
    );
}

export default Card2RPD;
