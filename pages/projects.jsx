import React from 'react';
import Banner from '../components/Banner';
import Project from '../components/Project';

const dataProjects = [
  {
    title: 'Patagonia - Agentina',
    image: 'https://images.unsplash.com/photo-1557543878-042c9857f39e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
  },
  {
    title: 'Sydney - Australia',
    image: 'https://images.unsplash.com/photo-1598948485421-33a1655d3c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    title: 'Rio de Janeiro - Brazil',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'London - UK',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
]

const projects = () => {
  return (
    <main>
      <Banner heading='My Projects' message='This is some of my recent work traveling the world. Enjoy it!' />
      <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h2 className='text-4xl font-bold text-center p-4'>Travel Photos</h2>
        <ul className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
          {dataProjects.map((dataProject, index) => (
            <Project dataProject={dataProject} key={index}/>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default projects