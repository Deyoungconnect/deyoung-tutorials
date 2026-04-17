const Team = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2>Our Professional Team</h2>
          <div className="w-16 h-1 bg-deyoung-terracotta mx-auto mb-6"></div>
          <p className="text-deyoung-gray text-lg">
            Highly trained educators grounded in Canadian educational methodologies
          </p>
        </div>

        <div className="bg-[#f5efe7] p-8 md:p-10 rounded-md mb-10">
          <p className="text-deyoung-charcoal text-center mb-6">
            We are a team of <span className="font-bold">highly trained educators grounded in Canadian educational methodologies</span>, 
            ensuring consistent, high-quality, and student-centered instruction. We deliver our expertise across 
            <span className="font-bold"> all levels of the Western education system</span> — 
            Early Childhood, Elementary/Primary, Middle School, and High School — 
            tailoring our approach to meet each learner's developmental and academic needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#f5efe7] p-6 rounded-md text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-deyoung-navy mb-2">English & Literacy (All Levels)</h3>
            <p className="text-deyoung-gray text-sm">Reading, Writing, Grammar, Comprehension</p>
          </div>
          
          <div className="bg-[#f5efe7] p-6 rounded-md text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">🔢</div>
            <h3 className="text-xl font-bold text-deyoung-navy mb-2">Mathematics (All Levels)</h3>
            <p className="text-deyoung-gray text-sm">Foundational to Advanced Mathematics</p>
          </div>
          
          <div className="bg-[#f5efe7] p-6 rounded-md text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">🔬</div>
            <h3 className="text-xl font-bold text-deyoung-navy mb-2">Sciences</h3>
            <p className="text-deyoung-gray text-sm">Biology, Chemistry, Physics</p>
          </div>
          
          <div className="bg-[#f5efe7] p-6 rounded-md text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-deyoung-navy mb-2">Advanced Maths</h3>
            <p className="text-deyoung-gray text-sm">Further Maths, Pre-Calculus & Calculus</p>
          </div>
          
          <div className="bg-[#f5efe7] p-6 rounded-md text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="text-xl font-bold text-deyoung-navy mb-2">Basic Science & Cambridge</h3>
            <p className="text-deyoung-gray text-sm">Cambridge Curriculum, Basic Science</p>
          </div>
          
          <div className="bg-[#f5efe7] p-6 rounded-md text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="text-xl font-bold text-deyoung-navy mb-2">Digital & Tech Skills</h3>
            <p className="text-deyoung-gray text-sm">Web Development, Graphic Design, Video Editing</p>
          </div>
        </div>

        {/* Two Separate Boxes: Teaching Framework & Digital Integration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Box 1: Teaching Framework */}
          <div className="bg-[#1a252f] p-8 rounded-md text-white">
            <h3 className="text-xl font-bold text-center mb-4 text-white">Our Teaching Framework</h3>
            <p className="text-gray-300 text-center mb-6">
              All team members are trained in ILP, PLP, MPLP, FAST, and SAST, enabling personalized, structured, and results-driven learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-[#c44536] px-4 py-1 rounded-full text-sm font-semibold">ILP</span>
              <span className="bg-[#c44536] px-4 py-1 rounded-full text-sm font-semibold">PLP</span>
              <span className="bg-[#c44536] px-4 py-1 rounded-full text-sm font-semibold">MPLP</span>
              <span className="bg-[#c44536] px-4 py-1 rounded-full text-sm font-semibold">FAST</span>
              <span className="bg-[#c44536] px-4 py-1 rounded-full text-sm font-semibold">SAST</span>
            </div>
          </div>

          {/* Box 2: Digital Integration */}
          <div className="bg-[#1a252f] p-8 rounded-md text-white">
            <h3 className="text-xl font-bold text-center mb-4 text-white">Digital Integration</h3>
            <p className="text-gray-300 text-center">
              We integrate modern digital tools into our teaching to enhance engagement and effectiveness. This has been mentioned in the why choose me section above
              <span className="font-semibold"> </span> — 
              ensuring a seamless and interactive learning experience across both physical and online environments.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-deyoung-gray">
          <p className="font-semibold text-deyoung-navy">🌍 Serving learners across Africa, UK, Canada, Europe, and beyond</p>
          <p className="text-sm mt-2">Early Childhood • Elementary/Primary • Middle School • High School</p>
        </div>
      </div>
    </section>
  )
}

export default Team