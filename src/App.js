// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ComponentsContainer from './components/components-container';
import NestedRouteCompTest from './components/pages/NestedRouteCompTest';
import TestComponent from './components/pages/TestComponet';
import TopicPage from './components/pages/topic-route';

export let baseUri = '/public-forum-an-attempt';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path={baseUri} element={<ComponentsContainer />} />
          {/* <Route path={`${baseUri}/topic/`} element={<TopicPage />} /> */}
          {/* <Route path={`${baseUri}/topic/`} element={<NestedRouteCompTest />}> */}
          <Route path={`${baseUri}/topic/`} element={<TopicPage />}>
            <Route path=':topicId' element={<TopicPage />} />
          </Route>

          {/* <Route path={baseUri} element={<ComponentsContainer />}>
            <Route path='topic' />
          </Route> */}
          
          
          <Route path={`${baseUri}/test/`} element={<TestComponent />}>
            <Route path=':testId' element={<NestedRouteCompTest />} />
            {/* {[1,2,3,4].map(n => (
              <Link key={n} to={`${baseUri}/test/${n}`}>{`test: ${n}`}</Link>
            ))} */}
          </Route>
          
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          {/* <Outlet /> */}
        </Routes>
      </BrowserRouter>

      {/* <ComponentsContainer /> */}
    </div>
  );
}

export default App;
