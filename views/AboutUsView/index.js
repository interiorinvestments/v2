import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

import Page from '../../components/Page';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const AboutUsView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="About Us">
      <Container maxWidth={false}>
        <Header />
        <Container maxWidth="md">
          <Typography color="primary" variant="h1" align="center" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h2" gutterBottom>
            Our Company
          </Typography>
          <Typography variant="h4" gutterBottom>
            In 1994, a small group of upstart furniture fanatics led by Donald
            Shannon and Michael Greenberg started Interior Investments in
            Chicago's northern suburbs. Since then, we have grown to become one
            of the most efficient and reliable contract office furniture
            dealerships in the United States.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We’ve always believed that your furniture is an asset. A chair isn’t
            simply a place to sit, and a desk isn’t just a work surface—they’re
            long-term investments. The right selection today can create a sense
            of place, reinforce your brand, enhance productivity and health, and
            improve employee satisfaction, engagement, and retention far into
            the future.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <a
              href="https://interiorinvestments.com/certified-dealer"
              target="_blank"
              rel="noreferrer"
            >
              Certified by Herman Miller
            </a>{' '}
            since 2001 and recognized as a national performance leader for our
            pioneering work in process innovation, we’ve earned our reputation
            as a valuable strategic partner, and look forward to helping you
            create beautiful, productive environments to support your people and
            grow your business.
          </Typography>
          <Typography variant="body1" gutterBottom>
            From fast-growing startups and regional companies to massive
            national and global organizations like Blue Cross Blue Shield and
            United Airlines, we excel at helping clients make smart, long-term
            investments in the places they work, learn, live, and heal.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Financial Strength</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            An investment’s value is proven over time, and the intentional
            investments we’ve made in our people, our processes, and our
            partnerships have helped ensure that Interior Investments is as
            strong tomorrow as it is today. From our modest beginnings, we went
            on to earn recognition from Inc. Magazine as one of the
            fastest-growing companies in America. Over the last decade, we’ve
            averaged annual revenues of more than 120 million dollars. We’ve
            been profitable every year we’ve been in business, and our
            organization is virtually debt-free. When you work with us, you can
            be confident that our partnership will stand the test of time, and
            that our team will be there to support your long-term growth for
            years to come.
          </Typography>
          <blockquote>
            <Typography variant="body1">
              “Interior Investments is well-recognized as one of the most
              well-respected dealerships in the office furniture industry.” —{' '}
              <em>
                Danny Stingley, West Central Divisional Manager at{' '}
                <a
                  href="https://www.nationalofficefurniture.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  National Office Furniture
                </a>
              </em>
            </Typography>
          </blockquote>
        </Container>
      </Container>
    </Page>
  );
};

export default AboutUsView;
