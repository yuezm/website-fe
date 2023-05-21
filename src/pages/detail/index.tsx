import { memo } from 'react';
import MoreItem from '../list/MoreItem';

function Detail() {
  return (
    <section className="w-full max-w-screen-xl mx-auto">
      <h1 className="font-bold text-3xl md:text-6xl mb-10 text-gray-800 text-center">
        Vercel is now Bercel
      </h1>
      <p className="text-sm text-center md:text-base font-light text-gray-500 w-10/12 m-auto my-5">
        {' '}
        Jan 12, 2022
      </p>

      {/* 继续阅读 */}
      <div className="relative mt-10 sm:mt-20 mb-20">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 bg-white text-sm text-gray-500">
            Continue Reading
          </span>
        </div>
      </div>

      {/* 更多 */}
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 w-full">
        <MoreItem></MoreItem>
        <MoreItem></MoreItem>
        <MoreItem></MoreItem>
      </div>
    </section>
  );
}

export default memo(Detail);
