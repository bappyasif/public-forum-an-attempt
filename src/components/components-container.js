import React from 'react'
import { Outlet } from 'react-router-dom';
import DashboardContainer from './forum-dashboard/dashboard-container';
import FooterContents from './forum-dashboard/footer-content';
import HeaderUI from './header-section'
import HeroContent from './hero-content'

export default function ComponentsContainer({setAllStates}) {
  
  return (
      <main className='components-container'>
        <HeaderUI />
        <HeroContent />
        <DashboardContainer setAllStates={setAllStates} />
        <FooterContents />
        <Outlet />
      </main>
  )
}

export let fakeReplies = [
  {
    id: '01',
    name: "some user",
    picUrl: "https://unsplash.it/47",
    replyText: "this is a demo reply text on this fake topic, if found helpful feel free to use it as a solution or give it an appropriate reaction",
    postedTime: "44m"
  },
  {
    id: '02',
    name: "another user",
    picUrl: "https://unsplash.it/47",
    replyText: "this is a demo reply text on this fake topic, if found helpful feel free to use it as a solution or give it an appropriate reaction",
    postedTime: "42m"
  },
]

export let fakeTopics = [
  {
    id: '1',
    text: 'currently need help with this question related to JS',
    tag: 'JS',
    datePosted: '22',
    liveDuration: '15 min'
  },
  {
    id: '2',
    text: 'currently need help with this question related to HTML',
    tag: 'HTML',
    datePosted: '22',
    liveDuration: '15 hr'
  },
  {
    id: '3',
    text: 'currently need help with this question related to CSS',
    tag: 'CSS',
    datePosted: '22',
    liveDuration: '15 sec'
  },
  {
    id: '4',
    text: 'currently need help with this question related to React',
    tag: 'HTML',
    datePosted: '22',
    liveDuration: '51 min'
  },
  {
    id: '5',
    text: 'currently need help with this question related to General criteria',
    tag: 'HTML',
    datePosted: '22',
    liveDuration: '1 hr'
  }
]