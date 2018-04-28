export class User {

    firstName?: string;
    lastName?: string;
    email?: string;
    id_broj?: string;
    password?: string;
    password_confirmation?: string;

    constructor(

        firstName: string = null,
        lastName: string = null,
        email: string = null,
        id_broj: string = null,
        password: string = null,
        password_confirmation= null
    ) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.id_broj = id_broj;
        this.password = password;
        this.password_confirmation = password_confirmation;
    }
}
