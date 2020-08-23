/** 
 *  Create data Structure based on the object and array.
 *  Import the csv file which has the players data and save it into the object data structure.
 */
//NO.,NAME,POS,BAT,THW,AGE,HT,WT,BIRTH PLACE
//Create Object
const team = {
    
    // Property for players
    _players: [],

    // Create gettter methods for _plyaers keys
    get players() {
        return this._players;
    },
    
    // Create methods for add new plyaers
    addPlayer(no,firstName,lastName,pos,bat,thw,age,ht,wt,birthplace) {
        let player = {
            No: no,
            firstName: firstName,
            lastName: lastName,
            POS: pos,
            BAT: bat,
            THW: thw,
            AGE: age,
            HT: ht,
            WT: wt,
            birthPlace: birthplace
        };
        //add the each of new player in the list.
        this._players.push(player);
    }
};
// Test add data
team.addPlayer('38','Pedro', 'Araujo','RP','R','R','24','43254','215','San Cristobal - Dominican Republic');
console.log(team.players);