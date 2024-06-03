interface SidebarProps {
  onClickAddBall: () => void;
}

const SideBar = (props: SidebarProps) => {
  const AMOUNT = 100000;

  return (
    <div className="flex flex-col px-8 py-4 w-[25%] h-[90%] bg-[#293448] rounded-lg shadow-lg">
      <div className="text-sm font-semibold bg-[#293448]">
        Wallet
        <div className="border text-[10px] font-bold flex justify-between px-4 py-2 items-center rounded-lg mt-2">
          <p className="flex items-center gap-2">
            <span className="text-green-500 text-sm">$ </span> {AMOUNT}
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1490/1490853.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
        </div>
      </div>
      <div className="text-sm font-semibold mt-6 bg-[#293448]">
        Add Bet
        <div className="border text-[10px] font-bold flex justify-between px-4 py-2 items-center rounded-lg mt-2">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-sm">$ </span>{" "}
            <input
              type="number"
              className="bg-transparent focus:outline-none"
            />
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1490/1490853.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
        </div>
      </div>
      <button
        className="mt-20 py-2 px-4 bg-green-500 rounded-lg hover:bg-green-400 text-black"
        onClick={props.onClickAddBall}
      >
        Add Ball
      </button>
    </div>
  );
};

export default SideBar;
