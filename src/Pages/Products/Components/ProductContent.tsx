import {Pagination} from "antd";
import ProductList from "./ProductList";
import {FaPlus} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const ProductContent = () => {
    return (
        <>
            <p className="text-lg">Products</p>
            <div className="w-full h-max flex flex-col gap-2 bg-white px-2 py-2 rounded">
                <div className="w-full h-max flex justify-between ">
                    <div className="w-max h-max">
                        <NavLink to={"/admin/products/create"}>
                            <button className="w-max h-max flex gap-2 items-center justify-center px-3 text-xs py-2 font-medium bg-[#13c56b] text-white rounded">
                                <FaPlus /> Add Product
                            </button>
                        </NavLink>
                    </div>
                    <div className="">
                        <input
                            type="search"
                            placeholder="Search Products"
                            className="w-52 h-8 rounded border outline-none focus:border focus:border-green-300 pl-2 text-xs"
                        />
                    </div>
                </div>
                <div className="w-full h-max flex px-2 overflow-x-auto">
                    <div className="w-max h-8 flex items-center gap-8">
                        <div className="w-max h-max flex items-center cursor-pointer transition-all duration-500 font-medium text-sm text-[#118686]">
                            All
                        </div>
                        <div className="w-max h-max flex items-center cursor-pointer transition-all duration-500 font-medium text-sm text-gray-400">
                            Adidas
                        </div>
                        <div className="w-max h-max flex items-center cursor-pointer transition-all duration-500 font-medium text-sm text-gray-400">
                            Nike
                        </div>
                        <div className="w-max h-max flex items-center cursor-pointer transition-all duration-500 font-medium text-sm text-gray-400">
                            Air Jordans
                        </div>
                        <div className="w-max h-max flex items-center cursor-pointer transition-all duration-500 font-medium text-sm text-gray-400">
                            Yeezy
                        </div>
                        <div className="w-max h-max flex items-center cursor-pointer transition-all duration-500 font-medium text-sm text-gray-400">
                            New Balance
                        </div>
                        <div className="w-max h-max flex items-center cursor-pointer transition-all duration-500 font-medium text-sm text-gray-400">
                            New Balance
                        </div>
                        <div className="w-max h-max flex items-center cursor-pointer transition-all duration-500 font-medium text-sm text-gray-400">
                            New Balance
                        </div>
                    </div>
                </div>
                <div className="w-full h-max flex">
                    <ProductList />
                </div>
                <div className="w-full h-max flex justify-end">
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default ProductContent;
