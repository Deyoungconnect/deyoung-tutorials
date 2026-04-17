const Testimonials = () => {
  const testimonials = [
    {
      name: "Mrs. Onyia",
      role: "Parent",
      text: "Deyoung Tutorials provided exceptional online tutoring for my two children in Mathematics and Biology. The structured lessons, combined with the use of interactive digital tools, kept them fully engaged and significantly improved their understanding and confidence.",
      rating: 5,
    },
    {
      name: "Mrs. Ibe",
      role: "Parent",
      text: "My daughter's academic transformation has been outstanding. She graduated from middle school with distinctions and emerged as the overall best student. The teaching approach, consistency, and engaging learning tools made a remarkable difference in her performance.",
      rating: 5,
    },
    {
      name: "Mrs. Obika",
      role: "Parent",
      text: "The impact of Deyoung Tutorials on my daughter's academic journey has been impressive. Through well-structured lessons and effective use of digital learning tools, she developed strong mastery in her science subjects and performed excellently in her JAMB examinations.",
      rating: 5,
    },
    {
      name: "Master Micah",
      role: "Student",
      text: "Joining the tech academy was a turning point for me. The training was practical and well-structured, and I've already secured my first client. The skills I gained are directly applicable in real-world projects.",
      rating: 5,
    },
    {
      name: "Mr. Mac Anthony",
      role: "Student",
      text: "The academy equipped me with the right technical skills and confidence to begin working on my own major project. The mentorship and guidance were clear, practical, and highly valuable.",
      rating: 5,
    },
    {
      name: "Mr. Donald",
      role: "Parent",
      text: "My Grade 5 son showed significant improvement in Mathematics within just three months. What stood out most was how the use of engaging digital tools helped capture his attention and made learning enjoyable and effective.",
      rating: 5,
    },
    {
      name: "Master David Okoye",
      role: "Student",
      text: "Physics used to be very difficult for me, but the lessons here changed everything. The teaching style, along with interactive learning tools, made complex concepts easy to understand, and my results improved greatly.",
      rating: 5,
    },
    {
      name: "Pastor Oluwasuen",
      role: "Parent",
      text: "Deyoung Tutorials truly understands how to deliver effective online learning. The use of modern digital tools keeps my son engaged, and he now looks forward to his lessons. The improvement in his attitude and performance has been remarkable.",
      rating: 5,
    },
  ]

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <section id="testimonials" className="section-padding bg-deyoung-dark-bg">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-white">What Parents & Students Say</h2>
          <div className="w-16 h-1 bg-deyoung-terracotta mx-auto mt-4 mb-4"></div>
          <p className="text-gray-300">
            Real stories. Real results. From families we've served.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#f5efe7] p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-deyoung-terracotta text-2xl mb-2">
                {renderStars(testimonial.rating)}
              </div>
              <div className="text-deyoung-terracotta text-5xl mb-3 leading-none">"</div>
              <p className="text-deyoung-charcoal mb-4 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="border-t border-gray-300 pt-4">
                <div className="font-bold text-deyoung-navy text-lg">
                  {testimonial.name}
                </div>
                <div className="text-sm text-deyoung-terracotta font-medium">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm">
            ⭐⭐⭐⭐⭐ &nbsp; All testimonials are from real parents and students
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials