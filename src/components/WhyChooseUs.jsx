const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2>Why Choose Me</h2>
          <div className="w-16 h-1 bg-deyoung-terracotta mx-auto mb-6"></div>
          <p className="text-deyoung-gray">
            Internationally recognized Canadian methodologies. Measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Box 1: Canadian Methodology */}
          <div className="bg-[#f5efe7] p-8 rounded-md hover:shadow-md transition-shadow">
            <h3 className="text-2xl mb-4 text-deyoung-terracotta font-bold">Canadian Methodology</h3>
            <p className="text-deyoung-charcoal mb-4 leading-relaxed">
              I deliver instruction based on <span className="font-bold">internationally recognized Canadian educational methodologies</span>, 
              focusing on structured, student-centered learning and measurable outcomes.
            </p>
            <p className="text-deyoung-charcoal leading-relaxed">
              Trained at <span className="font-bold">Oasis Canadian Schools (Nigeria)</span> — aligned with the 
              <span className="font-bold"> New Brunswick Ministry of Education, Canada</span> — I specialize in modern instructional 
              design, differentiated learning, and performance-based assessment.
            </p>
          </div>

          {/* Box 2: My Approach */}
          <div className="bg-[#f5efe7] p-8 rounded-md hover:shadow-md transition-shadow">
            <h3 className="text-2xl mb-4 text-deyoung-terracotta font-bold">My Approach</h3>
            <p className="text-deyoung-charcoal mb-3 leading-relaxed">I specialize in:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">✓ <span>Modern instructional design</span></li>
              <li className="flex items-start gap-2">✓ <span>Differentiated learning</span></li>
              <li className="flex items-start gap-2">✓ <span>Performance-based assessment</span></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-300">
              <p className="font-semibold text-deyoung-navy mb-2">My approach integrates:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">✓ <span><strong>ILP, PLP & MPLP</strong> — Personalized and adaptive learning</span></li>
                <li className="flex items-start gap-2">✓ <span><strong>FAST & SAST</strong> — Track progress and ensure measurable results</span></li>
              </ul>
            </div>
          </div>

          {/* Box 3: Digital Integration */}
          <div className="bg-[#f5efe7] p-8 rounded-md hover:shadow-md transition-shadow">
            <h3 className="text-2xl mb-4 text-deyoung-terracotta font-bold">Digital Integration</h3>
            <p className="text-deyoung-charcoal mb-4 leading-relaxed">
              I leverage strong <span className="font-bold">digital and technical skills</span> to implement these methods effectively 
              in both classroom and online environments.
            </p>
            <p className="text-deyoung-charcoal leading-relaxed">
              This includes the use of <span className="font-bold">teleconferencing tools, learning management systems (such as Moodle), 
              mathematics and reading support tools, video creation tools, and live streaming/connection platforms</span> 
              to enhance engagement, accessibility, and learning outcomes.
            </p>
          </div>

          {/* Box 4: Teaching Philosophy */}
          <div className="bg-[#f5efe7] p-8 rounded-md hover:shadow-md transition-shadow flex flex-col">
            <h3 className="text-2xl mb-4 text-deyoung-terracotta font-bold">Teaching Philosophy</h3>
            <p className="text-deyoung-charcoal mb-6 leading-relaxed flex-grow">
              I focus on <span className="font-bold">clarity, engagement, and measurable progress</span>, helping learners build 
              confidence, critical thinking skills, and long-term academic independence.
            </p>
            <div className="bg-white p-4 rounded-md mt-auto">
              <p className="text-center text-deyoung-navy font-semibold text-lg">
                "Structured learning. Measurable results. Global standards."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs