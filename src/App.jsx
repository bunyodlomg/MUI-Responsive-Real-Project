import { Box, Stack, createTheme } from '@mui/material';
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import Add from './components/Add';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'

const App = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" mx={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
