import React from "react";

const Table = ({ customers }) => {
    return (
        <table className="customers-table">
            <thead className="customers-table__head">
                <tr className="customers-table__head-row">
                    <th className="customers-table__title">Customer Name</th>
                    <th className="customers-table__title">Company</th>
                    <th className="customers-table__title">Phone Number</th>
                    <th className="customers-table__title">Email</th>
                    <th className="customers-table__title">Country</th>
                    <th className="customers-table__title">Status</th>
                </tr>
            </thead>
            <tbody className="customers-table__body">
                {customers.map(item => <tr className="customers-table__body-row" key={item.id}>
                    <td className="customers-table__description" datalabel="Customer Name">{item.Name}</td>
                    <td className="customers-table__description" datalabel="Company">{item.Company}</td>
                    <td className="customers-table__description" datalabel="Phone Number">{item.Phone}</td>
                    <td className="customers-table__description" datalabel="Email">{item.Email}</td>
                    <td className="customers-table__description" datalabel="Country">{item.Country}</td>
                    <td className="customers-table__description" datalabel="Status">
                        <button className={item.Status === "true" ? "customers-table__description-button customers-table__description-button--active" : "customers-table__description-button customers-table__description-button--inactive"}>{item.Status === "true" ? "Active" : "Inactive"}</button>
                    </td>
                </tr>)}
            </tbody>

        </table>
    )
}

export default Table;