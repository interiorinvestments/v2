import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Page from '../../../components/Page';
import ThemeGallery from '../../../components/ProductIdeas/ThemeGallery';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const CorporateView = ({ themes }) => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Corporate Products">
      <Container maxWidth={false}>
        <Header />
        {themes?.map((theme, index) => (
          <ThemeGallery theme={theme} key={index} />
        ))}
      </Container>
    </Page>
  );
};

export default CorporateView;
