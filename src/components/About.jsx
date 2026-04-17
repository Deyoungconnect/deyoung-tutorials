const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center">About Me</h2>
          <div className="w-16 h-1 bg-deyoung-terracotta mx-auto mb-8"></div>
          
          <p className="text-lg mb-6">
            I am a passionate educator with over <span className="font-bold text-deyoung-terracotta">13 years of teaching experience</span>, specializing in both classroom and online learning. My approach is grounded in <span className="font-bold">Canadian educational methodologies</span>, gained through professional training at Oasis Canadian Schools (Nigeria), aligned with the <span className="font-bold">New Brunswick Ministry of Education, Canada</span>.
          </p>
          
          <p className="text-lg mb-6">
            I have served as a <span className="font-bold text-deyoung-terracotta">Quality Assurance Officer (Supervisor)</span> in two schools and as a Classroom Teacher in three others, where I also held leadership roles including <span className="font-bold">Head of Department (Sciences)</span> and <span className="font-bold">Administrative Coordinator</span>.
          </p>
          
          <p className="text-lg mb-6">
            I implement structured frameworks such as <span className="font-bold">ILP, PLP, and MPLP</span>, alongside <span className="font-bold">FAST and SAST assessment strategies</span>, to deliver personalized, measurable, and results-driven learning.
          </p>
          
          <p className="text-lg mb-6">
            I also integrate modern digital tools to create engaging and effective learning experiences, including <span className="font-bold">teleconferencing tools, learning management platforms (such as Moodle), mathematics and reading support tools, video creation tools, and live streaming/connection technologies</span> to enhance interaction, accessibility, and student engagement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 text-center">
            <div className="bg-[#f5efe7] p-5 rounded-md">
              <div className="text-3xl font-bold text-deyoung-terracotta">13+</div>
              <div className="font-semibold text-deyoung-navy">Years Experience</div>
            </div>
            <div className="bg-[#f5efe7] p-5 rounded-md">
              <div className="text-3xl font-bold text-deyoung-terracotta">5+</div>
              <div className="font-semibold text-deyoung-navy">Schools Served</div>
            </div>
            <div className="bg-[#f5efe7] p-5 rounded-md">
              <div className="text-3xl font-bold text-deyoung-terracotta">3</div>
              <div className="font-semibold text-deyoung-navy">Leadership Roles</div>
            </div>
            <div className="bg-[#f5efe7] p-5 rounded-md">
              <div className="text-3xl font-bold text-deyoung-terracotta">Global</div>
              <div className="font-semibold text-deyoung-navy">Learners Welcome</div>
            </div>
          </div>
          
          <div className="mt-8 bg-[#f5efe7] p-6 rounded-md">
            <h3 className="text-xl font-bold text-deyoung-navy text-center mb-4">Certifications</h3>
            <div className="flex flex-col md:flex-row justify-center gap-6 text-center">
              <div>
                <p className="font-bold text-deyoung-terracotta">Techy Teachers Academy</p>
                <p className="text-sm text-deyoung-gray">Certified Online Educator</p>
              </div>
              <div>
                <p className="font-bold text-deyoung-terracotta">TEFL</p>
                <p className="text-sm text-deyoung-gray">120-hour Certification</p>
              </div>
              <div>
                <p className="font-bold text-deyoung-terracotta">TRCN</p>
                <p className="text-sm text-deyoung-gray">Teachers Registration Council of Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About