import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlinePeopleOutline } from "react-icons/md"
import { BiNotepad } from "react-icons/bi"
import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi"
import { RiBillLine } from "react-icons/ri"
import { ImLab } from "react-icons/im"
import { BsFileBarGraph } from "react-icons/bs"

export const sbNavItems = [
  {
    name: "Dashboard",
    icon: <TbLayoutDashboard />,
    link: "/",
  },
  {
    name: "Patient",
    icon: <MdOutlinePeopleOutline />,
    link: "/patient",
  },
  {
    name: "Appointment",
    icon: <BiNotepad />,
    link: "/appointment",
  },
  {
    name: "Doctor",
    icon: <FaUserDoctor />,
    link: "/doctor",
  },
  {
    name: "Prescription",
    icon: <GiMedicines />,
    link: "/prescription",
  },
  {
    name: "Billing",
    icon: <RiBillLine />,
    link: "/billing",
  },
  {
    name: "Lab Orders",
    icon: <ImLab />,
    link: "/lab-orders",
  },
  {
    name: "Reports",
    icon: <BsFileBarGraph />,
    link: "/reports",
  },
]