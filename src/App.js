import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetApiResponse } from "./API/ApiService";
import { Navbar } from 'react-bootstrap';
import Logo from "./Images/godaddy-logo.png";
import "./App.css";

function App() {
  //setting state value to store repository data response
  const [repoData, setRepoData] = useState([]);

  const getDataFromRepo = async () => {
    //utilize APIService to get repo info from given end point
    try {
      const response = await GetApiResponse('/orgs/godaddy/repos', 'GET');
      setRepoData(response);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getDataFromRepo();
  }, [])

  return (
    <div>
      <Navbar bg="dark" className="justify-content-left">
        <Navbar.Brand className="text-light">
          <span>
            <img
              alt="GoDaddy Logo"
              height="50"
              width="180"
              src={Logo}
            />
          </span>
          <span className="navbar-title">
            GitHub Repositories List
          </span>
        </Navbar.Brand>
      </Navbar>
      <div>
        <ol>
          {repoData.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );


};

export default App;
