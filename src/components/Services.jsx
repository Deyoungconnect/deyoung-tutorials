const Services = () => {
  const services = [
    {
      title: "One-on-One Tutoring",
      description: "Personalized attention tailored to your child's learning style, pace, and goals.",
      price: "From ₦15,000/session",
      features: ["Custom lesson plans", "Flexible scheduling", "Progress reports"],
    },
    {
      title: "Group Classes",
      description: "Collaborative learning with peers. Maximum 6 students per class for individual attention.",
      price: "From ₦8,000/session",
      features: ["Peer learning", "Interactive sessions", "Weekly assessments"],
    },
    {
      title: "Exam Preparation",
      description: "Focused preparation for WAEC, NECO, JAMB, and internal exams with proven strategies.",
      price: "From ₦20,000/package",
      features: ["Past questions", "Mock exams", "Time management skills"],
    },
  ]

  return (
    <section id="services" className="section-padding bg-deyoung-cream">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2>What I Offer</h2>
          <p className="text-deyoung-gray">
            Choose the learning experience that fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl mb-3">{service.title}</h3>
              <p className="text-deyoung-gray text-sm mb-4">{service.description}</p>
              <div className="text-deyoung-terracotta font-bold text-lg mb-4">{service.price}</div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-deyoung-charcoal flex items-center gap-2">
                    <svg className="w-4 h-4 text-deyoung-terracotta" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-secondary w-full text-center block text-sm">
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services