import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import React from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const daysInMonth = 31; // Кількість днів у місяці
const labels = Array.from({ length: daysInMonth }, (_, i) => i + 1); // Створюємо масив днів від 1 до 31
const dataPoints = [
    100, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    210, 100, 342, 568, 222, 800, 150, 90, 600, 350,
];

const totatlErnings = dataPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totatlErnings);


export const StatisticItem: React.FC = () => {
    return (
        <>
            <div className="body-statistics__graphic graphic-body-statistics">
                <div className="graphic-body-statistics__header">
                    <div className="graphic-body-statistics__block">
                        <div className="graphic-body-statistics__title">Total Earnings (USD)</div>
                        <span className="graphic-body-statistics__date">March 2024</span>
                    </div>
                    <div className="graphic-body-statistics__stat">
                        <div className="graphic-body-statistics__block">
                            <p className="graphic-body-statistics__value">$ <span>{totatlErnings}</span></p>
                            <div className="graphic-body-statistics__change change-graphic-body-statistics">
                                <div className="change-graphic-body-statistics__arrow">
                                    <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.00613 6.39722V2.00825L0.866188 3.35454C0.738002 3.50593 0.551245 3.56503 0.376127 3.50963C0.201009 3.4542 0.0642422 3.29268 0.0173103 3.08588C-0.0296216 2.87907 0.0205187 2.65844 0.148705 2.50705L2.15409 0.138589C2.20602 0.0772143 2.26855 0.0299384 2.33749 2.20298e-05V0H2.34607H2.35033H2.35704H2.36316H2.36808H2.37599H2.37905H2.38823H2.398H2.40837H2.41934H2.43031H2.44068H2.45046H2.54887H2.55865H2.56902H2.57999H2.59095H2.60133H2.6111H2.62028H2.62393H2.63184H2.63677H2.64288H2.6496H2.65385L2.66243 0.00361288C2.73138 0.0335073 2.79398 0.0808052 2.84583 0.142202L4.8513 2.51067C4.97956 2.66205 5.02962 2.88268 4.98269 3.0895C4.93576 3.29629 4.79899 3.45781 4.62387 3.51324C4.44876 3.56864 4.26192 3.50954 4.13374 3.35815L2.99379 2.01187V6.40083C2.99379 6.6149 2.89717 6.8127 2.74018 6.91972C2.58319 7.02677 2.3898 7.02677 2.23281 6.91972C2.07582 6.8127 1.9792 6.6149 1.9792 6.40083L2.00613 6.39722Z" fill="#1AD598" />
                                    </svg>
                                </div>
                                <p className="change-graphic-body-statistics__value"><span>+20,12</span> %</p>
                            </div>
                        </div>
                        <p className="graphic-body-statistics__text">This month</p>
                    </div>
                </div>
                <div className="graphic-body-statistics__body">
                    <Line
                        data={{
                            labels: labels,
                            datasets: [
                                {
                                    label: 'Earnings',
                                    data: dataPoints,
                                    borderColor: '#3F79CF',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                tooltip: {
                                    mode: 'index',
                                    intersect: false,
                                },
                            },
                            scales: {
                                x: {
                                    display: true,
                                    title: {
                                        display: true,
                                        text: 'Days',
                                    },
                                },
                                y: {
                                    display: true,
                                    title: {
                                        display: true,
                                        text: 'Earnings (USD)',
                                    },
                                    beginAtZero: true,
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </>
    );
}
