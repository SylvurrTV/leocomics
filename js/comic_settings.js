//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 45; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files.
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "pg"; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = ""; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = maxpg;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "Jim Gets Fired", //the title of the page (leaving this blank will default it to "Page X")
        date: writeDate(2019, 11, 15), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        altText: "Jim Gets Fired!", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 1, //how many image files this page is split into
        authorNotes: `
            `,
    },
    {
        pgNum: 2,
        title: "Arizonian Weather",
        date: writeDate(2019, 12, 1),
        altText: "Arizonian Weather",
        imageFiles: 1,
        authorNotes: `
            `,
    },
    {
        pgNum: 3,
        title: "The Sun",
        date: writeDate(2021, 1, 9),
        altText: "The Sun",
        imageFiles: 1,
        authorNotes: `
            `,
    },
    {
        pgNum: 4,
        title: "FIRE!!!",
        date: writeDate(2021, 1, 10),
        altText: "FIRE!!!",
        imageFiles: 1,
        authorNotes: `
            `,
    },
    {
        pgNum: 5,
        title: "Kilimanjaro",
        date: writeDate(2021, 2, 10),
        altText: "Kilimanjaro",
        imageFiles: 1,
        authorNotes: `
            `,
    },
    {
        pgNum: 6,
        title: `The Brain Guys: Social Interaction`,
        date: writeDate(2021, 3, 26),
        altText: "The Brain Guys: Social Interaction",
        imageFiles: 1,
        authorNotes: `
            `,
    },
{
    pgNum: 7,
    title: `The Brain Guys: Sleeping`,
    date: writeDate(2021, 3, 28),
    altText: "The Brain Guys: Sleeping",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 8,
    title: `The Brain Guys: Rage Gamer`,
    date: writeDate(2021, 3, 29),
    altText: "The Brain Guys: Rage Gamer",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 9,
    title: `The P is Silent`,
    date: writeDate(2021, 4, 14),
    altText: "The P is Silent",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 10,
    title: `The Door Part 1`,
    date: writeDate(2021, 4, 14),
    altText: "The Door Part 1",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 11,
    title: `The Door Part 2`,
    date: writeDate(2021, 6, 10),
    altText: "The Door Part 2",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 12,
    title: `The Door Part 3`,
    date: writeDate(2021, 6, 10),
    altText: "The Door Part 3",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 13,
    title: `The Brain Guys: Code Red`,
    date: writeDate(2021, 8, 9),
    altText: "The Brain Guys: Code Red",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 14,
    title: `The Brain Guys: Insomnia`,
    date: writeDate(2022, 5, 12),
    altText: "The Brain Guys: Insomnia",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 15,
    title: `Arizonian Weather (Remake)`,
    date: writeDate(2022, 9, 13),
    altText: "Arizonian Weather (Remake)",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 16,
    title: `The Brain Guys: Social Interaction #2`,
    date: writeDate(2023, 2, 10),
    altText: "The Brain Guys: Social Interaction #2",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 17,
    title: `Cannonball!`,
    date: writeDate(2023, 4, 2),
    altText: "Cannonball!",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 18,
    title: `Warrior`,
    date: writeDate(2023, 4, 21),
    altText: "Warrior",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 19,
    title: `Mugged`,
    date: writeDate(2023, 4, 28),
    altText: "Mugged",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 20,
    title: `The Day Dinosaurs went Extinct`,
    date: writeDate(2023, 5, 1),
    altText: "The Day Dinosaurs went Extinct",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 21,
    title: `How Cavemen dealt with Animals`,
    date: writeDate(2023, 5, 4),
    altText: "How Cavemen dealt with Animals",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 22,
    title: `Gullible`,
    date: writeDate(2023, 5, 6),
    altText: "Gullible",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 23,
    title: `Toothache`,
    date: writeDate(2023, 5, 7),
    altText: "Toothache",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 24,
    title: `How To Keep The Doctor Away`,
    date: writeDate(2023, 5, 27),
    altText: "How To Keep The Doctor Away",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 25,
    title: `A Comic who is Aware of being a Comic`,
    date: writeDate(2023, 6, 23),
    altText: "A Comic who is Aware of being a Comic",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 26,
    title: `The Goths`,
    date: writeDate(2023, 7, 5),
    altText: "The Goths",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 27,
    title: `How the Himalayas Formed`,
    date: writeDate(2023, 7, 31),
    altText: "How the Himalayas Formed",
    imageFiles: 1,
    authorNotes: `
    <p>Tectonic plate moment</p>
    `,
},
{
    pgNum: 28,
    title: `The Circle of Freebooting`,
    date: writeDate(2023, 9, 8),
    altText: "The Circle of Freebooting",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 29,
    title: `Time Traveller`,
    date: writeDate(2023, 9, 12),
    altText: "Time Traveller",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 30,
    title: `How Leila Wonder Fixes A Phone`,
    date: writeDate(2023, 12, 20),
    altText: "How Leila Wonder Fixes A Phone",
    imageFiles: 1,
    authorNotes: `
    <p>When in doubt, Leila can fix it :D</p>
    `,
},
{
    pgNum: 31,
    title: `I Am The Walrus Slander`,
    date: writeDate(2023, 12, 22),
    altText: "I Am The Walrus Slander",
    imageFiles: 1,
    authorNotes: `
    <p>I no longer agree with this comic. Just imagine this but Penny Lane</p>
    `,
},
{
    pgNum: 32,
    title: `The Nowhere Lads: Hazel's Drinking Habits`,
    date: writeDate(2024, 1, 17),
    altText: "The Nowhere Lads: Hazel's Drinking Habits",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 33,
    title: `Brenda and Carla's Conversations`,
    date: writeDate(2024, 1, 24),
    altText: "Brenda and Carla's Conversations",
    imageFiles: 1,
    authorNotes: `
    <p>This applies to any lesbian couple, really.</p>
    `,
},
{
    pgNum: 34,
    title: `Rigel asking out Sunne`,
    date: writeDate(2024, 2, 24),
    altText: "Rigel asking out Sunne",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 35,
    title: `Leila Wonder Loves Pride Month (and I do too!)`,
    date: writeDate(2024, 6, 24),
    altText: "Leila Wonder Loves Pride Month (and I do too!)",
    imageFiles: 1,
    authorNotes: `
    <p>if ur LGBTQ and its pride month, Leila will support you :3</p>
    `,
},
{
    pgNum: 36,
    title: `Moths At A Diner`,
    date: writeDate(2024, 10, 21),
    altText: "Moths At A Diner",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 37,
    title: `2014 vs 2024`,
    date: writeDate(2024, 11, 21),
    altText: "2014 vs 2024",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 38,
    title: `Jessica Nakamura's Introduction`,
    date: writeDate(2024, 12, 18),
    altText: "Jessica Nakamura's Introduction",
    imageFiles: 1,
    authorNotes: `
    <p>Introducing Jessica Nakamura, a 22-year-old girl born as a cat but became a human one day magically!</p>
    `,
},
{
    pgNum: 39,
    title: `If Humans Were Clownfish`,
    date: writeDate(2025, 1, 16),
    altText: "If Humans Were Clownfish",
    imageFiles: 1,
    authorNotes: `
    `,
},
{
    pgNum: 40,
    title: `Difference Between Manga And Comics`,
    date: writeDate(2025, 2, 2),
    altText: "Difference Between Manga And Comics",
    imageFiles: 1,
    authorNotes: `
    <p>Introducing James Campbell, a 23-year-old guy who got Jess back when she was a kitten, and now is her roommate.</p>
    `,
},
{
    pgNum: 41,
    title: `Jess Introduces Lily!`,
    date: writeDate(2025, 3, 28),
    altText: "Jess Introduces Lily!",
    imageFiles: 1,
    authorNotes: `
    <p>Introducing Lily Flora, a 22-year-old woman who hung out with Jess all day when she was a cat, and is dating James</p>
    `,
},
{
    pgNum: 42,
    title: `The Ceiling Cat #1`,
    date: writeDate(2025, 5, 9),
    altText: "The Ceiling Cat #1",
    imageFiles: 1,
    authorNotes: `
    <p>What would you do if Jess was on your ceiling?</p>
    `,
},
{
    pgNum: 43,
    title: `The Ceiling Cat #2`,
    date: writeDate(2025, 5, 31),
    altText: "The Ceiling Cat #2",
    imageFiles: 1,
    authorNotes: `
    <p>She just wanna stay on the ceeeiling</p>
    `,
},
{
    pgNum: 44,
    title: `Me when someone discovers Bo Diddley (I like bo diddley :3)`,
    date: writeDate(2025, 6, 21),
    altText: "Me when someone discovers Bo Diddley (I like bo diddley :3)",
    imageFiles: 1,
    authorNotes: `
    <p>I like Bo Diddley :3</p>
    `,
},
{
    pgNum: 45,
    title: `History Essentially - The First Selfie (1830 CE)`,
    date: writeDate(2025, 9, 5),
    altText: "History Essentially - The First Selfie (1830 CE)",
    imageFiles: 1,
    authorNotes: `
    <p>You COULD take photos back then... it just took a while... you had to be reaaally still...</p>
    `,
},
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}
