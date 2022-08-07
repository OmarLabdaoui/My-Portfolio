import React from 'react'

function About() {
    return (
        <div className='lg:flex lg:flex-row lg:justify-evenly sm:ml-5 '>
            <div className='border-4 border-indigo-500/100 rounded-full lg:visible sm:invisible'>
                <img className="rounded-full " src='https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' />
            </div>
            <div className='space-y-7 text-2xl font-semibold text-white' style={{ marginTop: "100px" }}>
                <div >
                    Hello <span>👋</span>
                </div>
                <p>
                    I am Omar Labdaoui, a software developer  <strong className='font-bold text-cyan-500/100'> based in Morroco</strong>.
                    <br />
                    <br />
                    I develop full-blown web applications using the MERN Stack,<br />
                    <br />

                    But I
                    mostly love working on the front-end using <strong className='font-bold text-cyan-500/100'>Tailwind Css</strong> and{" "}
                    <strong className='font-bold text-cyan-500/100'>React</strong>.
                </p>
            </div>
        </div >
    )
}

export default About