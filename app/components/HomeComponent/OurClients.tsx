'use client'

import React from 'react'
import Image from 'next/image'

const clients = [
  { img: "clients-1.png", name: 'Shutter, USA', delay: '.2s' },
  { img: 'clients-2.png', name: 'Hipster, USA', delay: '.4s' },
  { img: 'clients-3.png', name: 'Happy, USA', delay: '.6s' },
  { img: 'clients-4.png', name: 'Opera Tours, USA', delay: '1.2s' },
  { img: 'clients-5.png', name: 'Royale Stone, UK', delay: '1.4s' },
  { img: 'clients-6.png', name: 'QTP, Australia', delay: '1.6s' },
  { img: 'clients-7.png', name: 'PAPA, Malaysia', delay: '1.8s' },
  { img: 'clients-8.png', name: 'Coffee, Australia', delay: '2s' },
  { img: 'clients-9.png', name: 'Bakery, India', delay: '2.2s' },
  { img: 'clients-10.png', name: 'Iconico, India', delay: '2.4s' },
  { img: 'clients-11.png', name: 'Tom N Jerry, UK', delay: '2.6s' },
  { img: 'clients-12.png', name: 'Arch, India', delay: '3s' },
]

const OurClients = () => {
  return (
    <section className="clients-section- bg-gradient15 pad-tb">
      <div className="container">

        {/* HEADING */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <span>Our happy customers</span>
              <h2 className="mb30">Some of our Clients</h2>
            </div>
          </div>
        </div>

        {/* LOGOS */}
        <div className="row">
          <div className="col-lg-12">
            <div className="clients-logos text-center col-12">
              <ul className="row text-center clearfix">

                {clients.map((client, index) => (
                  <li
                    key={index}
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay={client.delay}
                  >
                    <div className="brand-logo">
                      <Image
                        src={`/uploads/2024/11/${client.img}`}
                        alt={client.name}
                        width={180}
                        height={100}
                      />
                    </div>
                    <p>{client.name}</p>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default OurClients
