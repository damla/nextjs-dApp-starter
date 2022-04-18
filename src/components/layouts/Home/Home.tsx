import { Header, Main } from '../../modules';

type Props = {
  children: React.ReactNode;
};

const Home = ({ children }: Props) => (
  <div>
    <Header title="home" />
    <Main>{children}</Main>
  </div>
);

export default Home;
