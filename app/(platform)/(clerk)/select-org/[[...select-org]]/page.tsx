import { OrganizationList } from '@clerk/nextjs';

export default function CreateOrganizationList() {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl="/organization/:id"
      afterSelectOrganizationUrl="/organization/:id"
    />
  );
}
