import React, { createContext, useEffect, useState } from 'react'
import HeaderUI from './header-section/ui'
import HeroContent from './hero-content'
import { handleAllStatesUpdate, handleUpdateStatesValue } from './utility-functions'

export let UserContext = createContext();

export default function ComponentsContainer() {
  let [allStates, setAllStates] = useState({categories: []})
  
  // useEffect(() => {
  //   setAllStates(prevStates => {
  //     for(let key in prevStates) {
  //       if(key === 'categories') {
  //         // console.log('1')  
  //         // prevStates[key] = prevStates[key].concat('Top', "Latest", "Users", "Badges")
  //         prevStates[key] = ['Top', "Latest", "Users", "Badges"]
  //         // console.log('1.5', prevStates[key])
  //       }
  //       // console.log('2')
  //     }
  //     return prevStates
  //   })
  // }, [])

  useEffect(() => {
    // setAllStates(prevStates => ({...prevStates, categories: ['Top', "Latest", "Users", "Badges"]}))
    // handleUpdateStatesValue(setAllStates, {categories: ['Top', "Latest", "Users", "Badges"]})
    handleUpdateStatesValue(setAllStates, 'categories', ['Top', "Latest", "Users", "Badges"])
  }, [])

  useEffect(() => {
    Object.keys(allStates).length == 1 && setAllStates(prevStates => ({...prevStates, badges: ['e', 'f']}))

    // setAllStates(prevStates => ({...prevStates, badges: ['e', 'f']}))
  }, [allStates])

  console.log(allStates, 'allStates')

  // useEffect(() => {
  //   allStates.categories.length === 4 && setAllStates(prevStates => {
  //     for(let key in prevStates) {
  //       if(key !== 'categories') {
  //         console.log('2')
  //         prevStates['badges'] = ['badge 01', 'badge 02']
  //       }
  //     }
  //     console.log('1', prevStates)
  //     // console.log(allStates, 'allStates', prevStates)
  //     return prevStates;
  //   })
  //   // console.log(allStates, 'allStates')
  // }, [allStates])

  // useEffect(() => console.log(allStates, 'allStates', [allStates]))

  // console.log(allStates, 'allStates')
  // let [allStates, setAllStates] = useState([])
  // let initVal = { name: 'test', attr: 'some' }

  // useEffect(() => {
  //   setAllStates(allStates.concat(initVal))
  // }, [])

  // useEffect(() => {
  //   (allStates.length === 1) && allStates[0].attr === 'some' && handleAllStatesUpdate(allStates, setAllStates, 'changed', 'test')
  // }, [allStates])

  // console.log(allStates, allStates.length)

  return (
    <UserContext.Provider value={allStates}>
      <div className='components-container'>
        <HeaderUI />
        <HeroContent />
      </div>
    </UserContext.Provider>
  )
}

