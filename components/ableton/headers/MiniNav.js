import React from "react";
import Button from "../../ui/Button";

const MiniNav = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-2xl mx-auto bg-white">
        <div className="max-w-7xl mx-auto space-x-6 py-4 ">
          <Button className="text-red-500 font-medium">About</Button>
          <Button className="font-semibold">Jobs</Button>
        </div>
      </div>
    </div>
  );
};

export default MiniNav;
