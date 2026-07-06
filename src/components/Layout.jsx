import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RequestDemoModal from "./RequestDemoModal";

const Layout = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOpenModal = () => setShowModal(true);
    window.addEventListener("openModal", handleOpenModal);
    return () => window.removeEventListener("openModal", handleOpenModal);
  }, []);

  return (
    <>
      <RequestDemoModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Navbar onDemoClick={() => setShowModal(true)} />
      <main className="pt-18">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
