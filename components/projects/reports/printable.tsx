import React from 'react'
import { ReportInput } from './models';

interface Props {
    reports: ReportInput[];
}

export const Printable = React.forwardRef(({ reports }: Props, ref) => {

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
                        {reports.map((report, idx) =>
                            <div style={{ display: "inline-flex" }} className={`report-item-${idx % 2 == 0 ? 'even' : 'odd'}`}>
                                <p>{report.name}</p>
                                <p style={{ float: "right" }}>{report.endpoint}</p>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    );
});