import React from 'react';
import { useOutletContext } from 'react-router-dom';

function List() {
    const { employees, handleEdit, handleDelete } = useOutletContext();

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    return (
        <section className="dashboard">
            <div className='contain-table'>
                <table className='striped-table'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Date</th>
                            <th colSpan={2} className="text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length > 0 ? (
                            employees.map((employee, i) => (
                                <tr key={employee.id}>
                                    <td>{i + 1}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{formatter.format(employee.salary)}</td>
                                    <td>{employee.date}</td>
                                    <td className="text-right">
                                        <button
                                            onClick={() => handleEdit(employee.id)}
                                            className="button muted-button"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td className="text-left">
                                        <button
                                            onClick={() => handleDelete(employee.id)}
                                            className="button muted-button"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8} className="text-center">No Employees</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default List;
