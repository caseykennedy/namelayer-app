// import WalletService from "@src/background/services/wallet";
import { AppService } from '@/utils/svc';

// import NodeService from './node';
import SettingsService from './settings';
// import controllers from "@src/background/controllers";
// import MessageTypes from "@src/util/messageTypes";
// import AnalyticsService from "@src/background/services/analytics";

export default async function initServices() {
  let app: AppService;

  const startedApp = new AppService();
  startedApp.add('setting', new SettingsService());
  // startedApp.add("analytics", new AnalyticsService());
  // startedApp.add('node', new NodeService());
  // startedApp.add("wallet", new WalletService());
  await startedApp.start();
  app = startedApp;
  console.log(app);

  // app.on("wallet.locked", async () => {
  //   const tabs = await browser.tabs.query({active: true});
  //   for (let tab of tabs) {
  //     await browser.tabs.sendMessage(tab.id as number, {
  //       type: MessageTypes.DISCONNECTED,
  //     });
  //   }
  // });
}
