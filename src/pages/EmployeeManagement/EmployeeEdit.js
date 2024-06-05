import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useOutletContext } from "react-router-dom";
import "./EditEmployee.css"; // Ensure the CSS file is created and linked properly
// import { useParams } from "react-router-dom";

function EmployeeEdit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    // const { userId } = useParams();
    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <>
            <section className="dashboard">
                <div>
                    <div className="topnav">
                        <span>Edit Employee</span>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleUpdate} className="addform">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                className="field"
                                type="text"
                                // ref={textInput}
                                name="firstName"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)} />
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                className="field"
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)} />
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                className="field"
                                type="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                            <label htmlFor="salary">Salary ($)</label>
                            <input
                                id="salary"
                                className="field"
                                type="number"
                                name="salary"
                                value={salary}
                                onChange={e => setSalary(e.target.value)} />
                            <label htmlFor="date">Date</label>
                            <input
                                id="date"
                                className="dfield"
                                type="date"
                                name="date"
                                value={date}
                                onChange={e => setDate(e.target.value)} />
                            <input type="submit" value="Update" />
                            <input
                                style={{ marginLeft: '12px' }}
                                className="taddbtn"
                                type="button"
                                value="Cancel"
                                onClick={() => setIsEditing(false)} />
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EmployeeEdit