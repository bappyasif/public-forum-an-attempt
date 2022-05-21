// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ComponentsContainer from './components/components-container';

function App() {
  let baseUri = '/public-forum-an-attempt'
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path={baseUri} element={<ComponentsContainer />}>
            <Route path={`${baseUri}/test`} element={<h4>hear hear</h4>} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* <ComponentsContainer /> */}
    </div>
  );
}

export default App;
