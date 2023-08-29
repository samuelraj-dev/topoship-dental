import { PatientDataTable } from "./data-table"

import { columns } from "./columns"
import { PatientsData } from "./patients"

export default function Patient() {
  return (
    <>
      <PatientDataTable columns={columns} data={PatientsData} />
    </>
  )
}