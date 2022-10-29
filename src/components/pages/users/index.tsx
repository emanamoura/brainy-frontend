import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import UserCard from '@/components/common/user-card/user-card';
import styles from '@/components/pages/users/styles.module.css';
import useAPI from '@/hooks/api/use-api/use-api';
import UserHobbie from '@/models/user-hobbie/user-hobbie';

const Users = () => {
  const [usersHobbie, setUsersHobbie] = useState<UserHobbie[]>([]);
  const api = useAPI();
  const router = useRouter();
  useEffect(() => {
    async function fetchUsers() {
      const usersFromResponse = await api.brainy.users.getAll();
      if (usersFromResponse.length === 0) {
        router.push('/');
      }
      if (usersFromResponse) {
        setUsersHobbie([...usersFromResponse]);
      }
    }
    fetchUsers();
  }, [api.brainy.users, router, usersHobbie]);

  return (
    <section className={styles.container}>
      {usersHobbie.map((userHobbie) => {
        return <UserCard key={userHobbie.user().id()} userHobbie={userHobbie} />;
      })}
    </section>
  );
};

export default Users;
