import moment from "moment"

export class FormatDate {
    private date: string
    constructor(date: string) {
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