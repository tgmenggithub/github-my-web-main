export default {

    timestampToDate: (timestamp) => {
        if (timestamp !== null && timestamp !== undefined) {
            const date = new Date(timestamp);
            date.setHours(date.getHours() + 8);
            return  date.toISOString().replace('T', ' ').slice(0, 19);
        }
    },

    timestampToDay: (timestamp) => {
        if (timestamp !== null && timestamp !== undefined) {
            return Math.trunc((timestamp - new Date().getTime()) / 24 / 60 / 60 / 1000)
        }
    },

    dateToFormat: (date) => {
        if (date !== null && date !== undefined) {
            const newDate = new Date(date);
            newDate.setHours(newDate.getHours() + 8);
            return newDate.toISOString().replace('T', ' ').slice(0, 19);
        }
    }
}
