import moment from "moment";

let sortGigs = gigs => {
    let gigsCopy = JSON.parse(JSON.stringify(gigs));
    gigsCopy.sort((a, b) => {
        if (
            moment(a.acf.date, "DD.MM.YYYY").isAfter(
                moment(b.acf.date, "DD.MM.YYYY"),
                "day"
            )
        ) {
            return 1;
        } else return -1;
    });
    return gigsCopy;
};
export default sortGigs;
