import { IUserDataSource } from "./iUserDataSource";
import { ActionSource } from "../../typings/types";
import { UserInfo } from "../../auth/userInfo";

export class MockUserDataSource implements IUserDataSource {
  getUser(inputCred: ActionSource) {
    return Promise.resolve(
      new UserInfo(inputCred.userId, inputCred.serverId, ["user"])
    );
  }
}
