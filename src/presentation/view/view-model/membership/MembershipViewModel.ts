import Membership from "../../../../domain/models/Membership";
import BaseViewModel from "../BaseViewModel";

export default interface MembershipViewModel extends BaseViewModel {
  listOfMemberships: Membership[];

  createNewMembershipLevel(createMembershipData: Membership): Promise<void>;
}
