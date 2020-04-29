import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

const Markets = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="overline"
          color="primary"
          align="center"
        >
          Markets
        </Typography>
        <Typography variant="h2" align="center" color="textPrimary">
          We excel at helping clients make smart, long-term investments in the
          places they work, learn, live, and heal.
        </Typography>
        <Box mt={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Box display="flex">
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Business
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Place can powerfully express an organization’s unique
                    culture and help it achieve its business goals. We’ll
                    partner with you to create a workplace that’s efficient,
                    beautiful, and productive.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box display="flex">
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Education
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Create an environment that’s just right for learning. Our
                    research-based approach, deep design expertise, and
                    collaborations with industry thought leaders have helped us
                    create educational spaces that welcome and engage students.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box display="flex">
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Government
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Government agencies need to work smart. Our experience
                    working with local, state, and federal government agencies,
                    combined with our expertise in furniture procurement,
                    delivery, and installation, enables us to provide strategic
                    solutions on time and on budget.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box display="flex">
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Healthcare
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    A well-designed healthcare facility has a profound effect on
                    its patients and employees. When a space perfectly supports
                    the activities of caregivers and provides comfort for
                    patients and family members, it can dramatically increase
                    care quality and patient satisfaction.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

Markets.propTypes = {
  className: PropTypes.string,
};

export default Markets;
