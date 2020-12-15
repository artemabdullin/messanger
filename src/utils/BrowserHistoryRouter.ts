import { createBrowserHistory, History } from "history";

const history: History = createBrowserHistory();

/**
 * This class helps to move between paths without reloading
 * the whole web application.
 *
 * For example, you are able to moveTo('/page2') and the browser
 * will move to it, without causing the entire reloading.
 */
export default class BrowserHistoryHelper {
  public static getHistory = (): History => {
    return history;
  };

  public static moveTo = (path: string): void => {
    history.push(path);
  };

  static replaceCurrectUrlInHistory = (path: string): void => {
    history.replace(path);
  };

  static goBack = (): void => {
    window.history.back();
  };
}
