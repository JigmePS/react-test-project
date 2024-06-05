import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {

  const employeesData = [
    {
      id: 1,
      firstName: 'Bishal Deep',
      lastName: 'Basnet',
      email: 'bishal@example.com',
      salary: '1000000',
      date: '2019-04-11'
    },
    {
      id: 2,
      firstName: 'Niroj',
      lastName: 'KC',
      email: 'niroj@example.com',
      salary: '10',
      date: '2019-04-17'
    },
    {
      id: 3,
      firstName: 'Isaac',
      lastName: 'Limbu',
      email: 'limbu@example.com',
      salary: '79000',
      date: '2019-05-01'
    },
    {
      id: 4,
      firstName: 'Jack',
      lastName: 'Ma',
      email: 'jma@example.com',
      salary: '56000',
      date: '2019-05-03'
    },
    {
      id: 5,
      firstName: 'Henry',
      lastName: 'Cavil',
      email: 'warhammer@example.com',
      salary: '65000',
      date: '2019-06-13'
    },
    {
      id: 6,
      firstName: 'Steve',
      lastName: 'Jobs',
      email: 'sjobs@example.com',
      salary: '120000',
      date: '2019-07-30'
    },
    {
      id: 7,
      firstName: 'George',
      lastName: 'Washington',
      email: 'george@example.com',
      salary: '90000',
      date: '2019-08-15'
    },
    {
      id: 8,
      firstName: 'Ash',
      lastName: 'Ketchup',
      email: 'pallet@example.com',
      salary: '60000',
      date: '2019-10-10'
    },
    {
      id: 9,
      firstName: 'Matthew',
      lastName: 'Murdock',
      email: 'dared@example.com',
      salary: '71000',
      date: '2019-10-15'
    },
    {
      id: 10,
      firstName: 'Royal',
      lastName: 'Ranger',
      email: 'ranger@example.com',
      salary: '110000',
      date: '2020-01-15'
    }
  ];

  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const employee = employees.filter(employee => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const employee = employees.find(employee => employee.id === id);
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });
        setEmployees(employees.filter(employee => employee.id !== id));
      }
    });
  };

  const contextValue = {
    employees,
    setEmployees,
    selectedEmployee,
    setSelectedEmployee,
    isAdding,
    setIsAdding,
    isEditing,
    setIsEditing,
    handleEdit,
    handleDelete
  };

  return (
    <div className="container">
      <Sidebar />
        <Outlet context={contextValue}/>
    </div>
  );
};

export default Layout;
