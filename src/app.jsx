import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <header>
        <span className='title'>LiTHe Hax</span>
        <nav>
          <Link to="/" className="button">Home</Link>
          <Link to="/new-member" className="button">Member</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App;
