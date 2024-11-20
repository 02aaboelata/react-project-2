import logo from './logo.svg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
import './App.css';


const experiences = data.map(exp => 
  <Card 
    id={exp.id}
    title = {exp.title}
    description={exp.description}
    price={exp.price}
    coverImg={exp.coverImg}
    rating={exp.stats.rating}
    reviewCount={exp.stats.reviewCount}
    location={exp.location}
    openSpots={exp.openSpots} 
  />
)

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {experiences}
    </div>
  )
}

export default App