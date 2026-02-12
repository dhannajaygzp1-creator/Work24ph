"use client";

import React from "react";
import Image from "next/image";
import type { StatItem } from "@/app/data/Statistics";

interface StatisticsProps {
  stats: StatItem[];
}

const Statistics: React.FC<StatisticsProps> = ({ stats }) => {
  if (!stats?.length) return null;

  return (
    <div className="statistics-wrap bg-gradient5">
      <div className="container">
        <div className="row small t-ctr mt0">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className={`statistics ${index === stats.length - 1 ? "mb0" : ""}`}>
                <div className="statistics-img">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={60}
                    height={60}
                  />
                </div>
                <div className="statnumb">
                  <span className="counter">{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
