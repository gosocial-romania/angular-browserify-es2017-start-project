class User {
	//start-non-standard
	static $inject = ["Users", "Documents"];
	//end-non-standard
	constructor(Users, Documents) {
		this._Users = Users;
		this._Documents = Documents;
	}

	sayHello(){
		return `${this.Users.current} says hi!`;
	}
}

module.exports = User;
