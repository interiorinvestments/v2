import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    '& dt': {
      marginTop: theme.spacing(2),
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(1),
  },
}));

const Footer = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" color="textPrimary">
              Interior Investments
            </Typography>
            <span className={classes.iconContainer}>
              <PhoneIcon />
              &nbsp;
              <Typography variant="body2">
                <Link color="textPrimary" href="tel:847-325-1000">
                  847-325-1000
                </Link>
              </Typography>
            </span>
            <span className={classes.iconContainer}>
              <EmailIcon />
              &nbsp;
              <Typography variant="body2">
                <Link
                  color="textPrimary"
                  href="mailto:info@interiorinvestments.com"
                >
                  info@interiorinvestments.com
                </Link>
              </Typography>
            </span>
            <span className={classes.iconContainer}>
              <LocationOnIcon />
              &nbsp;
              <Typography variant="body2">
                <Link
                  color="textPrimary"
                  href="http://google.com/maps/dir//550%20Bond%20St%20Lincolnshire%20IL%2060069"
                >
                  550 Bond St Lincolnshire, IL 60069
                </Link>
              </Typography>
            </span>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" color="textPrimary">
              Reach Out
            </Typography>
            <Typography variant="body2">
              <Link
                color="textPrimary"
                href="https://interiorinvestments.com/contact"
              >
                Contact Us
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link
                color="textPrimary"
                href="https://interiorinvestments.com/showrooms"
              >
                Visit Showroom
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" color="textPrimary">
              Follow Us
            </Typography>
            <IconButton
              color="primary"
              href="https://facebook.com/InteriorInvestments/"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://instagram.com/interior_investments/"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://linkedin.com/company/interior-investments/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://pinterest.com/interiorinvestments/"
              target="_blank"
            >
              <PinterestIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://twitter.com/interior_invest"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://youtube.com/user/InteriorInvestments"
              target="_blank"
            >
              <YouTubeIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" color="textPrimary">
              <Link
                color="textPrimary"
                href="https://visitor.r20.constantcontact.com/manage/optin?v=0011WP7IlgRMnRefWHS1Lx7Vhy_q_Bh5innuboaWPNC-6GraRjk6YmxjByVy6xioIXHc_REIxSz5Fp5mc4-J0vzDpSohanyN6zgHe0dPLRjBE0%3D"
              >
                Sign Up for Our Mailing List
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Box my={3}>
          <Divider />
        </Box>
        <Grid container spacing={3}>
          <Grid item>
            <Typography variant="body2">
              With office locations in Lincolnshire, IL — Chicago, IL — St.
              Louis, MO — Madison, WI — Milwaukee, WI.{' '}
              <Link
                color="textSecondary"
                href="https://interiorinvestments.com/showrooms"
                target="_blank"
              >
                View All Locations
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="caption">
            <Link
              color="textSecondary"
              href="https://interiorinvestments.com/legal/terms-of-use"
            >
              Terms of Use
            </Link>{' '}
            |{' '}
            <Link
              color="textSecondary"
              href="https://interiorinvestments.com/legal/privacy-policy"
            >
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link color="textSecondary" href="https://interiorinvestments.com/">
              {' '}
              &copy; Interior Investments
            </Link>
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
