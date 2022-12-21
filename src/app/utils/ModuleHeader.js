import { Divider, Typography } from '@mui/material'
import React from 'react'

function ModuleHeader({ title, icon }) {
  return (
    <div style={{padding:'10px'}}>
        <div style={{display:'flex'}}>
            <span style={{marginRight:'10px'}}>
                {icon}
            </span>
            <Typography sx={{
                fontWeight: 'bolder',
                fontSize: '30px',
                color: 'blue'
            }}>{title}</Typography>
        </div>
        <Divider sx={{
            borderColor: 'blue',
        }}/>
    </div>
  )
}

export default ModuleHeader
