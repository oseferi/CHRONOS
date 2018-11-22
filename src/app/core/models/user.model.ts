export interface IUserModel {
  uid:         string;
  displayName: string;
  username?:   string;
  imageUrl?:   string;
  loading?:    boolean;
  error?:      string;
}

export class UserModel implements IUserModel {
  constructor(public uid: string, public displayName: string, public imageUrl?: string) {}
}