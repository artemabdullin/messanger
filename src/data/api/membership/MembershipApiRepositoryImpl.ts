import Membership from "../../../domain/models/Membership";
import MembershipApiRepository from "../../models/membership/MembershipApiRepository";

export default class MembershipApiRepositoryImpl
  implements MembershipApiRepository {
  public LIST_OF_MEMBERSHIPS = "listOfMemberships";

  public createNewMembershipLevel = (
    createMembershipData: Membership
  ): Promise<Membership> => {
    return new Promise((resolve) => {
      const existingMembership = JSON.parse(
        localStorage.getItem(this.LIST_OF_MEMBERSHIPS) || "[]"
      );

      existingMembership.push(createMembershipData);

      localStorage.setItem(
        this.LIST_OF_MEMBERSHIPS,
        JSON.stringify(existingMembership)
      );

      resolve(createMembershipData);
    });
  };
}
