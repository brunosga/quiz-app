import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
    return (
        <>
        <Header />
        <main>
        <section className="home-section">
            <h2><b>So you think you know ReactJS?</b> Take the 10 quizzes below to test your knowledge.</h2>
            <div className="two-cols">
            <div>
            <p><b>1</b> - &nbsp;JavaScript short-circuiting: <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>2</b> - &nbsp;Array and object destructuring: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>3</b> - &nbsp;.map(), .filter(), and .find(): <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>4</b> - &nbsp;UI rendering: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>5</b> - &nbsp;Components and prompt: <Link to="/quiz-questions/1">Start</Link> </p>
            </div>
            <div>
            <p><b>6</b> - &nbsp;State and hooks: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>7</b> - &nbsp;Single Page application: <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>8</b> - &nbsp;useEffect hook: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>9</b> - &nbsp;useState hook: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>10</b> - &nbsp;Deploying Apps to Github Pages: <Link to="/quiz-questions/2">Start</Link> </p>
            </div>
            </div>

        </section>
        </main>
        <Footer />
        </>
    );
}   

export default App;