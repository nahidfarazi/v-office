
import React from "react";

import ListItem from "@/components/ListItem";

const page = () => {
  return (
    <div className="ml-[90px] bg-gray-100  h-screen text-black ">
      <div className="flex items-center justify-between px-8 py-1 border-[1px] border-gray-300 rounded-md">
        <div className="flex flex-col">
          <h1 className="text-[34px]">Employees</h1>
          <p className="text-gray-600 text-[18px]">user activities, add user</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-gray-200 px-6 py-2 rounded-md font-semibold">
            View All{" "}
          </button>
          <button className="bg-blue-600 px-4 rounded-md text-white font-bold">
            + Add user
          </button>
        </div>
      </div>

      {/* table start */}

      <div className="grid grid-cols-6 items-center font-bold px-6 py-2 border-b-[1px]">
        <div className="col-span-2 flex gap-3">
          <input type="checkbox" />
          <h1>Name</h1>
        </div>
        <div>Position</div>
        <div>Status</div>
        <div>Work</div>
        <div>Project</div>
      </div>

      <ListItem 
      name="Nahid Farazi"
      role="CEO"
      status="Active"
      email="nahidfarazi19@gmail.com"
      work="Running"
      project="v-office"
      href="/nahid"
      />

<ListItem 
      name="Shikha Akter"
      role="Member"
      status="Active"
      email="shikhafarazi19@gmail.com"
      work="Running"
      project="v-office"
      
      />

      <ListItem 
      name="Mahedi Farazi"
      role="C0-CEO"
      status="Active"
      email="mahedifarazi19@gmail.com"
      work="Running"
      project="v-office"
      
      />

<ListItem 
      name="Nasima Begum"
      role="Manager"
      status="Active"
      email="nasima3349@gmail.com"
      work="Running"
      project="v-office"
      
      />

<ListItem 
      name="Sikander Farazi"
      role="Senior"
      status="Active"
      email="sikanderfarazi1239@gmail.com"
      work="Running"
      project="v-office"
      
      />





    </div>
  );
};

export default page;
