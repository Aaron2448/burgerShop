import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [user, setUser] = useState({});
    const jwt = localStorage.getItem('token');

    useEffect(() => {
        const fetchUser = async () => {
  
            try {
                const response = await fetch('http://localhost:8080/api/v1/user/getProfile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    throw new Error('Failed to fetch user profile');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);

    const handleLogout = async () => {

        try {
            const response = await fetch('http://localhost:8080/api/v1/user/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.ok) {
                localStorage.removeItem('token');
                navigate('/login');
                window.location.reload();
            } else {
                throw new Error('Failed to logout user');
            }
            
        } catch (error) {
            console.error(error);
        }
        
    };
    
    const handleOpenUserMenu = (event) => {setAnchorElUser(event.currentTarget)};
    const handleCloseUserMenu = () => {setAnchorElUser(null)};
    
  return (
	 
    <AppBar class="fixed text-white bg-dark">

      <Container maxWidth="xl" >
        <Toolbar disableGutters >

	          <Typography className="icon-left-nav-bar">
	             AMA
	          </Typography>
	          
	          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
	           
	              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
	                <Link style={{ textDecoration: 'none', color: "white" }} to='/register'>Register</Link>
	              </Button>
	              
	              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
	                <Link style={{ textDecoration: 'none', color: "white" }} to='/login'>Login</Link>
	              </Button>
	              
	              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
	                <Link style={{ textDecoration: 'none', color: "white" }} to='/trainees'>Trainees</Link>
	              </Button>
	              
	              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
	                <Link style={{ textDecoration: 'none', color: "white" }} to='/trainers'>Trainers</Link>
	              </Button>
	              
	              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
	                <Link style={{ textDecoration: 'none', color: "white" }} to='/academies'>Academies</Link>
	              </Button>
	              
	              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
	                <Link style={{ textDecoration: 'none', color: "white" }} to='/hamburgerStall'>HamburgerStall</Link>
	              </Button>
	              
	          </Box>
          
	          <Box sx={{ flexGrow: 0 }}>
	          
		            <Tooltip title="User Account">
		              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1, color: 'white' }}>
		                <AccountCircleIcon />
		                  {user.name}
		              </IconButton>
		            </Tooltip>
            
		            <Menu
		              sx={{ mt: '45px' }}
		              id="menu-appbar"
		              anchorEl={anchorElUser}
		              anchorOrigin={{
		                vertical: 'top',
		                horizontal: 'right',
		              }}
		              keepMounted
		              transformOrigin={{
		                vertical: 'top',
		                horizontal: 'right',
		              }}
		              open={Boolean(anchorElUser)}
		              onClose={handleCloseUserMenu}
		            >
	                {!jwt && (
	                    <>    
	                            <MenuItem>
	                                <Typography textAlign="center">
	                                    <Link style={{ textDecoration: 'none', color: "black" }} to='/register'>Register</Link>
	                                </Typography>
	                            </MenuItem>
	                            
	                            <MenuItem>
	                                <Typography textAlign="center">
	                                    <Link style={{ textDecoration: 'none', color: "black" }} to='/login'>Login</Link>
	                                </Typography>
	                            </MenuItem>  
	                    </>
	                )}
	                {jwt && (
	                    <>                 
	                            <MenuItem onClick={handleLogout}>
	                                <Typography textAlign="center">Logout</Typography>
	                            </MenuItem>
	                    </>
	                )}
	            	</Menu>

          		</Box>
        </Toolbar>
      </Container>
   
    </AppBar>

  );
}
export default Header