import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div>
        <Link
          to="/redux"
          style={{
            display: 'inline-block',
            padding: '10px',
            backgroundColor: 'blue',
            color: 'white',
            margin: '10px',
          }}
        >
          Redux
        </Link>
        <Link
          to="/zustand"
          style={{
            display: 'inline-block',
            padding: '10px',
            backgroundColor: 'blue',
            color: 'white',
            margin: '10px',
          }}
        >
          Zustand
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
