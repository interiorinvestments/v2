import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';

import Page from '../../../components/Page';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100vh',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    paddingTop: 80,
  },
  backButton: {
    marginLeft: theme.spacing(2),
  },
  card: {
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%',
    },
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4),
  },
  icon: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
  },
  logo: {
    width: 50,
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

function LoginView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Login">
      <Container maxWidth="md">
        <Box mb={8} display="flex" alignItems="center">
          <IconButton href="/">
            <img
              src="/img/logos/IIBars.png"
              alt="II"
              className={classes.logo}
            />
          </IconButton>
          <Button href="/" className={classes.backButton}>
            Back to home
          </Button>
        </Box>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Avatar className={classes.icon}>
              <LockIcon fontSize="large" />
            </Avatar>
            <Typography variant="h2" color="textPrimary">
              Sign in
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Sign in on the internal platform
            </Typography>
            <Box mt={3}>
              <LoginForm />
            </Box>
          </CardContent>
          <CardMedia
            className={classes.media}
            image="/img/home/sales3.jpg"
            title="Cover"
          >
            <Typography color="inherit" variant="subtitle1">
              Interior Investments is well-recognized as one of the most
              well-respected dealerships in the office furniture industry.
            </Typography>
            <Box alignItems="center" display="flex" mt={3}>
              <Box ml={3}>
                <Typography color="inherit" variant="body1">
                  Danny Stingley
                </Typography>
                <Typography color="inherit" variant="body2">
                  West Central Divisional Manager at National Office Furniture
                </Typography>
              </Box>
            </Box>
          </CardMedia>
        </Card>
      </Container>
    </Page>
  );
}

export default LoginView;
