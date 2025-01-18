import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Pindahkan scroll ke atas setiap kali rute berubah
  }, [location]);

  return null;
};

export default ScrollToTop;
