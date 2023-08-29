import { useState } from "react"

import { dispDate } from "./utils/dispDate"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

import { BsFillCalendarMinusFill } from "react-icons/bs"
import { RiNotification2Line } from "react-icons/ri"
import { TbMessage } from "react-icons/tb"

import "./styles.css"

export default function Header() {  
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <header className="header">
      <div className="nb-info1">
        <div className="nb-dr-container">
          <div className="nb-dr-profile"></div>
          <div className="nb-dr-info">
            <div className="nb-dr-name">Dr. M.S. Tamilarasi, M.D.S.</div>
            <div className="nb-dr-designation">Dental Surgeon</div>
          </div>
        </div>
        <div className="nb-separator"></div>
          <Popover>
            <PopoverTrigger>
            <div className="nb-calendar">
              <div className="nb-calendar-icon"><BsFillCalendarMinusFill /></div>
              <div className="nb-calendar-date">
                {dispDate}
              </div>
            </div>
            </PopoverTrigger>
            <PopoverContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
            </PopoverContent>
          </Popover>
      </div>
      <div className="nb-info2">
        <div className="nb-search">
          <input type="text" placeholder="search" />
        </div>
        <div className="nb-notification"><TbMessage /></div>
        <div className="nb-message"><RiNotification2Line /></div>
      </div>
    </header>
  )
}