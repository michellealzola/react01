import React from "react";

import ClickHandler from './clickHandler';
import CheckBox from './CheckBox';

const data = [
    { name: "Maria", status: <ClickHandler />, passed: <CheckBox /> },
    { name: "Francisco", status: <ClickHandler />, passed: <CheckBox /> },
    { name: "Roland", status: <ClickHandler />, passed: <CheckBox /> },
    { name: "Helen", status: <ClickHandler />, passed: <CheckBox /> },
]

function TableTwo() {
    return (
        <div className="Table">
            <table>
                <tbody>
                    <tr>
                        <th>Student Name</th>
                        <th>Correction Status</th>
                        <th>Passed</th>

                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.status}</td>
                                <td>{val.passed}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </div>
    );
}

export default TableTwo;