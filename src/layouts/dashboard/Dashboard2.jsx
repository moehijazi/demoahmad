import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';

import Orders from './Orders';
import { Button } from '@mui/material';
import { useAuth } from '../../Auth/AuthWrapper';
import Title from './Title';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import Axios from "axios";
import InputForm from '../../Components/InputForm';
import NumbersTable from '../../Components/NumbersTable';



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - 0)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const auth = useAuth();
  const [open, setOpen] = React.useState(true);

  const [numbers,setNumbers] = useState([]);
  const [pendingNumbers, setPendingNumbers] = useState([]);
  const [completedNumbers, setCompletedNumbers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        // const resp = await Axios({
        //   method: "GET",
        //   url: "http://localhost:9000/api/user/numbers",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });

        const data = {
          "pending_count": 8,
          "total_contacts": 10,
          "completed_count": 2,
          "pending": [
              {
                  "phone_number": "96170011212",
                  "name": "Joey",
                  "user_id": 3,
                  "chain": 1,
                  "level": 2,
                  "status": "no contact made",
                  "Referral": "Dane"
              },
              {
                  "phone_number": "96100000000",
                  "name": "Joyce",
                  "user_id": 3,
                  "chain": 2,
                  "level": 0,
                  "status": "no contact made",
                  "Referral": "Root Participant"
              },
              {
                  "phone_number": "96111111111",
                  "name": "Levi",
                  "user_id": 3,
                  "chain": 2,
                  "level": 1,
                  "status": "contact made waiting consent",
                  "Referral": "Joyce"
              },
              {
                "phone_number": "96122222222",
                "name": "Dante",
                "user_id": 3,
                "chain": 2,
                "level": 2,
                "status": "no contact made",
                "Referral": "Levi"
            },
            {
              "phone_number": "96133333333",
              "name": "Angie",
              "user_id": 3,
              "chain": 3,
              "level": 0,
              "status": "no contact made",
              "Referral": "Root Participant"
          },
          {
              "phone_number": "96144444444",
              "name": "Rene",
              "user_id": 3,
              "chain": 3,
              "level": 1,
              "status": "contact made waiting consent",
              "Referral": "Angie"
          },
          {
            "phone_number": "96155555555",
            "name": "Albert",
            "user_id": 3,
            "chain": 3,
            "level": 2,
            "status": "no contact made",
            "Referral": "Rene"
        },
        {
          "phone_number": "96166666666",
          "name": "Vivian",
          "user_id": 3,
          "chain": 4,
          "level": 0,
          "status": "no contact made",
          "Referral": "Root Participant"
      },
          ],
          "completed": [
              {
                  "phone_number": "96177777777",
                  "name": "Jane",
                  "user_id": 3,
                  "chain": 1,
                  "level": 0,
                  "status": "participated",
                  "Referral": "Root Participant"
              },
              {
                  "phone_number": "96188888888",
                  "name": "Dane",
                  "user_id": 3,
                  "chain": 1,
                  "level": 1,
                  "status": "declined",
                  "Referral": "Jane"
              }
          ]
      }

        
        setPendingNumbers(data.pending);
    setCompletedNumbers(data.completed);
    setNumbers(resp.data);
      } catch (err) {}
    };
    fetchNumbers();
  }, []);

  useEffect(() => {
    
    if (numbers) {
      setLoading(false);
    }
  }, [numbers]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  
  const Logout = () =>{auth.logout()}


  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              User Dashboard
            </Typography>
            <Button onClick={Logout} variant="contained" color="error">
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          
          {loading ? (
            <p>Loading</p>
          ) : (
            <Grid container spacing={3}>
            {/* INPUT FORM */}
            <Grid item xs={12}>         
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <InputForm />
              </Paper>
              </Grid>
              
              {/* Total Calls*/}
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                  }}
                >
                  <Title>Total Calls</Title>
                    <Typography component="p" variant="h4">
                      8 / 10
                    </Typography>
                </Paper>
              </Grid>

              
              {/* Tables*/}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Title>Pending Calls</Title> Double click to edit
                  <NumbersTable nums={pendingNumbers} />
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Title>Completed Calls</Title> Double click to edit
                  <NumbersTable nums={completedNumbers} />
                </Paper>
              </Grid>
          
              </Grid>
            )}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
