"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

import { useState, useEffect } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    decription: "062-798-8998",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    decription: "sir.tanawat@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    decription: "2Son Apartment, Lat Krabang, Bangkok 10520",
  },
]

import { motion } from "framer-motion";

const Contact = () => {
  
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });
      },
        (err) => {
          setError("Unable to retrieve your location. Please enable location services.");
          console.error(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);
  console.log(location.lat, location.lon)

  const [area, setArea] = useState(null)
  const [tempurature, setTempurature] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTempurature(data.main?.temp)
        setArea(data.name)
      })
  }, [location, apiKey]);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-1 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Feels free to contact me.</h3>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              {/*
                {/* select
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web DeVelopment</SelectItem>
                      <SelectItem value="cst">UX/UI Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
               */}

              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Type your message here." />

              {/* button */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-2 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <h3>{item.decription}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
            {/* tempurature */}
            <div className="w-[98px] h-[98px] xl:w-[128px] xl:h-[128px] rounded-md border border-white/10 bg-[#27272c] fixed right-4 bottom-4 mx-auto flex items-center justify-center">
                {error ? (<p className="text-red-600">{error}</p>
                ) : tempurature ? (
                  <div className="text-center">
                    <h2 className="text-xl font-semibold mb-2">{area}</h2>
                    <p className="text-lg text-accent">{Math.round(tempurature)}°C</p>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact