class account {
  public username: string;
  private password: string;
  protected role: string;
  readonly createdAt: Date;

  constructor(username: string, password: string, role: string) {
    this.username = username;
    this.password = password;
    this.role = role;
    this.createdAt = new Date();
  }

  public login(inputPassword: string): boolean {
    return this.password === inputPassword;
  }
}
