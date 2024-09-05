import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CarouselOrientation } from "./components/CarouselOrientation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <h1 className="text-white w-2/6 m-10">Remember to check the CarouselOtientation.jsx where you will see the configuration.
        Remember, Before the carousel map use the const with the images and use a .map
        The Carousel content contains the pixel that you want to use for the heiight of the container that holds the images.
        Enjoy!
      </h1>
      <div className="h-5/6">
      <CarouselOrientation />
      </div>
    </div>
  );
}

export default App;
