import React from "react";

const Table = () => {
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
                <tr className="table__body-row">
                    <td className="table__description" datalabel="Customer Name">Jane Cooper</td>
                    <td className="table__description" datalabel="Company">Microsoft</td>
                    <td className="table__description" datalabel="Phone Number">(225) 555-0118</td>
                    <td className="table__description" datalabel="Email">jane@microsoft.com</td>
                    <td className="table__description" datalabel="Country">United States</td>
                    <td className="table__description" datalabel="Status">
                        <button className="table__description-button table__description-button--active">Active</button>
                    </td>
                </tr>
                <tr className="table__body-row">
                    <td className="table__description">Floyd Miles</td>
                    <td className="table__description">Yahoo</td>
                    <td className="table__description">(205) 555-0100</td>
                    <td className="table__description">floyd@yahoo.com</td>
                    <td className="table__description">Kiribati</td>
                    <td className="table__description">
                        <button className="table__description-button table__description-button--inactive">Inactive</button>
                    </td>
                </tr>
            </tbody>

        </table>
    )
}

export default Table;