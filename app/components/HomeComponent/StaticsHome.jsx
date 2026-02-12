'use client'
import React from 'react'
import Image from 'next/image'

export const StaticsHome = () => {
  return (
    <>
    <div className="statistics-section bg-gradient6 pad-tb tilt3d">
      <div className="container">

        {/* TOP ROW */}
        <div className="row justify-content-center t-ctr">
          <div className="col-lg-4 col-sm-6">
            <div className="statistics">
              <div
                data-tilt
                data-tilt-max="20"
                data-tilt-speed="1000"
                className="statistics-img"
              >
                <Image
                  src="/uploads/2024/11/startup.svg"
                  alt="years"
                  width={80}
                  height={80}
                />
              </div>
              <div className="statnumb">
                <span className="counter">40</span><span>+</span>
                <p>Year In Business</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="statistics">
              <div
                data-tilt
                data-tilt-max="20"
                data-tilt-speed="1000"
                className="statistics-img"
              >
                <Image
                  src="/uploads/2024/11/team.svg"
                  alt="team"
                  width={80}
                  height={80}
                />
              </div>
              <div className="statnumb">
                <span className="counter">50</span><span>+</span>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="row small t-ctr">

          <div className="col-lg-3 col-sm-6">
            <div className="statistics">
              <div data-tilt data-tilt-max="20" data-tilt-speed="1000" className="statistics-img">
                <Image
                  src="/uploads/2024/11/deal.svg"
                  alt="happy clients"
                  width={70}
                  height={70}
                />
              </div>
              <div className="statnumb">
                <span className="counter">500</span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="statistics">
              <div data-tilt data-tilt-max="20" data-tilt-speed="1000" className="statistics-img">
                <Image
                  src="/uploads/2024/11/computers.svg"
                  alt="projects"
                  width={70}
                  height={70}
                />
              </div>
              <div className="statnumb counter-number">
                <span className="counter">50</span><span>k</span>
                <p>Projects Done</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="statistics">
              <div data-tilt data-tilt-max="20" data-tilt-speed="1000" className="statistics-img">
                <Image
                  src="/uploads/2024/11/worker.svg"
                  alt="hours worked"
                  width={70}
                  height={70}
                />
              </div>
              <div className="statnumb counter-number">
                <span className="counter">1223</span><span>k</span>
                <p>Hours Worked</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="statistics mb0">
              <div data-tilt data-tilt-max="20" data-tilt-speed="1000" className="statistics-img">
                <Image
                  src="/uploads/2024/11/customer-service.svg"
                  alt="support"
                  width={70}
                  height={70}
                />
              </div>
              <div className="statnumb">
                <span className="counter">24</span><span>/</span>
                <span className="counter">7</span>
                <p>Support Available</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}