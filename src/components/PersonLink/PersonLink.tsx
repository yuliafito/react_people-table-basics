import { FC } from 'react';
import { Person } from '../../types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type Props = {
  name?: string | null;
  people: Person[];
};

export const PersonLink: FC<Props> = ({ name, people }) => {
  const foundPerson = people.find(p => p.name === name);

  if (!name) {
    return <>-</>;
  }

  if (!foundPerson) {
    return <>{name}</>;
  }

  return (
    <Link
      to={`/people/${foundPerson.slug}`}
      className={classNames({ 'has-text-danger': foundPerson.sex === 'f' })}
    >
      {foundPerson.name}
    </Link>
  );
};
