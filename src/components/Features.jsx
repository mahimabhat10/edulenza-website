function Features() {
  const features = [
    "Adaptive AI Tutor",
    "Microlearning Library",
    "Skill Assessments",
    "Career Coaching",
    "School Dashboard",
    "Verified Certificates"
  ];

  return (
    <section>
      <h2>Everything you need to learn, teach, and grow</h2>

      <div>
        {features.map((item) => (
          <div key={item}>
            <h3>{item}</h3>
            <p>Learn more about {item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;