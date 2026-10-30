interface Person {
    firstName:string;
    lastName: string
    age: number;

    address: Adress
    
}

interface Adress {
        postalCode: string;
        city: string;
}



const ironman = { 
    firstName: 'Tony' ,
    lastName: 'Stark' ,
    age: 45,
    adress:{
    postalcode: 'abc123',
    city:'New York',
    },
};



console.log(ironman);

//const spiderman = structuredClone(ironman);

//ironman.firstName = 'Peter' ,
//ironman.lastName = 'Parker' ,
//spiderman.age = 19;

//spiderman.address.city= 'sssyj';

//console.log(ironman,spiderman);