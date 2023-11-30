import Image from 'next/image'
import { Container } from 'postcss'
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Card from "./components/Card";

export default function Home() {
  return (
    // Main Container
    <div class="bg-white">
      <Navbar />
      <Slider />
      <Card />
      
    
      
  </div>
    
   
  )
}