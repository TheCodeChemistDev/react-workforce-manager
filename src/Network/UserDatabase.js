import UserFactory from './UserFactory';

class Database {
        constructor() {
                this.database = initializeDatabase();
        }

        addUser(username, password) {
                //TODO: Add logic for creating admin users
                let db = this.database;
                let id = 0;
                for(let i = 0; i < db.length; i++) {
                        if(db[i]['userId'] > id) {
                                id = db[i]['userId'];
                        }
                }
                id += 1;
                this.database.push(UserFactory(id, username, password, 'Worker'))
        }
        
}

function initializeDatabase() {
        const database = [];

        //Test Users
        database.push(UserFactory(1, 'admin', '1234', 'Admin'));
        database.push(UserFactory(2, 'worker', '1234', 'Worker'));

        return database;
}

function verifyUser(username, password) {
        return true;
}


export default Database;