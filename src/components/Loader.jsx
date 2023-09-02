import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 100,
                translate: '5px 0px',
            }}>
            <CircularProgress />
        </Box>
    )
}

export default Loader