/**
 * 
 * 
 // let handleChange = (state, updater, newVal, name) =>  {
//   let idx = state.findIndex(item => item.name === name)
//   // console.log(state, newVal, name, idx)
//   // let newItems = state.map((item, idx) => item.name == name ? [...item[idx], {[name]: newVal}] : [...item[idx]])
//   let newItems = state.map(item => item.name === name ? {...item, attr: newVal} : {...item})
//   updater(newItems)
// }
 * 
 * 
 // function handleChange (state, updater, newVal, name) {
//   let idx = state.findIndex(item => item.name == name)
//   // 1. Make a shallow copy of the items
//   // let items = [...this.state.items];
//   let items = [...state];
//   // 2. Make a shallow copy of the item you want to mutate
//   // let item = {...items[1]};
//   let item = {...items[idx]};
//   // 3. Replace the property you're intested in
//   // item.name = 'newName';
//   idx != -1  && (item.attr = 'newName');
//   // idx != -1 ? item.name = newVal : item
//   // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
//   // items[1] = item;
//   items[idx] = item
//   // 5. Set the state to our new copy
//   // this.setState({items});
//   updater({items})
// }
 * 
 * 
 export default function ComponentsContainer() {
  let [allStates, setAllStates] = useState([])
  useEffect(() => {
    // setAllStates([{ test: ["a", "b"] }])
    setAllStates(prev => prev.concat({ test: ["a", "b"] }))
  }, [])
  // useEffect(() => {
  //   let findIdx;
  //   allStates.forEach((item, idx) => {
  //     for(let key in item) {
  //       if(key == 'test1') findIdx = idx
  //     }
  //   })
  //   console.log(findIdx)
  //   findIdx == -1 &&  setAllStates(prevState => [...prevState, {test2: ["c", "d"]}])
  //   // allStates.length == 1 &&  setAllStates(prevState => [...prevState, {test2: ["c", "d"]}])
  // }, [allStates])
  // useEffect(() => {
  //   // setData((prevData) => prevData.map((item) => ({ ...item, a: "changed" })));
  //   // allStates.length == 1 && handleStates('test', ['c', 'd'], setAllStates, allStates)
  //   // allStates.length == 1 && handleStates('test2', ['c', 'd'], setAllStates, allStates)
  // }, [allStates])
  console.log(allStates, allStates.length)
  return (
    <div className='components-container'>
      <HeaderUI />
      <HeroContent />
    </div>
  )
}

// let handleStates = (name, val, updater, state) => {
//   let newItems = [...state]
//     newItems[name] = val
//     updater(newItems)
//   // let findIdx = -1;
//   // state.forEach((item, idx) => {
//   //   for (let key in item) {
//   //     if (key == name) findIdx = idx
//   //   }
//   // })
//   // console.log(findIdx, name)
//   // findIdx == -1 && updater(prevState => [...prevState, { [name]: val }])
//   // if (findIdx != -1) {
//   //   let newItems = [...state]
//   //   newItems[name] = val
//   //   updater(newItems)
//   //   // const newItems = [...this.state.items];
//   //   // newItems[item] = value;
//   //   // this.setState({ items: newItems });
//   // }
//   // if (findIdx != -1) {
//   //   updater(prevState => {
//   //     return prevState.map(item => {
//   //       for (let key in item) {
//   //         // console.log(prevState, 'prevState', key, item[key])
//   //         if (key == name) {
//   //           item[key] = val;
//   //         }
//   //         console.log(prevState, 'prevState', item)
//   //         return item
//   //       }
//   //     })
//   //     // console.log(prevState, 'prevState')
//   //   })
//   // }
//   // findIdx != -1 && updater(prevState => prevState.map(idx => idx == findIdx ? [ {[name]: val}] : prevState[idx]))
// }
 * 
 * 
  useEffect(() => {
    // setAllStates([])
    setAllStates({categories: ["top", 'users']})
    // setAllStates(prevState => [...prevState, {categories: ["top", 'users']}])
  }, [])

  useEffect(() => {
    // allStates.existingStates.length == 1 && setAllStates(prevState => ({existingStates: prevState.existingStates.map(el => el.key == 'test' ? {...el, status: 'done'} : el)}))
    // let idx = allStates.findIndex(el => el == 'list')
    // if(idx == -1) {
    //   setAllStates(prevState => [...prevState, {list: ["faq, latest"]}])
    // } else {
    //   setAllStates(prevState => prevState.map(index => index == idx ? ))
    // }
    let test = {...allStates.test, list: ["a", "b"]}
    console.log(Object.keys(allStates).length, Object.keys(allStates))
    Object.keys(allStates).length == 2 && setAllStates(() => ({test}))
    // setAllStates(() => ({test}))
  }, [allStates])

  // useEffect(() => {
  //   // setAllStates(prevStates => [...prevStates.concat({categories: ["Top", "Users"]})])
  //   handleAllStatesUpdate('categories', ["Top", "Users"], allStates, setAllStates)
  // }, [])

  // useEffect(() => {
  //   allStates.length == 1 && handleAllStatesUpdate('categoriesList', ["Top", "Users"], allStates, setAllStates)
  // }, [allStates])
 */