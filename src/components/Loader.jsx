import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                my: 10,
                ml: "1px",
                alignItems: 'center'
            }}>
            <CircularProgress />
        </Box>
    )
}

export default Loader