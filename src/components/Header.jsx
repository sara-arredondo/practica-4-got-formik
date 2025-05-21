import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#272727"}}>
      <AppBar position="static" sx={{ backgroundColor: "#272727", height:'100px', alignItems: 'center' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Game of Thrones
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header