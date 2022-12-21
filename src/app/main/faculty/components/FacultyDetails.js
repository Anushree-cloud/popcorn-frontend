import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function FacultyDetails() {
    const navigate = useNavigate()
    return (
        <div>
        This is faculty Details page
        <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
    )
}

export default FacultyDetails
