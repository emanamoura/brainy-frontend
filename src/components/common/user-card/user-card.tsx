import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from '@/components/common/user-card/styles.module.css';
import useAPI from '@/hooks/api/use-api/use-api';
import UserHobbie from '@/models/user-hobbie/user-hobbie';

import Button from '../button/button';

interface Props {
  userHobbie: UserHobbie;
}

const UserCard: FC<Props> = ({ userHobbie }) => {
  const api = useAPI();
  const router = useRouter();

  const handleDelete = async (userId: string) => {
    await api.brainy.users.delete(userId);
  };

  return (
    <div className={styles.container}>
      <h2>Nome: {userHobbie.user().name()}</h2>
      <p>Email: {userHobbie.user().email()}</p>
      <div>
        <p>Cidade: {userHobbie.user().city().city()}</p>
        <p>Estado: {userHobbie.user().city().state()}</p>
      </div>
      <div>
        <p>Hobbies</p>
        <ul>
          {userHobbie.hobbies().map((hobbie) => (
            <li>{hobbie.name()}</li>
          ))}
        </ul>
      </div>
      <div className={styles.buttons}>
        <Button
          variant="secondary"
          onClick={() => router.push(`/users/edit/${encodeURIComponent(userHobbie.user().id())}`)}
        >
          Editar
        </Button>
        <Button variant="secondary" onClick={() => handleDelete(userHobbie.user().id())}>
          Excluir
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
