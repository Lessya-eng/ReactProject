import React from 'react';
import './App.css';
import { Header } from './components/molecules/Header';
import { Navigation } from './components/molecules/Navigation';
import { Movies } from './mock'
import { MainCard } from './components/molecules/MainCard';
import { FoldedCard } from './components/molecules/FoldedCard';
import { FoldedCardTitle } from './components/molecules/FoldedCardTitle';
import { Title } from './components/atoms/Title';
import { TrailerCard } from './components/molecules/TrailerCard';
import { RatingCard } from './components/molecules/RatingCard';



function App() {
  const arrayChoose = Movies[1];
  return (
    <div className="app">
      <nav className="app-nav">
        <Navigation />
      </nav>
      <main className="app-wrapper">
        <Header />
        <MainCard />
        <div className="trailer-rating">
          <TrailerCard />
          <RatingCard />
        </div>
        <div className="folded-card">
          <div className="next-movie">
            <Title title={"Next movie"} />
          </div>
          <FoldedCard />
        </div>
      </main>
    </div>
  );
}

export default App;
