import React from 'react'
import { ReportInput } from './models';

interface Props {
    reports: ReportInput[];
}

export const Printable = React.forwardRef(({ reports }: Props, ref) => {
    const groupBy = (objectArray: ReportInput[], property: string) => {
        return objectArray.reduce((acc: { [x: string]: any[]; }, obj: { [x: string]: any; }) => {
            const key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            // Add object to list for given key's value
            acc[key].push(obj);
            return acc;
        }, {});
    }
    const flattened = Object.values(groupBy(reports, "type")).flat();
    return (
        <div className="printable">
            {ref &&
                <div ref={ref as any} className="reports-div">
                    <div style={{ display: "inline-flex" }}>
                        <div className='reports-heading-left' style={{ width: "50%" }}>
                            <h1>Research Reports</h1>
                            <h4> Some basic subtitle to explain what these reports cover. The demo covers three topics. </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className='reports-heading-right' style={{ width: "50%" }}>
                        </div>
                    </div>
                    <div className='list-container'>
                        {flattened.map((report, idx) =>
                            <div style={{ display: "inline-flex" }} className={`report-item-${idx % 2 == 0 ? 'even' : 'odd'}`}>
                                <p>{report.name}-{report.type}</p>
                                <p style={{ float: "right" }}>{report.endpoint}</p>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    );
});