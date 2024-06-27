import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import Welcome from './component/home/Welcome';
import Footer from './component/footer/Footer';
import ErrorPage from './component/views/errorpage/ErrorPage';
import BlogList from './component/views/bloglist/BlogList';
import BlogDetail from './component/views/detail/BlogDetail';
import BlogForm from './component/views/create/BlogForm';
import AboutPage from './component/views/about/About';
import './App.css'; 


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header/>
        <main className="main-content">
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetail/>} />
            <Route path="/create" element={<BlogForm />} />
            <Route path="/about" element={<AboutPage />}/>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
