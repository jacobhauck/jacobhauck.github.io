import { format } from "date-fns";

export default function CurrentDate({ dateString }) {
    const date = new Date();
    return <time dateTime={dateString}>{format(date, "dd LLLL yyyy 'at' H:mm 'CST'")}</time>
}