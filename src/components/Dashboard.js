import React from 'react';
import CustomButton from './Button';
import Form from './Form';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <CustomButton variant="contained" color="primary">Primary Button</CustomButton>
      <CustomButton variant="outlined" color="secondary">Secondary Button</CustomButton>
      <Form />
    </div>
  );
};

export default Dashboard;
