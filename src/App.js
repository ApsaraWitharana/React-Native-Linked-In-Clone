import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';
import { useEffect } from 'react';
import { auth } from "./firebase";
import { LinkedInBgColor, darkPrimary } from "./assets/Colors";

const App = () => {
  const dispatch = useDispatch();
  const {displayName} = useSelector((state) => state.user);

  const muiTheme = createMuiTheme({
    palette:{
      type:mode ? "dark" : "light",
    },
  });

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(LoginAction(authUser));
      }else{
        dispatch(LogoutAction());
      }
    });
  },[]);

  return (
    <ThemeProvider theme={muiTheme}>
      {!displayName ?(
        <Login/>
      ):(
        <Grid container className = {classes.app} style = {{backgroundColor:mode? darkPrimary : LinkInBgColor}}>
          <Grid item container  className={classes.app__header} style={{boxShadow:mode && "0px 5px 10px -10px rgba(0,0,0,0.75)",}}>

     {/* {Header} */}
     <Header/>
          </Grid>
          <Grid item container className ={classes.app__body}>
            <Hidden smDown>
              <Grid item className={classes.body__sidebar} md={2}>
                {/* Sidebar */}
                <Sidebar />
              </Grid>
            </Hidden>
            <Grid item className={classes.body__feed} xs={12} sm={8} md={5}>
              {/* Feed */}
              <Grid item className={classes.feed__form}>
                <Form />
              </Grid>
              <Grid item className={classes.feed__posts}>
                <Posts />
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid item className={classes.body__widgets} md={3}>
                {/* Widgets */}
                <Widgets />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      )}
    </ThemeProvider>
  );
};

export default App;
