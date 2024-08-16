import React from "react";
import Carousel from "../components/carousel.jsx";
import Frame1 from "../imagens/Frame 4808 (2).svg";
import Frame2 from "../imagens/Frame 4827 (5).jpg";
import Frame3 from "../imagens/Frame 4828 (1).svg";
import Header from "../components/Header";
import LinhaLogo from "../components/linhaLogo.jsx";
import Funciona from "../components/comoFunciona.jsx";
import Basics from "../components/infoBasics.jsx";
import waves from "../imagens/Rectangle 866.svg";
import Extra from "../components/infoExtra.jsx";
let slides = [Frame2, Frame1, Frame3];

const LandingPage = () => {
  return (
    <div className="  ">
      <Header />

      <div className="w-[100%] m-auto">
        <Carousel slides={slides} />
      </div>

      <div>
        <LinhaLogo />
      </div>
      <div className="relative">
        <Funciona />
        <img src={waves} className="absolute bottom-0 -mb-9 " />
      </div>
      <div>
        <Basics />
      </div>
      <div>
        <Extra />
      </div>
    </div>
  );
};

export default LandingPage;
