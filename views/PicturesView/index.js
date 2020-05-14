import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ImageGridList from '../../components/ImageGridList';
import Page from '../../components/Page';
import Header from './Header';

const tileData = [
  {
    img: '/img/home/sales3.jpg',
    title: 'Sales',
    cols: 2,
  },
  {
    img: '/img/home/hq.jpg',
    title: 'Sales',
    cols: 1,
  },
  {
    img: '/img/home/kitchen.jpg',
    title: 'Sales',
    cols: 1,
  },
  {
    img: '/img/home/library.jpg',
    title: 'Sales',
    cols: 1,
  },
  {
    img: '/img/home/lounge.jpg',
    title: 'Sales',
    cols: 1,
  },
  {
    img: '/img/home/office.jpg',
    title: 'Sales',
    cols: 1,
  },
  {
    img: '/img/home/sales2.jpg',
    title: 'Sales',
    cols: 2,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const PicturesView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Pictures">
      <Container maxWidth={false}>
        <Header />
        <ImageGridList tileData={tileData} />
      </Container>
    </Page>
  );
};

export default PicturesView;
