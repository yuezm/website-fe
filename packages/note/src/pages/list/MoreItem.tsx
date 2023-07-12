import { memo } from 'react';

function MoreItem() {
  return (
    <article>
      <a href="/2">
        <div className="rounded-2xl border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all ease duration-500">
          <img
            className="w-full h-64 object-cover duration-700 ease-in-out grayscale-0 blur-0 scale-100"
            src="https://demo.vercel.pub/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fvercel-platforms%2Fimage%2Fupload%2Fv1642127409%2Ftcfvbui9mowuo9q853uz.png&w=1080&q=75"
          />
          <div className="py-8 px-5 h-36 border-t border-gray-200">
            <h3 className="text-xl tracking-wide">
              Announcing our $150M Series D
            </h3>
            <p className="text-md italic text-gray-600 my-2 truncate">
              We're excited to announce $150 million in Series D funding at a
              valuation of over $2.5 billion, with the goal of building the
              end-to-end platform for the modern Web.
            </p>
            <p className="text-sm text-gray-600 my-2">Jan 14, 2022</p>
          </div>
        </div>
      </a>
    </article>
  );
}

export default memo(MoreItem);
