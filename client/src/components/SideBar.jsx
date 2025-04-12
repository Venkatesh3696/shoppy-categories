import React from "react";

const sidebarElements = [
  { name: "Home", icon: "home" },
  { name: "Products", icon: "products" },
  { name: "Categories", icon: "categories" },
  { name: "Orders", icon: "orders" },
  { name: "Customers", icon: "customers" },
  { name: "Reports", icon: "reports" },
  { name: "Coupons", icon: "coupons" },
  { name: "Inbox", icon: "inbox" },
];
const otherInfo = [
  { name: "Knowledge Base", icon: "knowledge" },
  { name: "Product Updates", icon: "updates" },
];
const settings = [
  { name: "Personal Settings", icon: "settings" },
  { name: "Global Settings", icon: "settings" },
];

const SideBar = () => {
  return (
    <div className="w-70 h-full p-4 bg-grey-500 bg-[#1e2654]">
      {sidebarElements.map((each, i) => (
        <div
          key={`sidebar-${i}`}
          className="flex flex-row items-center p-2 text-white hover:bg-[#2a2f6d]"
        >
          {/* <h1>{each.icon}</h1> */}
          <h1 className="ml-2">{each.name}</h1>
        </div>
      ))}
      <p className="text-white">Other information</p>

      {otherInfo.map((each, i) => (
        <div
          key={`sidebar-${i}`}
          className="flex flex-row items-center p-2 text-white hover:bg-[#2a2f6d]"
        >
          <h1 className="ml-2">{each.name}</h1>
        </div>
      ))}

      <p className="text-white">Settings</p>
      {settings.map((each, i) => (
        <div
          key={`sidebar-${i}`}
          className="flex flex-row items-center p-2 text-white hover:bg-[#2a2f6d]"
        >
          <h1 className="ml-2">{each.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
