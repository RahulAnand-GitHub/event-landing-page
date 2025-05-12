export default function Speakers() {
  const speakers = [
    {
      name: 'Priya Sharma',
      role: 'Senior Software Engineer, Google',
      bio: '10+ years of experience in developing scalable web applications and mentoring junior developers.',
      image:
        'https://images.pexels.com/photos/1181312/pexels-photo-1181312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      topics: ['System Design', 'Career Growth'],
    },
    {
      name: 'Alex Johnson',
      role: 'Tech Lead, Amazon',
      bio: 'Expert in cloud architecture with a focus on serverless and microservices design patterns.',
      image:
        'https://images.pexels.com/photos/8929481/pexels-photo-8929481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      topics: ['Cloud Architecture', 'DevOps'],
    },
    {
      name: 'Michael Chen',
      role: 'Engineering Manager, Microsoft',
      bio: 'Passionate about building high-performance teams and creating innovative products.',
      image:
        'https://images.pexels.com/photos/7681134/pexels-photo-7681134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      topics: ['Team Leadership', 'Product Development'],
    },
    {
      name: 'Sarah Williams',
      role: 'AI Research Scientist, Meta',
      bio: 'Ph.D. in Computer Science with expertise in machine learning and natural language processing.',
      image:
        'https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      topics: ['AI/ML', 'Research to Production'],
    },
  ]

  return (
    <section id="speakers" className="bg-base-200 dark:bg-base-200/30 py-20">
      <div className="section-container">
        <h2 className="section-title">
          Meet Our <span className="gradient-text">Speakers</span>
        </h2>
        <p className="section-subtitle">
          Learn from industry veterans with proven track records at leading tech
          companies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="card card-shadow bg-base-100 border border-base-300/50 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <figure className="relative">
                <img
                  src={speaker.image || '/placeholder.svg'}
                  alt={speaker.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg">{speaker.name}</h3>
                <p className="text-sm text-primary font-medium">
                  {speaker.role}
                </p>
                <p className="text-sm text-neutral mt-2">{speaker.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {speaker.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="badge badge-sm bg-primary/10 text-primary border-primary/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
