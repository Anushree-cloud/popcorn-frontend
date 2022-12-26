import React from 'react'
import { Card, Divider } from '@mui/material'

function StatCard({
    headerName,
    value,
    icon,
    onClickHandler = undefined
}) {
   
  return (
    <div>
       <Card 
            sx={{
                height: 100,
                width: 250,
                padding: '10px',
                backgroundColor: 'ButtonFace',
                boxShadow: '0 0 6px 0px',
                border: '1px solid black',
                cursor: onClickHandler ? 'pointer' : 'default'
            }}
            onClick={onClickHandler ? onClickHandler : undefined}
        >
            <div style={{ 
                display: 'flex',
                height: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
                border: '2px solid purple',
                borderRadius: '5px'
                }}>
                <div > {icon} </div>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    width: '65%'
                }}>
                    <div style={{padding:'5px 10px', fontWeight:'bolder'}}>{headerName}</div>
                    <Divider />
                    <div style={{padding:'5px 10px', fontSize:'20px'}}>{value}</div>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default StatCard
