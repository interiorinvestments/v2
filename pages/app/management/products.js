import { useEffect } from 'react';
import { useRouter } from 'next/router';

import LoadingScreen from '../../../components/LoadingScreen';
import DashboardLayout from '../../../layouts/DashboardLayout';
import { useUser } from '../../../lib/hooks';

const AppPage = () => {
  const [user, { loading }] = useUser();
  const router = useRouter();
  useEffect(() => {
    // redirect user to login if not authenticated
    if (!loading && !user) router.replace('/login');
  }, [loading, router, user]);

  return <LoadingScreen />;
};

export default AppPage;
