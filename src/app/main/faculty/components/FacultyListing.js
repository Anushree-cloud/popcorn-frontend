import React from 'react'
import { Card, Paper, InputBase, IconButton, Pagination } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import ModuleHeader from '../../../utils/ModuleHeader';
import OptionBar from './OptionBar';
import { SchoolRounded, Search, SearchOffRounded } from '@mui/icons-material';
import { Stack } from '@mui/system';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: blue[500],
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    curser: 'pointer',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    curser: 'pointer',
  },
}));



const rows = [
  {
    id:1,
    name: 'Faculty1',
    department: 'department1',
    projects: 3,
    salary: 3500
  },
  {
    id:2,
    name: 'Faculty2',
    department: 'department2',
    projects: 1,
    salary: 2500
  },
  {
    id:3,
    name: 'Faculty3',
    department: 'department3',
    projects: 3,
    salary: 3500
  },
  {
    id:4,
    name: 'Faculty4',
    department: 'department4',
    projects: 2,
    salary: 3000
  },
  {
    id:5,
    name: 'Faculty1',
    department: 'department1',
    projects: 3,
    salary: 3500
  },
  {
    id:6,
    name: 'Faculty2',
    department: 'department2',
    projects: 1,
    salary: 2500
  },
  {
    id:7,
    name: 'Faculty3',
    department: 'department3',
    projects: 3,
    salary: 3500
  },
  {
    id:8,
    name: 'Faculty4',
    department: 'department4',
    projects: 2,
    salary: 3000
  },
]


function FacultyListing() {

  // const classes = useStyles()
  const navigate = useNavigate()

  return (
    <div >
      <div>

        <ModuleHeader title={'Faculty List'} icon={<SchoolRounded style={{fontSize:'45px', color: 'blue'}}/>} />

        
        
        <div style={{padding:'10px'}}>
          <Card sx={{padding:'10px 30px', backgroundColor:'#f1f1f1'}}>

            <OptionBar />

            <TableContainer component={Paper}>
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
                      <StyledTableRow key={row.id} onClick={() => navigate(`/employee/faculties/${row.id}`)}>
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

            <div style={{display:'flex', justifyContent:'flex-end', marginTop:'10px'}}>
              <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
            
            
          </Card>
        </div>
      </div>
    </div>
  )
}

export default FacultyListing
