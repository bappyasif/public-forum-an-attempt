import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ComponentsContainer, { fakeTopics } from './components/components-container';
import NestedRouteCompTest from './components/pages/NestedRouteCompTest';
import TagRoute from './components/pages/tag-route';
import TestComponent from './components/pages/TestComponet';
import TopicPage from './components/pages/topic-route';

export let baseUri = '/public-forum-an-attempt';

export let UserContext = createContext();

function App() {
  let [allStates, setAllStates] = useState({ categories: [] })

  useEffect(() => {
    handleUpdateStatesValue(setAllStates, 'categoriesInfo', [{ name: 'Top', topics: 1234 }, { name: "Latest", topics: 5678 }, { name: "Users", topics: 9012 }, { name: "Badges", topics: 3456 }]);
    handleUpdateStatesValue(setAllStates, 'fakeTopics', fakeTopics)
  }, [])

  useEffect(() => {
    Object.keys(allStates).length === 1 && setAllStates(prevStates => ({ ...prevStates, headerLables: ['Categories', 'Top', "Latest", "FAQ"] }))
  }, [allStates])

  console.log(allStates, 'allStates')

  return (
    <UserContext.Provider value={allStates}>
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route path={baseUri} element={<ComponentsContainer setAllStates={setAllStates} />} />
            {/* <Route path={`${baseUri}/topic/`} element={<TopicPage />} /> */}
            {/* <Route path={`${baseUri}/topic/`} element={<NestedRouteCompTest />}> */}
            <Route path={`${baseUri}/topic/`} element={<TopicPage />}>
              <Route path=':topicId' element={<TopicPage />} />
            </Route>

            <Route path={`${baseUri}/category/`} element={<TagRoute setAllStates={setAllStates} />}></Route>

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
    </UserContext.Provider>

  );
}

export let handleUpdateStatesValue = (statesUpdater, stateName, newData) => {
  console.log(newData, 'newData!!', statesUpdater, stateName)
  statesUpdater(prevStates => ({ ...prevStates, [stateName]: newData }))
}

export default App;
