import { memo } from 'react';

function Item() {
  return (
    <a href="/1">
      <div className="w-full overflow-hidden">
        <div className="relative group h-80 sm:h-150 w-full mx-auto overflow-hidden lg:rounded-xl">
          <img
            className="group-hover:scale-105 group-hover:duration-300 h-full w-full object-cover duration-700 ease-in-out grayscale-0 blur-0 scale-100"
            src="https://demo.vercel.pub/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fvercel-platforms%2Fimage%2Fupload%2Fv1642694987%2Ffmdsqzbntadkiuquvk1r.png&w=3840&q=75"
          />
        </div>
        <h3 className="text-4xl my-5">Platforms Starter Kit</h3>
        <p>
          Learn more about this template for site builders, multi-tenant
          platforms, and low-code tools.
        </p>
        <div className="flex py-3 items-center">
          <p className="text-mid mr-3">Jan 20, 2022</p>
          <div className="border-l border-gray-600 h-4 mr-3"></div>
          <p className="text-s text-gray-500">read 5 min</p>
        </div>
      </div>
    </a>
  );
}

export default memo(Item);
