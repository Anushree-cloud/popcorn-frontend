import { Card, Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import StatCard from '../../../utils/customCards/StatCard'
import FeedSharpIcon from '@mui/icons-material/FeedSharp';
import { useNavigate } from 'react-router-dom';


function EmployeeStat() {
    
    const navigate = useNavigate()

    const goToDetailsPage = (path) => navigate(path)
    
    return (
        <div>
            <Card sx={{
                padding: '20px',
                boxShadow: '0 0 10px 0px',
            }}>
                <Typography variant='h6' fontWeight='bolder'>Employee Statistics</Typography>
                <Divider 
                    sx={{
                        borderColor: '#000000',
                        marginBottom: '25px'
                    }} 
                />
                <Grid container spacing={2} justifyContent='center' sx={{
                    flexDirection: useMediaQuery('(min-width:1500px)') ? 'row' : 'column' 
                    // flexDirection: 'column'
                }}>
                    <Grid item xs={4}>
                        <StatCard 
                            headerName={'Faculty Count'}
                            value={6}
                            icon={<FeedSharpIcon style={{fontSize:'50px', color:'blue'}} />}
                            onClickHandler={() => goToDetailsPage('/employee/faculties')}
                        />
                    </Grid>
                    <Grid item xs={4} direction='row'>
                        <StatCard 
                            headerName={'Faculty Count'}
                            value={6}
                            icon={<FeedSharpIcon style={{fontSize:'50px', color:'blue'}} />}    
                        />
                    </Grid>
                    <Grid item xs={4} direction='row'>
                        <StatCard 
                            headerName={'Faculty Count'}
                            value={6}
                            icon={<FeedSharpIcon style={{fontSize:'50px', color:'blue'}} />}    
                        />
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default EmployeeStat
