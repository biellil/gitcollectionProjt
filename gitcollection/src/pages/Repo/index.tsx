import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepoInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}
export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="GitCollection" />
        <a href="/">
          <FiChevronLeft />
          Voltar
        </a>
      </Header>

      <RepoInfo>
        <header>
          <img src="" alt="Aluizio Developer" />
          <div>
            <strong>aluiziodeveloper/mini-curso-reactjs</strong>
            <p>Repositorio do mini curso gratuito de reactjs</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>2330</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>210</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>79</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepoInfo>
      <Issues>
        <Link to="/">
          <div>
            <strong>f;lkj lkfjdlkfjk ldjsffjdlkfj</strong>
            <p>sdfkjdslkfjdflkdjsflkdjfdjfksdjf</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};