import React from "react";

const ProfileCard = () => {
  return (
    <div className="custom-shadow-sm p-4 rounded-lg">
      <div className="text-2xl font-normal  text-primary-200">Profile</div>
      <div className="min-h-[210px] flex items-center justify-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white  shadow-md shadow-primary-100">
          <img
            className="min-h-full w-full"
            src="https://i.ibb.co/pzmcj9G/11.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-center w-11/12 mx-auto">
        <h1 className=" text-primary-200 text-2xl">John abraham</h1>
        <span className="block text-primary-400">
          Web Application Developer
        </span>
        <p className="pt-4 text-center text-primary-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae
          quam ratione veritatis qui iusto illum quaerat. Atque laboriosam iste
          minima quibusdam illum. Delectus tempora est perferendis id cupiditate
          provident ab dignissimos, excepturi rerum possimus explicabo, eaque
          libero aperiam unde, qui exercitationem modi velit quaerat consequatur
          quidem non reprehenderit eius? Sequi corrupti saepe earum expedita
          perferendis voluptas.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
