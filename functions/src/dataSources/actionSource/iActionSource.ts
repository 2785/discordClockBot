export interface IActionSource {
  getRequiredRoles(actionId: string): Promise<string[]>;
}
