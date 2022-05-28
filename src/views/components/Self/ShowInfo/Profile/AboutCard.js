import React from "react";

const AboutCard = () => {
  return (
    <div className="custom-shadow-sm p-4 rounded-lg mt-4">
      <div className="text-2xl text-primary-200">About User</div>
      <div>
        <p className="py-2 text-primary-400">
          Tart I love sugar plum I love oat cake. Sweet roll caramels I love
          jujubes. Topping cake wafer.
        </p>
        <div className="py-2">
          <div className="mt-4">
            <p className="text-primary-200 text-md text-medium">Joined:</p>
            <p className="text-primary-400 text-sm pt-1">05-05-2020</p>
          </div>
          <div className="mt-4">
            <p className="text-primary-200 text-md text-medium">Lives:</p>
            <p className="text-primary-400 text-sm pt-1">
              United States of America
            </p>
          </div>
          <div className="mt-4">
            <p className="text-primary-200 text-md text-medium">Email:</p>
            <p className="text-primary-400 text-sm pt-1">
              codergalib@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
