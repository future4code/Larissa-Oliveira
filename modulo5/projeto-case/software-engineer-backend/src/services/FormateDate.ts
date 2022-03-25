import moment from "moment"

export class FormatDate {

    formatPT(date: Date | string) {
        let formatDate = moment(date, "YYYY-MM-DD").format("DD/MM/YYYY")
        return formatDate
    }
}