import { Process1, Process2, Process3, Process4 } from "../Assets";
const DreamApartment = () => {
  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple & easy way to find your dream Appointment
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. In a free hour, when our power of choice is untrammelled
            and when nothing prevents our being able to do what we like best,
            every pleasure is to be welcomed.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded shadow-lg hover:bg-gray-800 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="w-full flex flex-col ">
          <div className="flex flex-1 w-full">
            <img
              src={Process1}
              alt="House"
              className="w-full h-full object-cover rounded"
            />
            <img
              src={Process2}
              alt="People"
              className="w-full h-[70%] object-cover rounded"
            />
          </div>
          <div className="flex flex-1">
            <img
              src={Process3}
              alt="Keys"
              className="w-full h-[70%] object-cover rounded"
            />
            <img
              src={Process4}
              alt="Room"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamApartment;
