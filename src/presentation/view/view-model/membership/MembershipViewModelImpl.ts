import MembershipApiRepositoryImpl from "../../../../data/api/membership/MembershipApiRepositoryImpl";
import Membership from "../../../../domain/models/Membership";

import BrowserHistoryHelper from "../../../../utils/BrowserHistoryRouter";
import BaseView from "../../BaseView";
import ViewModel from "../ViewModel";
import MembershipViewModel from "./MembershipViewModel";

export default class MembershipViewModelImpl
  extends ViewModel
  implements MembershipViewModel {
  public listOfMemberships: Membership[];

  private readonly membershipRepository: MembershipApiRepositoryImpl;

  constructor(membershipApiRepository: MembershipApiRepositoryImpl) {
    super();
    this.membershipRepository = membershipApiRepository;

    this.listOfMemberships = [];
  }

  public attachView = (baseView: BaseView): void => {
    super.attachView(baseView);
    super.notifyViewAboutChanges();
  };

  public detachView = (baseView: BaseView): void => {
    super.detachView(baseView);
    super.notifyViewAboutChanges();
  };

  public createNewMembershipLevel = async (
    createMembershipData: Membership
  ): Promise<void> => {
    try {
      const result = await this.membershipRepository.createNewMembershipLevel(
        createMembershipData
      );

      if (result) {
        BrowserHistoryHelper.moveTo("/");
        this.listOfMemberships.push(result);
        super.notifyViewAboutChanges();
      }
    } catch (e) {
      alert(e.message);
    }
  };
}
