import React from "react";
import ClickHandler from "./clickHandler";

const data = [
    { name: "Maria", status: <ClickHandler /> },
    { name: "Francisco", status: <ClickHandler /> },
    { name: "Roland", status: <ClickHandler /> },
    { name: "Helen", status: <ClickHandler /> },
]

function Table() {
    return (
        <div className="Table">
            <table>
                <tbody>
                    <tr>
                        <th>Student Name</th>
                        <th>Correction Status</th>

                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.status}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </div>
    );
}

export default Table;