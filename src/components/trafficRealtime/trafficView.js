import React from 'react';
import { Table } from 'react-bootstrap';

const TrafficView = ({ state }) => {
    return (
        <>
            <div>
                <h3>Traffic Data</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Traffic</th>
                            <th>Reason</th>
                            <th>Total cars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.trafficData.map((row, index) => {
                            return (
                                <tr>
                                    <td>{index}</td>
                                    <td>{row.key}</td>
                                    <td>{row.data.Reason}</td>
                                    <td>{row.data.TotalCar}</td>
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