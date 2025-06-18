import React from 'react';

function Cards({ item }) {
    return (
        <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure >
                    <img src={item.image} className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg font-semibold">
                        {item.name}
                        <div className="badge badge-secondary ml-2">NEW</div>
                    </h2>
                    <p className="text-gray-600">{item.title}</p>
                    <div className="card-actions justify-between mt-2">
                        <div className="badge badge-outline text-gray-500">${item.price}</div>
                        <button className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
