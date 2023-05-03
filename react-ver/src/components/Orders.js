function Orders(){
    return (
        <div className="mainOrder order-slider w-1/4 bg-teal-50 pr-6 relative h-full">
        <div
          className="relative flex flex-wrap bg-yellow-100 shadow-lg p-4 mt-32 rounded-lg"
        >
          {/*"absolute" instead of "fixed" as fixed works related to the window, not the parent element */}
          <div
            className="flex flex-grow text-xl font-bold pb-3 text-amber-500 border-b-2 border-orange-100"
          >
            <span>Your Order:</span>
            <span class="total ml-auto">£0.00</span>
          </div>
          <div
            className="order-content h-auto max-h-[420px] basis-full overflow-auto pt-3"
          ></div>
        </div>
      </div>
    );
}

export default Orders;