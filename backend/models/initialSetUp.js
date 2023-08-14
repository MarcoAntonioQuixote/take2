const {Player,Pet} = require("./associations");

async function syncTables(force) {
    try {
        await Player.sync({force});
        await Pet.sync({force});
        console.log('Synced Player and Pet tables');
    } catch (err) {
        console.log('Problem syncing', err);
    }
}

const players = [
    {name: 'Michael', age: 29, avatar: 'https://image.lexica.art/full_jpg/49883613-3c07-4ef9-b6be-15347ae09ec8'},
    {name: 'Marko', age: 33, avatar: 'https://image.lexica.art/full_jpg/34e56304-34e0-44c6-8a56-4c1a83d0ef47'},
    {name: 'Xavier', age: 37, avatar: 'https://image.lexica.art/full_jpg/a58ec7aa-0be9-4926-94ae-61a49a5a30a0'}
]

const pets = [
    {name: 'Tony Da', species: 'Tiger', playerID: 1, avatar: 'https://cdn.unenvironment.org/styles/article_billboard_image/s3/2020-07/Tiger_Day_8_Photo_by_Steve_Wilson%2C_Wikimedia_Commons.jpg?h=877540e2&itok=8wpqGTol'},
    {name: 'Frilz', species: 'Tiger', playerID: 3, avatar: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/a-white-tiger-in-the-snow-sergei-gladyshev.jpg'},
    {name: 'Whalson', species: 'Whale', playerID: 1, avatar: 'https://i.natgeofe.com/n/7b1f8873-0486-4151-855d-364fd23d5955/southern-right-whale-nationalgeographic_1214903_square.jpg'},
    {name: 'Jag', species: 'Jaguar', playerID: 2, avatar: 'https://files.worldwildlife.org/wwfcmsprod/images/Jaguar_GPN7474/hero_small/63qidi36cn_Responsible_Forestry_8.10.2012_Biodiversiry_Loss_HI_7474.jpg'},
    {name: 'Uniwhale', species: 'Norwhal', playerID: 2, avatar: 'https://www.euclidlibrary.org/sites/default/files/tickles/narwhal%20under%20the%20sea.jpg'},
    {name: 'Otto', species: 'Otter', playerID: 1, avatar: 'https://bucketlistjourney.net/wp-content/uploads/2023/01/Otter-RF-1.jpg'},
]

async function initPlayers() {
    await Player.bulkCreate(players);
}

async function initPets() {
    await Pet.bulkCreate(pets);
}

async function fullLoad() {
    await syncTables();
    await initPlayers();
    await initPets();
}

module.exports = {
    syncTables,
    initPlayers,
    initPets,
    fullLoad
}