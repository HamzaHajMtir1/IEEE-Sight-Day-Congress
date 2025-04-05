"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

// Define the Activities type
export interface Activity {
  id: string;
  subject: string;
  imageUrl: string;
  desc: string;
  linkS?: string;
  linkSa?: string;
}

// Define the component props
interface ChallangesGridProps {
  activities?: Activity[];
}

// Sample activities data
const defaultActivities: Activity[] = [
  {
    id: "1",
    subject: "SDC Technical Challange",
    imageUrl: "/Challanges/technicalChallenge.jpg",
    desc: "Illegal fishing is one of the biggest threats to marine ecosystems in Tunisia. It destroys fish populations, harms protected marine habitats, and affects the livelihoods of local fishermen. This challenge aims to develop a technical solution to detect, monitor, or prevent illegal fishing using innovative technology while ensuring sustainability and alignment with the United Nations Sustainable Development Goals (SDGs).",
    linkS: "https://drive.google.com/file/d/11ihXiXcsBRH11BMrshju8aq7V1f-VgBo/view",
    linkSa:"https://docs.google.com/forms/d/e/1FAIpQLScz9mJ5Ur1dOiQR-MAAkVl5MWeKUe8c10HVt7L_AdwCWwEJuw/viewform"
  },
  {
    id: "2",
    subject: "SDC Non Technical Challange",
    imageUrl: "/Challanges/nonTechnical.jpg",
    desc: "The SDC 3.0 Non-Tech Challenge is an opportunity for IEEE SIGHT Student Branch Groups to present their activities, projects, and SDC 4.0 proposal to host the next edition of this event. This challenge allows SBs and SIGHT Groups to highlight their projects, innovation, and dedication to using technology for a better future.",
    linkS: "https://drive.google.com/file/d/1pgUmXbAdm0eIA4z1HCDQsqGDiJgDRRyJ/view",
    linkSa:"https://docs.google.com/forms/d/e/1FAIpQLScRDJ5j3ECbPR34oHwcji443Ct3f-REYiMR48pdGp0wwCvXlg/viewform"
  },
];

export function ChallangesGrid({ activities = defaultActivities }: ChallangesGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkMobile()
    
    // Add listener for window resize
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Desktop version with animations
  if (!isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-12"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <motion.article
                key={activity.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                onHoverStart={() => setHoveredId(activity.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-0 pb-0 pt-0 cursor-pointer border-2 border-yellow-200 h-[500px]"
              >
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.4 }}
                  src={activity.imageUrl}
                  alt={activity.subject}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-yellow-400 via-yellow-400/20 to-yellow-400/20" />

                {/* Single drawer that contains all content */}
                <motion.div
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-600 via-bg-sdc-900/90 to-blue-900/80 z-10 rounded-b-2xl overflow-hidden"
                  initial={{
                    height: "180px",
                  }}
                  animate={{
                    height: hoveredId === activity.id ? "100%" : "180px",
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                >
                  <div className="p-8 h-full flex flex-col">
                    {/* Header content (always visible) */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white">{activity.subject}</h3>
                    </div>

                    {/* Divider line */}
                    <div className="border-t border-gray-700 my-4 w-full"></div>

                    {/* Additional info */}
                    <div className="space-y-4 text-white">
                      <h4 className="text-lg font-semibold text-sdc2">Activity Details</h4>

                      <p className="text-sm text-gray-300">
                        {activity.desc || "Join us for this exciting activity and expand your horizons!"}
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#F2B705" }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md transition-colors w-full font-medium cursor-alias"
                        onClick={activity.linkS ? () => window.open(activity.linkS, "_blank") : undefined}
                      >
                        Specifications
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#F2B705" }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md transition-colors w-full font-medium cursor-alias"
                        onClick={activity.linkSa ? () => window.open(activity.linkSa, "_blank") : undefined}
                      >
                        Submission
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Visual indicator for hover state */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-blue-600 z-20"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: hoveredId === activity.id ? 1 : 0,
                    transition: { duration: 0.3 },
                  }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  // Mobile version without animations
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-yellow-200"
            >
              <div className="relative h-48">
                <img
                  src={activity.imageUrl}
                  alt={activity.subject}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {activity.subject}
                </h3>
              </div>
              
              <div className="p-4 space-y-4">
                <p className="text-gray-700 text-sm">
                  {activity.desc}
                </p>
                
                <div className="space-y-2">
                  <a 
                    href={activity.linkS || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-2 bg-blue-500 text-gray-50 rounded-md font-medium"
                  >
                    Specifications
                  </a>
                  
                  <a 
                    href={activity.linkSa || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-2 bg-blue-500 text-gray-50 rounded-md font-medium"
                  >
                    Submission
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}