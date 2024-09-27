import { Link, Outlet } from 'react-router-dom';

import './styles/variables.css';
import './styles/app.css';
import './styles/components/inputs.css';
import './styles/components/misc.css';

function App() {
  return (
    <div className='app'>
      <header>
        <span className='title'>LiTHe Hax</span>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new-member">Member</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App;
