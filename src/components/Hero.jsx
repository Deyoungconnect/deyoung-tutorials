const Hero = () => {
  return (
    <section id="home" className="section-padding bg-deyoung-cream">
      <div className="container-content text-center">
        <h1 className="mb-4">
          Deyoung<span className="text-deyoung-terracotta">Tutorials</span>
        </h1>
        <p className="text-lg md:text-xl text-deyoung-gray max-w-2xl mx-auto mb-3">
          Certified Online Educator | Techy Teachers Academy | TEFL 120hrs | TRCN
        </p>
        <p className="text-xl md:text-2xl text-deyoung-terracotta font-semibold mb-3">
          Delivering Canadian-standards education to learners across Africa and the Western world.
        </p>
        <p className="text-base md:text-lg text-deyoung-navy font-medium mb-6">
          Certified. Experienced. Global.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary">
            Enroll Your Child Today
          </a>
          <a href="#about" className="btn-secondary">
            Meet Your Educator
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero