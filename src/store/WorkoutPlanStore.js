import {defineStore} from "pinia"



let mondayExcercises =[
    {name:'Rest Day',sets:[3,5],reps:[3,5],weight:100},
];

let monday ={
    dayName:'Pondělí',
    description: 'Rest day',
    excercises:mondayExcercises
}

let tuesdayExcercises =[
    {name:'Mrtvý tah',sets:[3,5],reps:[3,5],weight:100},
    {name:'Rumunský mrtvý tah',sets:[2,2],reps:[5,6],weight:40},
    {name:'Dřep',sets:[3,4],reps:[5,8],weight:62.5}
];

let tuesday = {
    dayName:'Ůterý',
    description: 'Mrtvé tahy, dřepy',
    excercises:tuesdayExcercises
}

let wednesdayExcercises =[
    {name:'Benchpress s pauzou',sets:[2,3],reps:[3,6],weight:70},
    {name:'Tlak na lavičce s dumbell',sets:[2,3],reps:[5,10],weight:21.5},
    {name:'Dipy - stroj',sets:[3,3],reps:[5,10],weight:9},
    {name:'Upažování',sets:[4,4],reps:[10,15],weight:7}
];

let wednesday ={
    dayName:'Středa',
    description: 'Bench, vršek - push',
    excercises:wednesdayExcercises
}

let thursdayExcercises =[
    {name:'Shyby na stroji',sets: [3,4],reps:[5,10],weight:8},
    {name:'Přítahy jednoručky o lavičku',sets:[2,3],reps:[5,10],weight:16.5},
    {name:'Biceps s dumbell ve stoje',sets:[3,4],reps:[8,12],weight:14},
];

let thursday = {
    dayName:'Čtvrtek',
    description: 'Záda - pull',
    excercises:thursdayExcercises
}

let fridayExcercises =[
    {name:'Dřep',sets:[3,5],reps:[5,6],weight:70},
    {name:'Legpress',sets:[2,3],reps:[5,10],weight:100},
    {name:'Deadlift',sets:[3,4],reps:[5,6],weight:92.5},
    {name:'Zakopávání v sedě',sets:[2,3],reps:[5,10],weight:42.5}
];

let friday ={
    dayName:'Pátek',
    description: 'Dřepy, mrtvé tahy',
    excercises:fridayExcercises
}

let saturdayExcercises =[
    {name:'Benchpress s pauzou',sets:[2,3],reps:[5,6],weight:60},
    {name:'Benchpress s uzkým uchopem',sets:[2,2],reps:[5,8],weight:60},
    {name:'Tlak na ramena v sedě - Stroj',sets:[2,2],reps:[5,10],weight:40},
    {name:'Přítahy v předklonu s barbellem',sets:[3,3],reps:[5,10],weight:45},
    {name:'Biceps na scotovy lavičce',sets:[3,3],reps:[10-15],weight:20}
];

let saturday ={
    dayName:'Sobota',
    description: 'Bench, Vršek, Ruce',
    excercises:saturdayExcercises
}

let sundayExcercises =[
    'Rest Day'
];

let sunday ={
    dayName:'Neděle',
    description: 'Rest Day',
    excercises:sundayExcercises
}

//let week =['Pondělí', 'Ůterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota', 'Neděle'  ]

export const useWorkoutPlanStore = defineStore("workoutPlan",{
    state: () =>{
        return {
           week:[monday,tuesday,wednesday, thursday ,friday,saturday,sunday],


    };
    },
    actions:{

    },
    getters:{

    },
});