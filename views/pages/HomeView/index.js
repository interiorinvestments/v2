import Page from '../../../components/Page';
import { useUser } from '../../../lib/hooks';
import Footer from './Footer';
import FurnitureFanatics from './FurnitureFanatics';
import Hero from './Hero';
import Markets from './Markets';
import Testimonials from './Testimonials';

const HomeView = () => {
  const [user] = useUser();
  return (
    <Page title="Home Page">
      <Hero />
      {user && <h1>User: {user.username}</h1>}
      <FurnitureFanatics />
      <Testimonials />
      <Markets />
      <Footer />
    </Page>
  );
};

export default HomeView;
