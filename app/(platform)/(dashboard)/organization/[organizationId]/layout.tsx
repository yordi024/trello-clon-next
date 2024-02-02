import { OrgControl } from './_components/org-control';

const OrganizationPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationPageLayout;
