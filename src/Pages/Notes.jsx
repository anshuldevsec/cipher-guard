import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import { MobileSideBar, Sidebar, SidebarItem } from "../components/UserSidebar";
const MobileSidebarItems = [
  {
    icon: <PiVaultLight className="w-5 h-5" />,
    link: "/dashboard",
  },
  {
    icon: <GrDocumentNotes className="w-5 h-5" />,
    link: "/notes",
    active: true,
  },
  {
    icon: <RiAiGenerate className="w-5 h-5" />,
    link: "/generator",
  },
  {
    icon: <IoSettingsOutline className="w-5 h-5" />,
    link: "/settings",
  },
];
import { Link } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";
import { PiVaultLight } from "react-icons/pi";
import { GrDocumentNotes } from "react-icons/gr";
import { RiAiGenerate } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
const Notes = () => {
  const Profile = JSON.parse(localStorage.getItem("profile"));
  return (
    <main className=" flex h-screen overflow-hidden pr-4 py-4 bg-black">
      <Helmet>
        <title> {Profile.firstName}'s Notes</title>
        <meta name="description" content="" />
      </Helmet>
      <Sidebar>
        <Link to={"/dashboard"}>
          <SidebarItem
            icon={<PiVaultLight className=" w-5 h-5" />}
            text={"Dashboard"}
          />
        </Link>
        <Link to={"/notes"}>
          <SidebarItem
            icon={<GrDocumentNotes className=" w-5 h-5" />}
            text={"Notes"}
            active={true}
          />
        </Link>
        <Link to={"/generator"}>
          <SidebarItem
            icon={<RiAiGenerate className=" w-5 h-5" />}
            text={"Generator"}
          />
        </Link>
        <Link to={"/settings"}>
          <SidebarItem
            icon={<IoSettingsOutline className=" w-5 h-5" />}
            text={"Settings"}
          />
        </Link>
      </Sidebar>

      {/* mobile sidebar  */}
      <MobileSideBar items={MobileSidebarItems} />

      {/* //maincontent */}
      <main className=" w-full bg-white rounded-3xl p-4">
        <div>this is Valut</div>
      </main>
    </main>
  );
};

export default Notes;
