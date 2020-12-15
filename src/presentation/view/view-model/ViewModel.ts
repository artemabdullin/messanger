import BaseView from "../BaseView";
import BaseViewModel from "./BaseViewModel";

export default class ViewModel implements BaseViewModel {
  private attachedViews: BaseView[];

  public constructor() {
    this.attachedViews = [];
  }

  public attachView(baseView: BaseView): void {
    this.attachedViews.push(baseView);
    this.notifyViewAboutChanges();
  }

  public detachView(baseView: BaseView): void {
    this.attachedViews.splice(this.attachedViews.indexOf(baseView), 1);
    this.notifyViewAboutChanges();
  }

  protected notifyViewAboutChanges(): void {
    if (this.attachedViews.length > 0) {
      this.attachedViews.forEach((view) => view.onViewModelChanged());
    }
  }

  protected getViewsCount(): number {
    return this.attachedViews.length;
  }
}
