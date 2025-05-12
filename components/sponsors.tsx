export default function Sponsors() {
  const sponsors = [
    {
      name: 'TechCorp',
      tier: 'Platinum',
      logo: 'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1747040617~exp=1747044217~hmac=b03cda4ea23ca0a6236e30a5f08465539f02b2771fc9d5b1648f269d55487a8a&w=2000',
    },
    {
      name: 'InnovateSoft',
      tier: 'Gold',
      logo: 'https://img.freepik.com/premium-photo/double-exposure-creative-light-bulb-hologram-modern-desktop-with-laptop-background-research-development-concept_258654-33885.jpg?w=2000',
    },
    {
      name: 'DevNetwork',
      tier: 'Gold',
      logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'CloudSystems',
      tier: 'Silver',
      logo: 'https://imgs.search.brave.com/s0bnoMDXMT_7hMKt8ZdBA8JzhPT3B8SkeUs8O5_hF1U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWls/dGluLmNvbS9zaXRl/cy93d3cuYnVpbHRp/bi5jb20vZmlsZXMv/c3R5bGVzL2NrZWRp/dG9yX29wdGltaXpl/L3B1YmxpYy9pbmxp/bmUtaW1hZ2VzL2Ns/b3VkLWNvbXB1dGlu/Zy5qcGc',
    },
    {
      name: 'CodeLabs',
      tier: 'Silver',
      logo: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1747040143~exp=1747043743~hmac=72339c8adda38f4df6ed4fdb6c35c06bd3cc8d90901ea14e390b87bdb6506b64&w=1800',
    },
  ]

  return (
    <section id="sponsors" className="bg-base-100 py-20">
      <div className="section-container">
        <h2 className="section-title">
          Our <span className="gradient-text">Sponsors</span>
        </h2>
        <p className="section-subtitle">
          Thanks to our amazing sponsors who make this event possible.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-24 w-40 bg-base-200 rounded-lg flex items-center justify-center p-4 border border-base-300/50">
                <img
                  src={sponsor.logo || '/placeholder.svg'}
                  alt={sponsor.name}
                  className="max-h-full max-w-full"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{sponsor.name}</p>
              <span className="text-xs text-neutral">
                {sponsor.tier} Sponsor
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
