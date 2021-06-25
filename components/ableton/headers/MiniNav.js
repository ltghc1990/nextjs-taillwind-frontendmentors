import React from "react";
import Button from "../../ui/Button";

const MiniNav = () => {
  return (
    <div className="flex container mx-auto space-x-6 py-2 my-4">
      <Button className="text-red-500 font-medium">About</Button>
      <Button className="font-semibold">Jobs</Button>
    </div>
  );
};

export default MiniNav;
