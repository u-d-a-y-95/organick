export default function NewsLetter() {
  return (
    <div
      style={{
        background: `url("/img/newslatteer.png") no-repeat`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex flex-col md:flex-row gap-5 rounded-lg justify-around items-center p-10 md:min-h-[250px]"
    >
      <div>
        <h3 className="text-3xl font-bold text-white md:max-w-[230px]">
          Subscribe to our Newsletter
        </h3>
      </div>
      <div>
        <input
          className="px-5 py-3 rounded text-sm placeholder:font-thin placeholder:italic"
          placeholder="Your Email Address"
        />
        <button className="bg-primary text-white px-5 py-3 rounded ml-2">
          Subscribe
        </button>
      </div>
    </div>
  );
}
