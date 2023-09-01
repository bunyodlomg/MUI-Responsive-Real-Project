import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                mb: 5
            }}>
            <CircularProgress />
        </Box>
    )
}

export default Loader