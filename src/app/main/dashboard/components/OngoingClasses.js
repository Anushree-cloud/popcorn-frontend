import { Badge, Card, Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const rows = [
    {
        name: 'class1',
        faculty: 'faculty1',
        studentAttended: 10
    },
    {
        name: 'class1',
        faculty: 'faculty1',
        studentAttended: 10
    },
    {
        name: 'class1',
        faculty: 'faculty1',
        studentAttended: 10
    },
    {
        name: 'class1',
        faculty: 'faculty1',
        studentAttended: 10
    },
    {
        name: 'class1',
        faculty: 'faculty1',
        studentAttended: 10
    },
    {
        name: 'class1',
        faculty: 'faculty1',
        studentAttended: 10
    },
]

function OngoingClasses() {
  return (
    <div>
      <Card sx={{
            padding: '20px',
            boxShadow: '0 0 10px 0px',
            maxHeight:400,
            overflow:'scroll'
        }}>
        <Typography variant='h6' fontWeight='bolder'>Ongoing Classes</Typography>
        <Divider 
            sx={{
                borderColor: '#000000',
                marginBottom: '10px'
            }} 
        />
        <Table sx={{border: '1px solid #dddddd', borderRadius:'5px'}}>
        <TableHead>
          <TableRow sx={{backgroundColor:'#dddddd'}}>
            <TableCell align='center' sx={{fontSize:'15px', padding:'3px'}}>Name</TableCell>
            <TableCell align='center' sx={{fontSize:'15px', padding:'3px'}}>Faculty</TableCell>
            <TableCell align='center' sx={{fontSize:'15px', padding:'3px'}}>Student Attended</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
                key={row.name}
                sx={{ 
                    '&:last-child td, &:last-child th': { border: 0 },
                }}
            >
                <TableCell component="th" scope="row" align='center'>
                    <span style={{marginRight:'10px'}}>
                        <Badge variant='dot' color='success'></Badge>
                    </span>
                    {row.name}
                </TableCell>
                <TableCell align='center'>{row.faculty}</TableCell>
                <TableCell align='center'>{row.studentAttended}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default OngoingClasses
