export class UserInfo {
  constructor(
    protected userId: string,
    protected serverId: string,
    protected roles: string[]
  ) {}

  public checkRoles(requiredRoles: string[]) {
    // Might need to cast the string types to lower case and or trim the whitespaces in the future
    return this.roles.some(role => requiredRoles.includes(role));
  }
}
