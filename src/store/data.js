export const EMPLOYEES = [{
    id: 1,
    title: "Managing Director",
    startDate: "01/01/2020",
    name: "Mike",
}, {
    id: 2,
    title: "Senior Manager",
    startDate: "01/01/2015",
    name: "Marie"
}, {
    id: 3,
    title: "Senior Manager",
    startDate: "01/01/2015",
    name: "James",
}, {
    id: 4,
    title: "Manager",
    startDate: "01/01/2015",
    name: "Carl",
}, {
    id: 5,
    title: "Employee",
    startDate: "01/01/2015",
    name: "Will"
}, {
    id: 6,
    title: "Employee",
    startDate: "01/01/2015",
    name: "Smith"
}, {
    id: 7,
    title: "Employee",
    startDate: "01/01/2015",
    name: "Emily"
}, {
    id: 8,
    title: "Senior Manager",
    startDate: "01/01/2015",
    name: "Clara"
}];

export const ORG_STRUCTURE = [{
    id: 1,
    parentId: null,
    children: [{
        id: 2,
        parentId: 1,
        children: null
    }, {
        id: 3,
        parentId: 1,
        children: [{
            id: 4,
            parentId: 3,
            children: [{
                id: 5,
                parentId: 4,
                children: null
            },{
                id: 6,
                parentId: 4,
                children: null
            },{
                id: 7,
                parentId: 4,
                children: null
            }]
        }]
    }, {
        id: 8,
        parentId: 1,
        children: null
    }]
}]