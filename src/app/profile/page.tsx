import { getServerSession } from 'next-auth';
import { authConfig } from '@/configs/auth';

export default async function ProfilePage() {
  const session = await getServerSession(authConfig);

  return <div>Profile {session?.user?.email}</div>;
}
