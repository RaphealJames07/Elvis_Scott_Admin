import {MdOutlineAccountBalanceWallet} from "react-icons/md";

const SummaryBoxes = () => {
    return (
        <div className="w-full h-max flex phone:flex-col gap-4">
            <div className="w-1/4 phone:w-full h-max bg-white border rounded border-gray-300 flex justify-between p-3">
                <div className="w-max h-max flex flex-col">
                    <p className="text-xs font-medium">Total Balance</p>
                    <p className="text-lg font-semibold text-black">
                        N75,234,122.00
                    </p>
                    <p className="text-xs">NGN</p>
                </div>
                <div className="w-10 h-full justify-center">
                    <MdOutlineAccountBalanceWallet
                        size={33}
                        className="bg-[#5a66f1] text-white p-1 rounded-sm"
                    />
                </div>
            </div>
            <div className="w-1/4 phone:w-full h-max bg-white border rounded border-gray-300 flex justify-between p-3">
                <div className="w-max h-max flex flex-col">
                    <p className="text-xs font-medium">Total Income</p>
                    <p className="text-lg font-semibold text-black">
                        N75,234,122.00
                    </p>
                    <p className="text-xs">NGN</p>
                </div>
                <div className="w-10 h-full justify-center">
                    <MdOutlineAccountBalanceWallet
                        size={33}
                        className="bg-[#60a5fa] text-white p-1 rounded-sm"
                    />
                </div>
            </div>
            <div className="w-1/4 phone:w-full h-max bg-white border rounded border-gray-300 flex justify-between p-3">
                <div className="w-max h-max flex flex-col">
                    <p className="text-xs font-medium">Total Expenses</p>
                    <p className="text-lg font-semibold text-black">
                        N75,234,122.00
                    </p>
                    <p className="text-xs">NGN</p>
                </div>
                <div className="w-10 h-full justify-center">
                    <MdOutlineAccountBalanceWallet
                        size={33}
                        className="bg-[#f43f5e] text-white p-1 rounded-sm"
                    />
                </div>
            </div>
            <div className="w-1/4 phone:w-full h-max bg-[#dafce6] border rounded border-gray-300 flex justify-between p-3">
                <div className="w-full h-max flex flex-col">
                    <p className="text-xs">Account Name:</p>
                    <p>Elvis Scott Wears Ltd</p>
                    <p>1234567890</p>
                    <p className="text-xs">Kuda Microfinance Bank</p>
                </div>
            </div>
        </div>
    );
};

export default SummaryBoxes;
