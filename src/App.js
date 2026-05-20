import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SimpleFooter } from "./components/SimpleFooter";
import { Blogs } from "./components/Blogs";
import { BlogPost } from "./components/BlogPost";
import { skillsData } from './Data/skills.js';
import './Skills.css';
import { NewPostForm } from './components/NewPostForm.js';
import { NavBarAdmin } from './components/NavBarAdmin.js';

function App() {
  return (
    <Router>
      <div className="App">
       <ConditionalNav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogpost/:id" element={<BlogPost />} />
          <Route path="/admin/new" element={<NewPostForm />} />
        </Routes>
        <ConditionalFooter />
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <Banner />
    <Skills skills={skillsData} />
    <Projects />
    <Contact />
  </>
);

const ConditionalFooter = () => {
  const location = useLocation();

  return location.pathname.startsWith('/blogs') || location.pathname.startsWith('/blogpost') ||  location.pathname.startsWith('/admin/new') 
    ? <SimpleFooter />
    : <Footer />;
};
const  ConditionalNav =()=>{
    const location = useLocation();

  return location.pathname.startsWith('/admin/new') || location.pathname.startsWith('/admin/new') 
    ?   <NavBarAdmin/>
    : <NavBar />  

}
export default App;
