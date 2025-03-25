export class Register {
    userId: number;
    emailId: string;
    password: string;
    fullName: string;
    mobileNo: string;

    constructor() {
        this.userId = 0;
        this.emailId = "";
        this.password = "";
        this.fullName = "";
        this.mobileNo = "";
    }
  }

  export class Login {
    emailId: string;
    password: string;

    constructor() {
        this.emailId = "";
        this.password = "";
    }
  }