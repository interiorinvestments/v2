import Page from '../../../components/Page';
import Footer from './Footer';
import FurnitureFanatics from './FurnitureFanatics';
import Hero from './Hero';
import Markets from './Markets';
import Testimonials from './Testimonials';

const HomeView = () => (
  <Page title="Home Page">
    <Hero />
    <FurnitureFanatics />
    <Testimonials />
    <Markets />
    <Footer />
  </Page>
);

export default HomeView;
