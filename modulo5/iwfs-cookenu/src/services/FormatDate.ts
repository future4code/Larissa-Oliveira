import moment from "moment"

export class FormatDate {
    private date: string | Date
    constructor(date: string | Date) {
        this.date = date
    }
    formatUTC() {
        let formatDate = moment(this.date, "DD/MM/YYYY").format("YYYY-MM-DD")
        return formatDate
    }
    formatPT() {
        let formatDate = moment(this.date, "YYYY-MM-DD").format("DD/MM/YYYY")
        return formatDate
    }
}