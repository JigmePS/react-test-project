import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

import List from '../EmployeeManagement/EmployeeList';
import Add from '../EmployeeManagement/EmployeeAdd';
import Edit from '../EmployeeManagement/EmployeeEdit';

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
      firstName: 'Rolf',
      lastName: 'Hegdal',
      email: 'rolf@example.com',
      salary: '79000',
      date: '2019-05-01'
    },
    {
      id: 4,
      firstName: 'Kent',
      lastName: 'Rosner',
      email: 'kent@example.com',
      salary: '56000',
      date: '2019-05-03'
    },
    {
      id: 5,
      firstName: 'Arsenio',
      lastName: 'Grant',
      email: 'arsenio@example.com',
      salary: '65000',
      date: '2019-06-13'
    },
    {
      id: 6,
      firstName: 'Laurena',
      lastName: 'Lurie',
      email: 'laurena@example.com',
      salary: '120000',
      date: '2019-07-30'
    },
    {
      id: 7,
      firstName: 'George',
      lastName: 'Tallman',
      email: 'george@example.com',
      salary: '90000',
      date: '2019-08-15'
    },
    {
      id: 8,
      firstName: 'Jesica',
      lastName: 'Watlington',
      email: 'jesica@example.com',
      salary: '60000',
      date: '2019-10-10'
    },
    {
      id: 9,
      firstName: 'Matthew',
      lastName: 'Warren',
      email: 'matthew@example.com',
      salary: '71000',
      date: '2019-10-15'
    },
    {
      id: 10,
      firstName: 'Lyndsey',
      lastName: 'Follette',
      email: 'lyndsey@example.com',
      salary: '110000',
      date: '2020-01-15'
    }
  ];

  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const employee = employees.find(employee => employee.id === id);
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
      {/* <Outlet
        context={{
          employees,
          setIsAdding,
          setEmployees,
          handleEdit,
          handleDelete,
          selectedEmployee,
          setIsEditing,
        }}
      /> */}
        {/* {!isAdding && !isEditing && (
          <>
            <List
              setIsAdding={setIsAdding}
              employees={employees}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        )}
        {isAdding && (
          <Add
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
          />
        )}
        {isEditing && (
          <Edit
            employees={employees}
            selectedEmployee={selectedEmployee}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing}
          />
        )} */}
        <Outlet context={contextValue}/>
    </div>
  );
};

export default Layout;
