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

const name = person.name;
console.log(name);

const homeTownAddress = person.address[0].homeTown.village;
console.log(homeTownAddress);