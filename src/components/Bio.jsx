import { BIO } from "../constants";

const Bio = () => {
  return (
    <section className="flex max-w-5xl flex-col items-center gap-12 pt-20" id="bio">
      <h2 className="text-center text-5xl lg:text-4xl font-semibold tracking-wide text-white">Bio</h2>
      <div className="relative mx-auto max-w-5xl rounded-2xl bg-black/30 p-6 backdrop-blur-xl shadow-xl border border-transparent bg-gradient-to-br from-white/10 to-white/5">
        <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-40"></div>
        <div className="relative z-10">
          {BIO.map((bio, index) => (
            <p key={index} className="mb-4 text-lg lg:text-xl text-white text-opacity-90 leading-relaxed">
              {bio}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
