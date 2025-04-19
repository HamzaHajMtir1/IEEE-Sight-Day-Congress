'use client'
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-sdc">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
          <h3 className="text-4xl font-bold text-sdc2 mb-4 drop-shadow-lg">Know More About Us</h3>

          </div>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12 mt-8 mx-auto max-w-6xl">
          {/* First Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full flex"
          >
            <Card className="bg-gray-100 shadow-lg rounded-lg transition-all duration-500 hover:scale-105 hover:bg-yellow-100 hover:shadow-xl flex flex-col w-full">
              <CardHeader>
                <CardTitle className="text-sdc">Sight Day Congress</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col mb-4">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/Home/SDC.png"
                    alt="SDC Logo"
                    width={200}
                    height={100}
                    className="rounded"
                  />
                </div>
                <p className="text-gray-700">
                  The <strong>Sight Day Congress Annual Congress</strong>, hosted by the IEEE ISIMM SIGHT Group, 
                  marked a significant milestone as they were announced the winner of the 
                  Non-Technical Challenge for the previous edition. The event, themed 'Marine Life', 
                  brought together SIGHT groups from across the Tunisia Section to share knowledge, 
                  exchange experiences, and showcase their impactful projects. The congress featured a 
                  series of workshops aimed at enhancing members' skills and fostering collaboration. 
                  The event culminated in a friendly competition to determine the best SIGHT group in 
                  Tunisia Section , with the winning group earning the honor of hosting the next edition of 
                  the congress.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Second Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full flex"
          >
            <Card className="bg-gray-100 shadow-lg rounded-lg transition-all duration-500 hover:scale-105 hover:bg-yellow-100 hover:shadow-xl flex flex-col w-full">
              <CardHeader>
                <CardTitle className="text-sdc">IEEE ISIMM Student Branch</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/Home/ieee_isimm.png"
                    alt="IEEE ISIMM SB Logo"
                    width={200}
                    height={100}
                    className="rounded"
                  />
                </div>
                <p className="text-gray-700">
                Founded in 2019, IEEE ISIMM SB is a dynamic student branch of the Institute of Electrical and Electronics 
                Engineers (IEEE), based in the Tunisia Section, Region 8. As the largest IEEE student branch in Monastir, 
                we proudly host 6 technical chapters: Computer Society (CS), Computational Intelligence Society (CIS), 
                Robotics and Automation Society (RAS), Industrial Applications Society (IAS), Power and Energy Society (PES), 
                and Engineering in Medicine and Biology Society (EMBS). Additionally, we have an Affinity Group for Women in 
                Engineering (WIE) and the Special Interest Group on Humanitarian Technology (SIGHT). Our mission is to provide
                a platform for students to develop and enhance their technical skills and knowledge in instrumentation and measurement. 
                We offer a variety of activities, including workshops, seminars, technical talks, and industrial visits, to give students 
                valuable hands-on experience and practical exposure in these fields.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Third Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full flex"
          >
            <Card className="bg-gray-100 shadow-lg rounded-lg transition-all duration-500 hover:scale-105 hover:bg-yellow-100 hover:shadow-xl flex flex-col w-full">
              <CardHeader>
                <CardTitle className="text-sdc">IEEE Tunisia Section</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/Home/IEEETunisiaSectionLogo.png"
                    alt="Tunisia Section Logo"
                    width={200}
                    height={100}
                    className="rounded"
                  />
                </div>
                <p className="text-gray-700">
                  Founded in 2008, the IEEE Tunisia Section is dedicated to spreading IEEE initiatives throughout Tunisia. 
                  This is achieved through educational and technical programs, networking opportunities, 
                  and the advancement of technology and its applications to address humanitarian challenges. 
                  The section actively supports chapters, special interest groups, student activities, and student awards. 
                  IEEE has firmly established its presence in the Tunisian engineering community, with over 43 Student Branches 
                  located across various engineering schools, faculties, and universities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Fourth Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-full flex"
          >
            <Card className="bg-gray-100 shadow-lg rounded-lg transition-all duration-500 hover:scale-105 hover:bg-yellow-100 hover:shadow-xl flex flex-col w-full">
              <CardHeader>
                <CardTitle className="text-sdc">SIGHT (Special Interest Group on Humanitarian Technology)</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/Home/sight.png"
                    alt="IEEE SIGHT Logo"
                    width={200}
                    height={100}
                    className="rounded"
                  />
                </div>
                <p className="text-gray-700">
                Founded in 2023, SIGHT at IEEE ISIMM SB focuses on using technology to tackle humanitarian challenges and 
                improve lives in underserved communities. The group's mission is to promote technology for social good, 
                empowering members to create a positive impact. Through engaging projects, members develop project management 
                skills and contribute to meaningful community service initiatives.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}