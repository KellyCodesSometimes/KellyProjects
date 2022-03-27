enum ReportType {
    PRINTING = "3D Printing",
    ELECTRIC_VEHICLES = "Electric Vehicles",
    FOOD_AND_NUTRITION = "Food and Nutrition"
}


export interface ReportInput {
    startDate: Date;
    endDate: Date;
    name: string;
    endpoint: string;
    type: ReportType;
}

export default ReportType;