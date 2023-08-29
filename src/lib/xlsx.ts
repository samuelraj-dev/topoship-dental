import xlsx, { IJsonSheet } from "json-as-xlsx"
import { PatientsData } from "@/containers/Dashboard/Patient/patients"

export function downloadToExcel() {
  let columns: IJsonSheet[] = [
    {
      sheet: "Patients",
      columns: [
        { label: "Patient ID", value: 'id' },
        { label: "Name", value: 'name' },
        { label: "Age", value: 'age' },
        { label: "Gender", value: 'gender' },
        { label: "Mobile", value: 'mobile' },
        { label: "City", value: 'city' },
      ],
      // @ts-ignore
      content: PatientsData
    }
  ]

  let settings = {
    fileName: "PatientsExcel",
  }

  xlsx(columns, settings)
}