import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useOutletContext } from "react-router-dom";
import "./EditEmployee.css"; // Ensure the CSS file is created and linked properly

function AddEmployee() {
    const { employees, setEmployees, setIsAdding } = useOutletContext();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, []);

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length ? employees[employees.length - 1].id + 1 : 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        };

        setEmployees([...employees, newEmployee]);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been added.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <section className="dashboard">
            <div>
                <div className="topnav">
                    <span>Add Employee</span>
                </div>
                <div className="form-container">
                    <form onSubmit={handleAdd} className="addform">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            className="field"
                            type="text"
                            ref={textInput}
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            className="field"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            className="field"
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="salary">Salary ($)</label>
                        <input
                            id="salary"
                            className="field"
                            type="number"
                            name="salary"
                            value={salary}
                            onChange={e => setSalary(e.target.value)}
                        />
                        <label htmlFor="date">Date</label>
                        <input
                            id="date"
                            className="dfield"
                            type="date"
                            name="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                        <input type="submit" value="Add" className="taddbtn" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AddEmployee;
