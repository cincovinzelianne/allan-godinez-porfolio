const Experience = () => {
  return (
    <section id="experience" className="min-h-[50vh] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-darker to-space-dark" />
      
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent text-glow">
          Experience
        </h2>

        <div className="flex justify-center">
          <div className="glass-morphism p-12 rounded-lg glow-purple max-w-2xl text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent blur-xl opacity-30" />
              <p className="relative text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                No experience yet, but looking forward...
              </p>
            </div>
            <p className="mt-4 text-muted-foreground">
              Ready to embark on new adventures and create amazing experiences in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
