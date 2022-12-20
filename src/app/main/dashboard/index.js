import { Grid } from '@mui/material'
import Container from '@mui/material/Container'
import React from 'react'
import Faculty from './components/Faculty'
import Student from './components/Student'

function Dashboard() {
  return (
    <div style={{ padding: '10px' }}>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={6} >
          <Faculty />
        </Grid>
        <Grid item xs={6}>
          <Student />
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Dashboard
