import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Button from '@/components/common/button/button';
import Checkbox from '@/components/common/checkbox';
import Input from '@/components/common/input/input';
import Page from '@/components/common/page/page';
import styles from '@/components/pages/create/create/styles.module.css';
import useAPI from '@/hooks/api/use-api/use-api';
import City from '@/models/city/city';
import Hobbie from '@/models/hobbie/hobbie';

import { PAGE_TITLE, TOAST_CONFIGS } from './constants';
import { createSchema } from './schema/create-schema';

const Create: FC = () => {
  const api = useAPI();
  const router = useRouter();
  const [showErrors, setShowErrors] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('Acre');
  const [citiesId, setCitiesId] = useState<City[]>([]);
  const [hobbies, setHobbies] = useState<Hobbie[]>([]);
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  useEffect(() => {
    async function fetchCities() {
      const citiesResponse = await api.brainy.city.get();
      setCities(citiesResponse);
    }
    fetchCities();
  }, [api.brainy.city]);

  useEffect(() => {
    async function fetchHobbies() {
      const hobbiesResponse = await api.brainy.hobbie.get();
      setHobbies(hobbiesResponse);
    }
    fetchHobbies();
  }, [api.brainy.hobbie]);

  useEffect(() => {
    const statesResponse = cities
      ?.map((citie) => citie.state())
      .filter((state, index, self) => {
        return self.indexOf(state) === index;
      });
    setStates([...statesResponse].sort());
  }, [cities]);

  useEffect(() => {
    const citiesIds = cities.filter((city) => city.state() === selectedState);
    setCitiesId([...citiesIds].sort());
  }, [cities, selectedState]);

  const { values, errors, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: '',
      email: '',
      cityId: '',
      hobbies: [''],
    },
    validationSchema: createSchema,
    onSubmit: async (values) => {
      const userData = {
        name: values.name,
        email: values.email,
        cityId: values.cityId,
        hobbies: values.hobbies,
      };
      try {
        await api.brainy.users.create(userData);
        toast.success('Usuário criado com sucesso!', TOAST_CONFIGS);
        router.push('/users');
      } catch (error) {
        if (!(error instanceof AxiosError)) throw error;
        if (error.response?.status === 400) {
          toast.error('Opa, esse usuário já existe visse !', TOAST_CONFIGS);
        }
      }
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setFieldValue('cityId', selectedCity);
    setFieldValue('hobbies', [...selectedHobbies]);
    setShowErrors(true);
    handleSubmit(e);
  };

  return (
    <Page title={PAGE_TITLE}>
      <section className={styles.container}>
        <div className={styles.box}>
          <p className={styles.welcomeText}>Bem vindo ao CRUD da Brainy Digital</p>
          <p className={styles.grayText}>Por favor, teste e crie um usuário !</p>
          <form onSubmit={onSubmit}>
            <Input
              name="name"
              type="name"
              value={values.name}
              placeholder="Digite seu nome"
              onChange={handleChange}
              errorMessage={showErrors ? errors.name : ''}
              isRequired
            />
            <Input
              name="email"
              type="email"
              value={values.email}
              placeholder="Digite seu e-mail"
              onChange={handleChange}
              errorMessage={showErrors ? errors.email : ''}
              isRequired
            />
            <select
              value={selectedState}
              placeholder="Escolher estado"
              onChange={(e) => setSelectedState(e.target.value)}
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <select
              value={selectedCity}
              placeholder="Escolher a cidade"
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {citiesId.map((city) => (
                <option key={city.id()} value={city.id()}>
                  {city.city()}
                </option>
              ))}
            </select>
            <Checkbox
              title="Escolha seus hobbies"
              options={hobbies}
              selectedOptions={selectedHobbies}
              onChange={setSelectedHobbies}
            />
            <div className={styles.buttons}>
              <div className={styles.button}>
                <Button variant="secondary" type="submit">
                  Criar usuário
                </Button>
              </div>
              <div className={styles.button}>
                <Link href="/users">
                  <Button variant="secondary">Ver todos os usuários</Button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Page>
  );
};

export default Create;
