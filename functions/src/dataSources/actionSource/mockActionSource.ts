import { IActionSource } from "./iActionSource";

export class MockActionSource implements IActionSource {
  getRequiredRoles(actionId: string) {
    return Promise.resolve(["user"]);
  }
}
