import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Main/Home";
import Tentang from "./page/Main/Tentang";
import Layanan from "./page/Main/Layanan";
import Karya from "./page/Main/Karya";
import Kontak from "./page/Main/Kontak";
import ScrollToTop from "./page/Component/Pembantu/ScrollToTop";
import Dapur from "./page/Component/LayananSection/LayananDapur/Dapur";
import KamarMandi from "./page/Component/LayananSection/LayananKamarMandi/KamarMandi";
import Interior from "./page/Component/LayananSection/LayananInterior/Interior";
import Eksterior from "./page/Component/LayananSection/LayananEksterior/Eksterior";
import Taman from "./page/Component/LayananSection/LayananTaman/Taman";
import RuangTamu from "./page/Component/LayananSection/LayananRuangTamu/RuangTamu";
import PageNotFound from "./page/Component/PageNotFound";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
       

       {/* jadikan home index */}
       <Route path="/" element={<Home />} />
        <Route path="/Tentang" element={<Tentang />} />
        <Route path="/Layanan" element={<Layanan />} />
        <Route path="/Karya" element={<Karya />} />
        <Route path="/Kontak" element={<Kontak />} />
        <Route path="/Dapur" element={<Dapur />} />
        <Route path="/layanan/KamarMandi" element={<KamarMandi />} />
        <Route path="/layanan/Interior" element={<Interior />} />
        <Route path="/layanan/Eksterior" element={<Eksterior />} />
        <Route path="/layanan/Taman" element={<Taman />} />
        <Route path="/layanan/RuangTamu" element={<RuangTamu />} />

     
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
