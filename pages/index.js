
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SiJavascript } from "react-icons/si";
import TwitterIcon from '@mui/icons-material/Twitter';
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss, SiMongodb, SiFirebase, SiNodedotjs, SiMysql, SiPostgresql } from "react-icons/si";
import { ModalsProvider } from '@mantine/modals';
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Button } from '@mantine/core';
import { Link } from '@mui/material';
;
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Toaster } from 'react-hot-toast';
import { IconArrowUp } from 'tabler-icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Transition } from '@mantine/core';
import { GroupedTransition } from '@mantine/core'
import {
  Affix, Text
} from '@mantine/core';
import { BsFillBootstrapFill } from "react-icons/bs";

;
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';
import { Drawer, Group } from '@mantine/core'
import { Menu2 } from 'tabler-icons-react'
import PortfolioIcon from '../components/PortfolioIcon';
import About from '../components/About';
import Projects from '../components/Projects';
import GetInTouch from '../components/GetInTouch';
import Services from '../components/Services';
import Footer from '../components/Footer';


function Home() {
  const [scroll, scrollTo] = useWindowScroll();
  const [opened, setOpened] = useState(false);

  return (
    <>

      <>
        <Toaster />
        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                leftIcon={<ArrowUpwardIcon size="large" className='ml-3' />}
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
                className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-6 w-14 '
              >

              </Button>
            )}
          </Transition>
        </Affix>
      </>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}

        padding="md"
        size="md"
        position="left"
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
      >
        <div>
          <div>
            <h1 className='text-2xl font-bold text-sky-400/100'>Portfolio</h1>
          </div>
          <hr />
          <div className='flex flex-col space-y-5 mt-5  font-semibold text-xl mb-5 text-center'>
            <Link className='hover:bg-white hover:p-2 rounded-full drop-shadow-md ease-in-out duration-300' style={{ textDecoration: "none", color: '#38bdf8' }} href='#projects' ><h1 >Projects</h1></Link>
            <Link className='hover:bg-white hover:p-2 rounded-full drop-shadow-md ease-in-out duration-300' style={{ textDecoration: "none", color: '#38bdf8' }} href='#projects' ><h1  >Homme</h1></Link>
            <Link className='hover:bg-white hover:p-2 rounded-full drop-shadow-md ease-in-out duration-300' style={{ textDecoration: "none", color: '#38bdf8' }} href='#services' > <h1 >Services</h1></Link>
            <Link className='hover:bg-white hover:p-2 rounded-full drop-shadow-md ease-in-out duration-300' style={{ textDecoration: "none", color: '#38bdf8' }} href='#about' > <h1 >About</h1></Link>
            <Link className='hover:bg-white hover:p-2 rounded-full drop-shadow-md ease-in-out duration-300' style={{ textDecoration: "none", color: '#38bdf8' }} href='#contact' > <h1 >Contact Me</h1></Link>

          </div>
          <hr />
          <br />
          <br />
          <br />
          <h1 className='text-cyan-400/100 capitalize text-xl'>LET's Connect</h1>
          <div className='space-x-8 mt-6 '>

            <Link className='bg-white p-4 rounded-full drop-shadow-md ' style={{ color: '#38bdf8' }} href="https://twitter.com/OLabdaoui1" target="_blank"><TwitterIcon /></Link>
            <Link className='bg-white p-4 rounded-full drop-shadow-md' style={{ color: '#38bdf8' }} href="https://www.linkedin.com/in/tm-omar-b7429a21b/" target="_blank"><LinkedInIcon /></Link>
            <Link className='bg-white p-4 rounded-full drop-shadow-md' style={{ color: '#38bdf8' }} href="https://github.com/OmarLabdaoui" target="_blank"><GitHubIcon /></Link>
          </div>
        </div >
      </Drawer >
      <div style={{
        backgroundColor: "#141518"
      }} className=" " >
        <div className=" flex flex-row justify-evenly p-3 lg:flex lg:inline sm:hidden">
          <div>
            <h1 className='text-xl font-bold text-white sm:inline '>Portfolio</h1>
          </div>
          <div className='flex flex-row  space-x-8'>
            <Link href='#projects' style={{ textDecoration: "none", color: "white" }}><h1 className=' text-white font-medium'>Projects</h1></Link>
            <Link href='#services' style={{ textDecoration: "none", color: "white" }}> <h1 className='text-white font-medium'>Services</h1></Link>
            <Link href='#about' style={{ textDecoration: "none", color: "white" }}> <h1 className='text-white font-medium'>About</h1></Link>
            <Link href='#contact' style={{ textDecoration: "none", color: "white" }}> <h1 className='text-white font-medium'>Contact Me</h1></Link>

          </div>
          <div className='text-white space-x-8 '>

            <Link className='text-white' style={{ textDecoration: "none", color: "white" }} href="https://www.linkedin.com/in/tm-omar-b7429a21b/" target="_blank"><LinkedInIcon /></Link>
            <Link className='text-white' style={{ textDecoration: "none", color: "white" }} href="https://github.com/OmarLabdaoui" target="_blank"><GitHubIcon /></Link>

          </div>
        </div>
        <div className='flex justify-between  ' style={{
          backgroundColor: "#141518"
        }}>
          <div className='ml-3'>

            <h1 className=' cursor-pointer text-2xl font-bold text-white sm:inline lg:hidden'>Portfolio</h1>
          </div>
          <div className='mr-3 cursor-pointer text-white sm:inline lg:hidden' size="40" onClick={() => setOpened(true)}>
            <Menu2 size={40} />
          </div>
        </div>
        <Toaster />
        <div>
          <h1 className='text-white font-bold text-center ' style={{ fontSize: "90px", marginTop: "80px" }}>Welecome To My <span className='text-sky-400/100'>Personel Portfolio</span></h1>
          <h1 className='text-white font-bold text-center capitalize ' style={{ fontSize: "30px" }}>Omar <span className='text-sky-400/100'>Labdaoui</span></h1>
          <div className='flex flex-row text-white  justify-center text-2xl space-x-7 mt-3 '>
            <PortfolioIcon Icon={SiJavascript} text="JAVASCRIPT" />
            <PortfolioIcon Icon={SiHtml5} text="HTML" />
            <PortfolioIcon Icon={SiCss3} text="CSS" />
            <PortfolioIcon Icon={SiReact} text="REACT JS" />
            <PortfolioIcon Icon={SiTailwindcss} text="Tailwind CSS" />
            <PortfolioIcon Icon={TbBrandNextjs} text="NextJS" />
            <PortfolioIcon Icon={SiTypescript} text="TypeScript" />
            <PortfolioIcon Icon={BsFillBootstrapFill} text="BootStrap" />
            <PortfolioIcon Icon={SiMongodb} text="MongoDb" />
            <PortfolioIcon Icon={SiFirebase} text="Firebase" />
            <PortfolioIcon Icon={SiNodedotjs} text="NodeJs" />
            <PortfolioIcon Icon={SiMysql} text="MySql" />
            <PortfolioIcon Icon={SiPostgresql} text="PostgreSql" />



          </div>
          <div className='flex flex-row justify-center space-x-5 mt-4'>
            <Link href="#projects"><Button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-8'>Projects</Button></Link>
            <Link href="https://github.com/OmarLabdaoui" target="_blank" style={{ textDecoration: "none", color: "white" }} variant="outline" className='flex flex-row items-center font-bold cursor-pointer'>
              <GitHubIcon className="text-white mr-2" />
              <p className="text-white">GitHub</p>

            </Link>
          </div>
          <div className='flex flex-row justify-center mt-11'>
            <iframe src="https://giphy.com/embed/VfrLCmybNyDcVc5lfU" width="40" height="40" frameBorder="0" allowFullScreen></iframe>
          </div>


        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <h1 className='text-white flex justify-center underline decoration-double  decoration-sky-500 ' style={{ fontSize: "70px" }}>About Me</h1>
          <div id='about'>
            <About />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <h1 className='text-white flex justify-center underline decoration-double  decoration-sky-500 ' style={{ fontSize: "70px" }}>Projects</h1>

        </div>
        <div className='' id='projects'>
          <Projects />
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <h1 id='services' style={{ fontSize: "70px" }} className='text-white flex justify-center underline decoration-double  decoration-sky-500 '>Services</h1>
          <Services />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <h1
            className=' mb-11 text-white flex justify-center underline decoration-double  decoration-sky-500 '
            style={{ fontSize: "70px" }}>Contact Me</h1>
          <div className="flex justify-center" id='contact'>

            <GetInTouch />

          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <Footer />
        </div>
      </div >
    </>
  )
}
export default Home
