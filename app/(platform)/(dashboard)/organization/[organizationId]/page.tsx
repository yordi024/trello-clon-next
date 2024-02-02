import { auth } from '@clerk/nextjs';

const organizationPage = () => {
  const { userId, orgId } = auth();

  return <div>hey</div>;
};

export default organizationPage;
