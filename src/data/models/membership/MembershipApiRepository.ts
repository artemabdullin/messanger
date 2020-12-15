import Membership from "../../../domain/models/Membership";

export default interface MembershipApiRepository {
  LIST_OF_MEMBERSHIPS: string;

  createNewMembershipLevel(
    createMembershipData: Membership
  ): Promise<Membership>;
}
