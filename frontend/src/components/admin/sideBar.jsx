"use client";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Link from "next/link";
   import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import CategoryIcon from "@mui/icons-material/Category";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GroupIcon from "@mui/icons-material/Group";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import LightModeIcon from "@mui/icons-material/LightMode";
const SideBar = () => {
  return (
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? "#b4c2c0" : "#718280",
                backgroundColor: active ? "#4f5d73" : "#071121",
              };
          },
        }}
      >
        <MenuItem>
          <div className="card" style={{ backgroundColor: "#44ebe2" }}>
            <div className="card-body">
              <AdminPanelSettingsIcon /> Administrateur
            </div>
          </div>
        </MenuItem>
        <MenuItem component={<Link href="/admin/dashboard" />}>
          {" "}
          <DashboardIcon />
          Dashboard{" "}
        </MenuItem>
        <MenuItem component={<Link href="/admin/products" />}>
          {" "}
          <ArticleIcon />
          Produits{" "}
        </MenuItem>
        <MenuItem component={<Link href="/admin/categories" />}>
          {" "}
          <CategoryIcon />
          Catégories{" "}
        </MenuItem>
        <MenuItem component={<Link href="/admin/scategories" />}>
          <ContentCopyIcon /> Sous/Catégories
        </MenuItem>
        <MenuItem component={<Link href="/admin/users" />}>
          {" "}
          <GroupIcon />
          Utilisateurs{" "}
        </MenuItem>
        <MenuItem component={<Link href="/admin/orders" />}>
          {" "}
          <ReceiptIcon />
          Commandes{" "}
        </MenuItem>
        <MenuItem component={<Link href="/admin/calendars" />}>
          <CalendarMonthIcon /> Calendrier{" "}
        </MenuItem>
        <MenuItem component={<Link href="/admin/chart" />}>
          {" "}
          <BarChartIcon />
          Chart{" "}
        </MenuItem>
        <MenuItem component={<Link href="/admin/theme" />}>
          {" "}
          <LightModeIcon />
          Thème{" "}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
export default SideBar;


// import Link from "next/link";
// import React from "react";
// import { CgProfile } from "react-icons/cg";
// import { CiSettings, CiTimer } from "react-icons/ci";
// import { FaBug, FaThList } from "react-icons/fa";
// import { FcApproval, FcIdea } from "react-icons/fc";
// import { IoIosAddCircle, IoMdPersonAdd } from "react-icons/io";
// import { IoSettings } from "react-icons/io5";
// import {
//   MdDashboard,
//   MdOutlinePets,
// } from "react-icons/md";

// const SideBar = async () => {
 

//   return (
//     <div className="h-screen overflow-hidden sticky top-0 z-30 overflow-x-hidden ">
//       <div className="drawer lg:drawer-open h-full overflow-hidden	">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex flex-col items-center justify-center sm:hidden">
//           {/* Page content here */}
//           <label
//             htmlFor="my-drawer-2"
//             className="btn btn-primary drawer-button lg:hidden"
//           >
//             Open drawer
//           </label>
//         </div>
//         <div className="drawer-side overflow-hidden	">
//           <label
//             htmlFor="my-drawer-2"
//             aria-label="close sidebar"
//             className="drawer-overlay"
//           ></label>

//           <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
           
//           <ul className="menu bg-base-200 w-56 rounded-box">
//               <li>
//                 <h2 className="menu-title">Dashboard</h2>
//                 <ul>
//                   <Link href="/admin/dashboard">
//                     <li>
//                       <span>
//                         <MdDashboard className="mr-1" />
//                         Dashboard
//                       </span>
//                     </li>
//                   </Link>
//                 </ul>
//               </li>
//             </ul>

//           <ul className="menu bg-base-200 w-56 rounded-box">
//               <li>
//                 <h2 className="menu-title">Administrateur</h2>
//                 <ul>
//                   <Link href="/admin/dashboard">
//                     <li>
//                       <span>
//                       <AdminPanelSettingsIcon  className="mr-1" />
//                         Administrateur
//                       </span>
//                     </li>
//                   </Link>
//                 </ul>
//               </li>
//             </ul>
           

//             <ul className="menu bg-base-200 w-56 rounded-box">
//               <li>
//                 <h2 className="menu-title">Pp</h2>
//                 <ul>
//                   <Link href="/admin/products">
//                     <li>
//                       <span>
//                       <ArticleIcon className="mr-1" />
//                         Produits
//                       </span>
//                     </li>
//                   </Link>

//                   <Link href="/admin/categories">
//                     <li>
//                       <span>
//                       <CategoryIcon className="mr-1" />
//                         Catégories
//                       </span>
//                     </li>
//                   </Link>
//                 </ul>
//               </li>
//             </ul>

//             <ul className="menu bg-base-200 w-56 rounded-box">
//               <li>
//                 <h2 className="menu-title">Adoption</h2>
//                 <ul>
//                   <Link href="/dashboard/petslist">
//                     <li>
//                       <span>
//                         <MdOutlinePets className="mr-1" /> Pets List
//                       </span>
//                     </li>
//                   </Link>
//                   <Link href="/dashboard/myrequests">
//                     <li>
//                       <span>
//                         <FcApproval className="mr-1" /> Adoption Requests{" "}
//                       </span>
//                     </li>
//                   </Link>
//                 </ul>
//               </li>
//             </ul>

//             <ul className="menu bg-base-200 w-56 rounded-box">
//               <li>
//                 <h2 className="menu-title">MyPet Development</h2>
//                 <ul>
//                   <Link
//                     target="_blank"
//                     href="https://helpdesk.mydevify.com/tickets/create_new"
//                   >
//                     <li>
//                       <span>
//                         <FaBug className="mr-1" /> Bug Report
//                       </span>
//                     </li>
//                   </Link>
//                   <Link
//                     target="_blank"
//                     href="https://helpdesk.mydevify.com/tickets/create_new"
//                   >
//                     <li>
//                       <span>
//                         <FcIdea className="mr-1" /> Suggest
//                       </span>
//                     </li>
//                   </Link>
//                 </ul>
//               </li>
//             </ul>

//             <form
//               action={async () => {
//                 "use server";
//                 await signOut();
//               }}
//             >
//               <button className="ml-8 mt-4 btn btn-primary">Logout</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SideBar;
