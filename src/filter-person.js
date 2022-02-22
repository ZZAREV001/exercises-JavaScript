const filterByGender = (people, gender) => {
    people.filter(p => p.gender === gender);
}

export {
    filterByGender
}
