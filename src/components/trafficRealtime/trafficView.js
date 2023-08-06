import React from 'react';
import { Table } from 'react-bootstrap';

const TrafficView = ({ state }) => {
    return (
        <>
            <div>
                <h3>Alert Data</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Lane</th>
                            <th>Accident</th>
                            <th>Total Car Crashes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.trafficData.map((row, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>Lane {row.key}</td>
                                    <td>{row.data.Accident}</td>
                                    <td>{row.data.TotalCarCrashes}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default TrafficView;