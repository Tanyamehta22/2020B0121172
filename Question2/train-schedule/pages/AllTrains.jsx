import React, { useState, useEffect } from 'react';
import axios from 'axios'

const AllTrains = () => {
    const [trains, setTrains] = useState([]);

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://20.244.56.144:80/train/trains',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAwMDM4MjgsImNvbXBhbnlOYW1lIjoiVGFueWEgQ29tcGFueSIsImNsaWVudElEIjoiMTU1NWJiYTQtODhmMy00OTZlLWJhYTUtYTNhNzFjNDg5Yjc3Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMjBCMDEyMTE3MiJ9._1OcLjziwXduUmHGSAOVoUeNIMGHYP2wsiKZ7f9E6DU'
        }
    };

    useEffect(() => {
        axios.request(config)
            .then((response) => {
                console.log(response)
                setTrains(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            All Train Details
            {trains.map((train, index) => (
                <div key={index} className="train-card">
                    <h2>{train.trainName}</h2>
                    <p>Train Number: {train.trainNumber}</p>
                    <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
                    <p>Seats Available (Sleeper): {train.seatsAvailable.sleeper}</p>
                    <p>Seats Available (AC): {train.seatsAvailable.AC}</p>
                    <p>Price (Sleeper): {train.price.sleeper}</p>
                    <p>Price (AC): {train.price.AC}</p>
                    <p>Delayed By: {train.delayedBy} minutes</p>
                </div>
            ))}
        </div>
    );
};

export default AllTrains;