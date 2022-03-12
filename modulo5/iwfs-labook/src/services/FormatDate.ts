import moment from "moment"

export class FormatDate {
    formatUTC(date: string | Date) {
        let formatDate = moment(date, "DD/MM/YYYY").format("YYYY-MM-DD")
        return formatDate
    }
    formatPT(date: string | Date) {
        let formatDate = moment(date, "YYYY-MM-DD").format("DD/MM/YYYY")
        return formatDate
    }
}