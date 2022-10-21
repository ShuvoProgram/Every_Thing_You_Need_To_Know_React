const person = {
    name: 'Shuvo',
    isStudent: true,
    profession: "Web Developer",
    position: "Junior",
    salary: 15000,
    address: [
        {
            homeTown: {
                village: "Munshigonj",
                postOffice: "Lohjong",
                thana: "Lohjong"
            }
        },
        {
            permanent_address: {
                village: "Munshigonj",
                postOffice: "Lohjong",
                thana: "Lohjong"
            },
        },
        {
            present_address: {
                village: "Genda",
                postOffice: "Savar",
                thana: "Savar"
            }
        }

    ]
}

const template = `${person.name} is a Student. He is a professional ${person.profession} in Soft tech LTD. in ${person.position} Developer. He Lived in ${person.address[2].present_address.village}, ${person.address[2].present_address.thana}.`;

console.log(template);