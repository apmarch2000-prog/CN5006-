const dateofBirth = "12/12/2000";

const getStudentName = () => {
    return "Anil Pariyar";
};

const getCampusName = () => {
    return "UEL Campus";
};

exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70)
        return "B Grade";
    else
        return "A Grade";
};
