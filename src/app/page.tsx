"use client";

import { Container, Stack } from "@mui/material";
import NavBar from "../components/NavBar";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Education from "../components/sections/Education";
import Certifications from "../components/sections/Certification";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import CentreInteret from "@/components/sections/CentreInteret";

export default function Page() {
  return (
    <>
      <NavBar />
      <Container
        maxWidth="xl"
        sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 4 } }}
      >
        <Stack spacing={{ xs: 6, md: 10 }}>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <CentreInteret />
          <Contact />
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
