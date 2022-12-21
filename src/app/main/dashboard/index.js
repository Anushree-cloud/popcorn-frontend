import { Grid } from '@mui/material';
import React from 'react'
import EmployeeStat from './components/EmployeeStat'
import OngoingClasses from './components/OngoingClasses';
console.log('3=>',EmployeeStat);
function Dashboard() {
  return (
    <div style={{ padding: '10px' }}>
      
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <EmployeeStat />
        </Grid>
        <Grid item xs={4}>
          <OngoingClasses />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
