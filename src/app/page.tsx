import { Card, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import vector from "../assets/vector.png";
import myImg from "../assets/myImg.png";
import { AntDesignOutlined, MobileOutlined } from "@ant-design/icons";
import { Laptop } from "lucide-react";
import SkillsSection from "@/components/SkillSection";
import SocialLinks from "@/components/SocialLinks";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import ContactForm from "@/components/Contact";

function Portfolio() {
  return (
    <div className="">
      <div id="section1" className="bg-[#F5F5DC] px-5 sm:px-10 lg:px-20">
        <Navbar />
        <div className="relative pb-5 md:pb-10 ">
          <Row justify="space-between" align="top" className="pt-15 sm:pt-20">
            <Col sm={24} md={16}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.2]">
                Hey There,
              </h1>
              <h1 className="text-5xl lg:text-7xl text-4xl font-bold leading-[1.2]">
                I&apos;m Nikhil
              </h1>
            </Col>
            <Col sm={24} md={8} className="mt-2 lg:mt-10 md:mt-5">
              <p className="lg:text-lg md:text-md text-md pr-10 lg:pr-0">
                I design and develop beautifully simple things, And I love what
                I do
              </p>
            </Col>
          </Row>
          <Row gutter={24} className="sm:mt-20">
            <Col
              sm={24}
              md={12}
              className="flex flex-col-reverse gap-5 mt-5 sm:mt-20"
            >
              <div className="">
                <a
                  href="mailto:uditvermaksp@gmail.com"
                  className="text-orange-600 text-lg underline hover:text-orange-500"
                >
                  uditvermaksp@gmail.com
                </a>
              </div>
              <div className="sm:mt-20 flex gap-2 sm:gap-3">
                <p className="text-5xl font-semibold">3.5</p>
                <p className="sm:text-lg/6 font-medium text-gray-700">
                  Years <br />
                  Experience
                </p>
              </div>
            </Col>
            <Col sm={24} md={12} className="flex flex-end">
              <SocialLinks />
            </Col>
          </Row>
          <div className="">
            <Image
              src={myImg}
              alt="My Image"
              width={400}
              height={50}
              className="relative sm:absolute z-1 sm:left-1/2 transform sm:-translate-x-1/2 sm:top-2/5 sm:-translate-y-2/5 md:w-[400px] lg:w-[450px]"
            />
            <Image
              src={vector}
              alt=""
              width={400}
              height={50}
              className="absolute left-1/2 transform -translate-x-1/2 top-2/3 sm:top-2/4 -translate-y-2/4 md:w-[400px] lg:w-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <section id="section2" className="mt-20 px-5 sm:px-20 lg:px-20">
        <Row gutter={[{ sm: 24, md: 24, lg: 128 }, 24]}>
          <Col sm={24} md={12} lg={9} xs={{ order: 2 }}>
            <div className="flex flex-col gap-3">
              <Card className="shadow-md">
                <div className="flex gap-5">
                  <div className="w-[50px] h-[50px] rounded-full bg-green-700 flex items-center justify-center">
                    <Laptop style={{ fontSize: "20px" }} />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Website Development</p>
                    <p className="text-gray-500">5+ projects</p>
                  </div>
                </div>
              </Card>
              <Card className="shadow-md">
                <div className="flex gap-5">
                  <div className="w-[50px] h-[50px] rounded-full bg-yellow-500 flex items-center justify-center">
                    <MobileOutlined style={{ fontSize: "20px" }} />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Mobile Development</p>
                    <p className="text-gray-500">2 projects</p>
                  </div>
                </div>
              </Card>
              <Card className="shadow-md">
                <div className="flex gap-5">
                  <div className="w-[50px] h-[50px] rounded-full bg-red-400 flex items-center justify-center">
                    <AntDesignOutlined style={{ fontSize: "20px" }} />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Website Design</p>
                    <p className="text-gray-500">2+ projects</p>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col sm={24} md={12} lg={15} className="" xs={{ order: 1 }}>
            <div>
              <p className="text-5xl font-semibold">What do I do?</p>
              <p className="mt-5 lg:pr-10 leading-[30px] text-lg">
                I transform ideas and designs into interactive, user-friendly
                web experiences. With a focus on clean code and seamless
                functionality, I build modern websites that are both visually
                appealing and performance-driven.
              </p>
              <p className="mt-5 lg:pr-10 leading-[30px] text-lg">
                From wireframing to deployment, I bring thoughtful detail to
                every stage of development — ensuring intuitive interfaces,
                optimized performance, and responsive layouts across all
                devices.
              </p>
              <div className="mt-5 flex gap-20">
                <div>
                  <p className="text-4xl font-semibold">10+</p>
                  <p className="text-md text-gray-500 mt-2">
                    Projects completed
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-semibold">90%+</p>
                  <p className="text-md text-gray-500 mt-2">
                    Client satisfaction rate
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <>
        <Experience />
      </>

      <>
        <ContactForm />
      </>

      <footer className="text-center mt-10 text-sm text-white py-10 bg-[#171717] border-t">
        <p>
          © {new Date().getFullYear()} Portfolio - Nikhil Verma. All rights
          reserved. Built with
          <span className="text-red-500 px-1">❤️</span> and clean code.
        </p>
      </footer>
    </div>
  );
}

export default Portfolio;
