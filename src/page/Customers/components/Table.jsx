import React from "react";

const Table = ({ customers }) => {
    return (
        <table className="table">
            <thead className="table__head">
                <tr className="table__head-row">
                    <th className="table__title">Customer Name</th>
                    <th className="table__title">Company</th>
                    <th className="table__title">Phone Number</th>
                    <th className="table__title">Email</th>
                    <th className="table__title">Country</th>
                    <th className="table__title">Status</th>
                </tr>
            </thead>
            <tbody className="table__body">
                {customers.map(item => <tr className="table__body-row" key={item.id}>
                    <td className="table__description" datalabel="Customer Name">{item.Name}</td>
                    <td className="table__description" datalabel="Company">{item.Company}</td>
                    <td className="table__description" datalabel="Phone Number">{item.Phone}</td>
                    <td className="table__description" datalabel="Email">{item.Email}</td>
                    <td className="table__description" datalabel="Country">{item.Country}</td>
                    <td className="table__description" datalabel="Status">
                        <button className={item.Status === "true" ? "table__description-button table__description-button--active" : "table__description-button table__description-button--inactive"}>{item.Status === "true" ? "Active" : "Inactive"}</button>
                    </td>
                </tr>)}
            </tbody>

        </table>
    )
}

export default Table;