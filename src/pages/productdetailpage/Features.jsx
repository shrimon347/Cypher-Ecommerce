/* eslint-disable react/prop-types */
const Features = ({ product }) => {
  const { description, brand, details, features } = product;
  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="bg-[#FAFAFA] p-8">
        <div className="">
          <p className="text-2xl text-black font-medium">Details</p>
          <p className="mt-10">{description}</p>
        </div>
        <div className="mt-5">
          <p className="text-2xl text-black font-medium">Brand</p>
          <p className="mt-5">{brand}</p>
        </div>
        <div className="mt-5">
          <p className="text-2xl text-black font-medium">Features</p>

          {Object.keys(details).map((key) => (
            <div key={key}>
              <div  className="flex justify-between mt-5">
                <p> {key}</p>
                <p> {details[key]} </p>
              </div>
              <div className="divider"></div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <p className="text-2xl text-black font-medium">Other Features</p>

          {features.map((index,key) => (
            <div key={index}>
              <div  className="flex justify-between mt-5">
                <p> {features[key]} </p>
              </div>
              <div className="divider"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
