import { motion } from "framer-motion"
import {
    BarChart3,
    TrendingUp,
    Database
} from "lucide-react"

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-30 bg-white text-black">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"
                />

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
                />

            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    {/* Icons */}
                    <div className="flex justify-center gap-4 mb-6">

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <BarChart3 className="w-12 h-12 text-cyan-500" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.3
                            }}
                        >
                            <TrendingUp className="w-12 h-12 text-blue-500" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.6
                            }}
                        >
                            <Database className="w-12 h-12 text-purple-500" />
                        </motion.div>

                    </div>

                    {/* Heading */}
                    <h1 className="mb-4 tracking-tight">

                        <span className="block text-5xl md:text-7xl font-bold mb-2 text-gray-900">
                            Wajahath Zaman
                        </span>

                        <span className="block text-3xl md:text-5xl text-cyan-600 font-semibold">
                            Data Analyst & ML Enthusiast
                        </span>

                    </h1>

                    {/* Description */}
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Passionate about transforming raw data into meaningful insights
                        using Python, SQL, Power BI, and Machine Learning to solve
                        real-world business problems.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors shadow-lg"
                        >
                            View My Work
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Get In Touch
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border border-cyan-500 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
                        >
                            Download Resume
                        </motion.a>
                         {/* Add resume in public folder */}

                    </div>

                </motion.div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
                >

                    <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">

                        <div className="text-4xl font-bold mb-2 text-cyan-500">
                            3+
                        </div>

                        <div className="text-gray-600">
                            Projects Completed
                        </div>

                    </div>

                    <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">

                        <div className="text-4xl font-bold mb-2 text-blue-500">
                            1+
                        </div>

                        <div className="text-gray-600">
                            Years Experience
                        </div>

                    </div>

                    <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">

                        <div className="text-4xl font-bold mb-2 text-purple-500">
                            3+
                        </div>

                        <div className="text-gray-600">
                            Certifications
                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    )
}

export default Hero