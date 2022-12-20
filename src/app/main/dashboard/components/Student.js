import React from 'react'
import { Card, Divider, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {purple, blue} from '@mui/material/colors';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: blue[500],
    color: theme.palette.common.white,
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const rows = [
  {
    name: 'Student1',
    department: 'department1',
    projects: 3,
    salary: 3500
  },
  {
    name: 'Student2',
    department: 'department2',
    projects: 1,
    salary: 2500
  },
  {
    name: 'Student3',
    department: 'department3',
    projects: 3,
    salary: 3500
  },
  {
    name: 'Student4',
    department: 'department4',
    projects: 2,
    salary: 3000
  },
  {
    name: 'Student1',
    department: 'department1',
    projects: 3,
    salary: 3500
  },
  {
    name: 'Student2',
    department: 'department2',
    projects: 1,
    salary: 2500
  },
  {
    name: 'Student3',
    department: 'department3',
    projects: 3,
    salary: 3500
  },
  {
    name: 'Student4',
    department: 'department4',
    projects: 2,
    salary: 3000
  },
]


function Student() {

  // const classes = useStyles()

  return (
    <div >
      <Card >
        <div style={{padding: '10px'}}>
          <Typography variant='h6'>Student List</Typography>
        </div>
        <Divider />
        <div style={{padding:'10px'}}>
          <TableContainer component={Paper} sx={{maxHeight: 220}}>
              <Table sx={{ minWidth: 700, borderRadius:'5px' }} stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Department</StyledTableCell>
                    <StyledTableCell align="right">Projects</StyledTableCell>
                    <StyledTableCell align="right">Salary ($)</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.department}</StyledTableCell>
                      <StyledTableCell align="right">{row.projects}</StyledTableCell>
                      <StyledTableCell align="right">{row.salary}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
          </TableContainer>
        </div>
      </Card>
    </div>
  )
}

export default Student
