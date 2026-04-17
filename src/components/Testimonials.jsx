const Testimonials = () => {
  const testimonials = [
    {
      name: "Mrs. Adebayo",
      child: "Parent of SS2 Student",
      text: "My daughter's grades improved from C to A in just 3 months. The personalized approach made all the difference.",
    },
    {
      name: "David O.",
      child: "JAMB Candidate 2025",
      text: "I was struggling with Physics until I started lessons here. Scored 78 in JAMB. Thank you!",
    },
    {
      name: "Mr. Ibrahim",
      child: "Parent of JS3 Student",
      text: "Finally, a tutor who understands how to teach online. My son actually looks forward to his lessons.",
    },
  ]

  return (
    <section className="section-padding bg-deyoung-dark-bg">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-white">What Parents & Students Say</h2>
          <p className="text-gray-300">Real results from real families</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
              <div className="text-deyoung-terracotta text-4xl mb-4">"</div>
              <p className="text-gray-200 mb-4 italic">{testimonial.text}</p>
              <div className="border-t border-white/20 pt-4">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-300">{testimonial.child}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials