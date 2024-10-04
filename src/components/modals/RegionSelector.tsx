export const regions = [
  {
    title: "I'm flexible",
    img: "/regions/flexible.png",
  },
  {
    title: "Southeast Asia",
    img: "/regions/southeast.png",
  },
  {
    title: "Canada",
    img: "/regions/canada.png",
  },
  {
    title: "Europe",
    img: "/regions/europe.png",
  },
  {
    title: "Malaysia",
    img: "/regions/malaysia.png",
  },
  {
    title: "United States",
    img: "/regions/usa.png",
  },
];

const RegionSelector = () => {
  return (
    <div className='absolute top-14 left-0 w-max bg-white p-5 rounded-2xl z-30'>
      <h2 className='font-semibold'>Select region</h2>

      <div className='grid grid-cols-3 gap-5 py-5'>
        {regions?.map((region) => (
          <div>
            <img
              className='min-w-28 h-28 border-2 rounded-xl'
              src={region.img}
              alt={region.title}
            />
            <h3 className='text-center mt-2'>{region.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionSelector;
