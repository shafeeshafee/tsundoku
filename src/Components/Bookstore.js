import React from "react";

const Bookstore = ({ image, storeName, storeDescription, address, website }) => {
	return (
		<div>
			<div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 border-2 font-headings">
				<img className="w-full h-56 object-cover object-center" src={image} alt={storeName} />
				<div className="py-4 px-6">
					<h1 className="text-2xl font-semibold text-reddish">{storeName}</h1>
					<p className="py-2 text-lg text-gray-700 h-32">{storeDescription}</p>

					<div className="flex items-center mt-4 text-gray-700">
						<svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
							<path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
						</svg>
						<h1 className="px-2 text-xs">{address}</h1>
					</div>
					<div className="flex items-center mt-4 text-gray-700">
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
						</svg>
						<h1 className="px-2 text-xs text-reddish">{website}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bookstore;
