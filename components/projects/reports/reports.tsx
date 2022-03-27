import { LocalizationProvider, DatePicker } from '@mui/lab';
import { Button, FormControl, InputLabel, MenuItem, Select, Table, TableCell, TableHead, TableRow, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import ReportType, { ReportInput } from './models';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { useReactToPrint } from 'react-to-print';
import { Printable } from './printable';

function DateHandler({ state, setStateAction }: any) {
    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
                value={state}
                onChange={(newValue) => {
                    setStateAction(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}


export default function Reports() {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef?.current,
    });
    const mockReports: ReportInput[] = [
        {
            name: "Test Report A",
            startDate: new Date("01/01/2002"),
            endDate: new Date("01/01/2006"),
            type: ReportType.FOOD_AND_NUTRITION,
            endpoint: "/foodandnutrition/abc"
        },
        {
            name: "Test Report B",
            startDate: new Date("01/01/2002"),
            endDate: new Date("01/01/2007"),
            type: ReportType.FOOD_AND_NUTRITION,
            endpoint: "/foodandnutrition/abc"
        },
        {
            name: "Test Report C",
            startDate: new Date("01/01/2009"),
            endDate: new Date("01/01/2016"),
            type: ReportType.ELECTRIC_VEHICLES,
            endpoint: "/elec_vehicles/abGGc"
        },
        {
            name: "Test Report D",
            startDate: new Date("01/01/2009"),
            endDate: new Date("01/01/2016"),
            type: ReportType.ELECTRIC_VEHICLES,
            endpoint: "/elec_vehicles/abcDD"
        },
        {
            name: "Test Report E",
            startDate: new Date("01/01/2009"),
            endDate: new Date("01/01/2016"),
            type: ReportType.ELECTRIC_VEHICLES,
            endpoint: "/elec_vehicles/abcE"
        },
        {
            name: "Test Report F",
            startDate: new Date("01/01/2009"),
            endDate: new Date("01/01/2016"),
            type: ReportType.ELECTRIC_VEHICLES,
            endpoint: "/elec_vehicles/abcD"
        }
    ]
    const [reports, setReports] = useState<ReportInput[]>(mockReports);

    // Report we're adding
    const [reportType, setReportType] = useState<ReportType>(ReportType.ELECTRIC_VEHICLES);
    const [reportName, setReportName] = useState<string>("");
    const [reportStartDate, setReportStartDate] = useState<Date>(new Date());
    const [reportEndDate, setReportEndDate] = useState<Date>(new Date());
    const [endpoint, setEndpoint] = useState<string>("");

    const handleAddReport = () => {
        const newReport: ReportInput = {
            name: reportName,
            startDate: reportStartDate,
            endDate: reportEndDate,
            endpoint: endpoint,
            type: reportType
        }
        setReports([...reports, newReport])
        resetForm();
    }

    const resetForm = () => {
        setReportType(ReportType.ELECTRIC_VEHICLES);
        setReportName("");
        setReportStartDate(new Date());
        setReportEndDate(new Date());
        setEndpoint("");
    }


    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const headings = ["Name", "Start Date", "End Date", "Report Type", "Endpoint", "Action"]
    return (
        <div>
            <Printable ref={componentRef} reports={reports} />
            <Table>
                <TableHead>
                    <TableRow>
                        {headings.map(heading => <TableCell key={heading}>{heading}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableRow>
                    <TableCell><TextField value={reportName} onChange={(e) => setReportName(e.target.value)} size='small' /></TableCell>
                    <TableCell>
                        <DateHandler state={reportStartDate} setStateAction={setReportStartDate} />
                    </TableCell>
                    <TableCell>
                        <DateHandler state={reportEndDate} setStateAction={setReportEndDate} />
                    </TableCell>
                    <TableCell>
                        <FormControl fullWidth>
                            <Select
                                size='small'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={reportType}
                                label="Age"
                                onChange={(e, child: any) => setReportType(child?.props?.value)}
                            >
                                {Object.values(ReportType).map(reportType => <MenuItem key={reportType} value={reportType}>{reportType}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell><TextField size='small' value={endpoint} onChange={(e) => setEndpoint(e.target.value)} /></TableCell>
                    <TableCell><Button variant="contained" style={{ background: "hotpink", margin: 20 }} onClick={() => handleAddReport()}>+</Button></TableCell>
                </TableRow>
                {reports.map(report => (
                    <>
                        <TableRow>
                            <TableCell>{report.name}</TableCell>
                            <TableCell>{`${months[report.startDate.getMonth()]} ${report.startDate.getFullYear()}`}</TableCell>
                            <TableCell>{`${months[report.endDate.getMonth()]}  ${report.endDate.getFullYear()}`}</TableCell>
                            <TableCell>{report.type}</TableCell>
                            <TableCell>{report.endpoint}</TableCell>
                        </TableRow>
                    </>
                ))}
                <Button variant="contained" style={{ background: "hotpink", margin: 20 }} onClick={handlePrint}>Generate Report</Button>
            </Table>
        </div>
    )
}