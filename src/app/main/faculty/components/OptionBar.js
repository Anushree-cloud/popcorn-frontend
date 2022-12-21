import { SearchOffRounded } from '@mui/icons-material'
import { Button, Card, IconButton, InputBase } from '@mui/material'
import React from 'react'

function OptionBar() {
  return (
    <div style={{padding: '10px'}}>
      <div style={{
        display:'flex',
        justifyContent: 'flex-end'
      }}>
        <Card sx={{marginRight:'5px', border:'1px solid #888888', padding:'5px', width:'20%', borderRadius:'8px', display:'flex'}}>
            <InputBase sx={{width:'100%'}} placeholder='Search Faculty Name...'/>
            <IconButton>
              <SearchOffRounded />
            </IconButton>  
        </Card>
        
        <Button variant='contained' size='small' sx={{marginRight:'5px'}}>+ Add Faculty</Button>
        <Button variant='contained' size='small' sx={{marginRight:'5px'}}>Give Review</Button>
        
      </div>
    </div>
  )
}

export default OptionBar
