import { SystemService } from 'app/services/system.services';
import { NotificationSourceService } from './notification-detail/refresh-notification.service';
import { NotificationDetailComponent } from "./notification-detail/notification-detail.component";
import { NotificationListComponent } from "./notification-list/notification-list.component";
import { DialogService } from "primeng/api";
import { UserService } from "app/services/user.service";
import { AppInforRatingService } from "./../../services/app-state/app-infor-rating.service";
import { User } from "./../../model/user.model";
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  HostListener,
  AfterViewInit,
  ChangeDetectorRef,
} from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import {
  MenuItems,
  Menu,
  ChildrenItems,
} from "../../shared/menu-items/menu-items";
import { HorizontalMenuItems } from "../../shared/menu-items/horizontal-menu-items";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";

import { TranslateService } from "@ngx-translate/core";
import PerfectScrollbar from "perfect-scrollbar";
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent,
  PerfectScrollbarDirective,
} from "ngx-perfect-scrollbar";
import { Control } from "app/model/control.model";
import * as _ from "lodash";
import { CommonService } from "app/services/common.service";
import { PassDataService } from "app/services/pass-data.services";
import { InfoRating } from "app/model/info-rating.model";
import { LoginService } from "app/services/login.service";
import { RefeshTokenModel } from "app/model/refesh.model";
import { DataParse } from "app/common-func/data-parse";
import { LocationStrategy } from "@angular/common";
import { MatDialog } from "@angular/material";
import { Usersetting,StatusBasic } from 'app/config/app.config';

@Component({
  selector: "app-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
  providers: [UserService,SystemService],
})
export class AdminLayoutComponent implements OnInit, OnDestroy, AfterViewInit {
  private _router: Subscription;

  currentUser: User;
  today: number = Date.now();
  url: string;
  showSettings = false;
  dark: boolean;
  boxed: boolean;
  collapseSidebar: boolean;
  compactSidebar: boolean;
  horizontal: boolean = false;
  sidebarBg: boolean = true;
  currentLang = "en";
  layoutDir = "ltr";

  menuLayout: any = "vertical-menu";
  selectedSidebarImage: any = "bg-1";
  selectedSidebarColor: any = "sidebar-default";
  selectedHeaderColor: any = "header-default";
  collapsedClass: any = "side-panel-opened";

  @ViewChild("sidemenu") sidemenu;
  public config: PerfectScrollbarConfigInterface = {};
  lstMenuRoot: Control[] = [];
  _menu: Menu[] = [];
  _subMenu: ChildrenItems[];

  lstNotification = [];
  notificationUnreadCount = 0;
  turnOffNotification = true;

  constructor(
    location: LocationStrategy,
    private _passData: PassDataService,
    private _login: LoginService,
    private cdref: ChangeDetectorRef,
    private _commonServices: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private _dataParse: DataParse,
    public menuItems: MenuItems,
    public horizontalMenuItems: HorizontalMenuItems,
    public translate: TranslateService,
    private appInforRatingService: AppInforRatingService,
    private userService: UserService,
    private systemService: SystemService,
    public dialog: MatDialog,
    private notificationSourceService: NotificationSourceService
  ) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : "en");

    // set Notification
    this.getUserNotification();
    this.checkNotificationStatus(true);
    this.notificationSourceService.getNotificationSource().subscribe( res => {
      this.getUserNotification();
    })
  }

  checkNotificationStatus(showDialog: boolean) {
    let lUserSettings = JSON.parse(localStorage.getItem("lUserSettings"));
    if (lUserSettings && lUserSettings.length) {
      let configNotification = lUserSettings.find(
        (config) => config.settingCode == Usersetting.ShowNotification
      );
      if (configNotification) {
        // settingValue = 1 ---> hiển thị popup
        if (configNotification.settingValue == StatusBasic.Active) {
          this.turnOffNotification = false;
          if (showDialog == true) {
            this.userService
              .getLsNotification()
              .subscribe((resNotification) => {
                if (
                  resNotification.result.data &&
                  resNotification.result.data.length
                ) {
                  this.dialog.open(NotificationListComponent, {
                    width: "700px",
                    maxWidth: "90vw",
                    maxHeight: "90vh",
                    minHeight: "300px",
                    data: {
                      lstNotification: resNotification.result.data,
                    },
                  });
                }
              });
          }
        }
        // settingValue = 2 ---> k hiển thị popup
        else if (configNotification.settingValue == StatusBasic.Deactive) {
          this.turnOffNotification = true;
        }
      }
    }
  }

  ngOnInit(): void {
    this.appInforRatingService.subscribeChangeRatingInforEvent(
      (resAppInfor) => {
        this.listenerData(100);
      }
    );
    const elemSidebar = <HTMLElement>(
      document.querySelector(".sidebar-container ")
    );

    if (
      window.matchMedia(`(min-width: 960px)`).matches &&
      !this.isMac() &&
      !this.compactSidebar &&
      this.layoutDir != "rtl"
    ) {
      const ps = new PerfectScrollbar(elemSidebar, {
        wheelSpeed: 2,
        suppressScrollX: true,
      });
    }

    this._router = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.url = event.url;
        // const isExist = localStorage.getItem("token");
        // if(isExist && this.url === '/authentication/login') {
        //   this.router.navigate(['/admin-tool']);
        // }

        if (this.isOver()) {
          this.sidemenu.close();
        }

        if (
          window.matchMedia(`(min-width: 960px)`).matches &&
          !this.isMac() &&
          !this.compactSidebar &&
          this.layoutDir != "rtl"
        ) {
          // Ps.update(elemContent);
        }
      });
  }

  firstName: string = null;
  infoRating: InfoRating;
  rating: string = null;
  itemCartCount: number = null;
  balance: string = null;
  symbolsLocation: string = null;
  symbolsDisplay: string = null;
  notificationCount: number = null;
  loading: boolean = false;

  showNotify: boolean = false;
  showItemCart: boolean = false;
  end: any;

  listenerData(time: number) {
    setTimeout(() => {
      var _self = this;
      //console.log(this.currentUser);
      this.systemService.getInfoRating(this.currentUser.userId).subscribe(res => {
        if (res.result.success) {
          _self.infoRating = res.result.data;
          //console.log(res.result.data);
          //gán thông tin vào storage để xử lý ở những chỗ khác
          localStorage.setItem('ratingInfo', JSON.stringify(res.result.data));
          //gán thông tin vào biến để view lên giao diện
          _self.rating = _self.infoRating.exchangeRate;
          _self.balance = _self.infoRating.cashBalance;
          _self.symbolsLocation = _self.infoRating.symbolsLocation;
          _self.symbolsDisplay = _self.infoRating.symbolsDisplay;
          _self.notificationCount = _self.infoRating.notificationCount;
          _self.itemCartCount = _self.infoRating.cartItemCount;
          _self.showNotify = _self.notificationCount !== 0;
          _self.showItemCart = _self.itemCartCount !== 0;
        } else {
          console.log("can't get InfoRating")
        }
      }, err => {
      });
    }, time);
    

    // let refreshId = setInterval(function () {
    //   _self.infoRating = JSON.parse(localStorage.getItem("ratingInfo"));
    //   if (_self.infoRating) {
    //     clearInterval(refreshId);
    //     //_self.rating = _self._dataParse.formatMoney(_self.infoRating.exchangeRate);
    //     _self.rating = _self.infoRating.exchangeRate;
    //     _self.balance = _self.infoRating.cashBalance;
    //     _self.symbolsLocation = _self.infoRating.symbolsLocation;
    //     _self.symbolsDisplay = _self.infoRating.symbolsDisplay;
    //     _self.notificationCount = _self.infoRating.notificationCount;
    //     _self.itemCartCount = _self.infoRating.cartItemCount;
    //     _self.showNotify = _self.notificationCount !== 0;
    //     _self.showItemCart = _self.itemCartCount !== 0;
    //     if (this.cdref) {
    //       this.cdref.detectChanges();
    //     }
    //   }
    // }, time);
  }
  detectChangeSubscript: any;
  ngAfterViewInit() {
    this.loading = false;
    //Phải load thông tin user hiện tại trước để sử dụng trong các hàm ở dưới
    this.firstName = JSON.parse(localStorage.getItem("userData")).username;
    this.currentUser = JSON.parse(localStorage.getItem("userData"));

    this.filterMenu(JSON.parse(localStorage.getItem("lMenu")));
    //this.updateVerticalMenu();
    this.listenerData(100);
    this.detectChangeSubscript = this._passData.loaded().subscribe((res) => {
      this.loading = res;
      this.cdref.detectChanges();
    });
  }

  logout() {
    const jsonData = JSON.parse(localStorage.getItem("token"));
    if (jsonData) {
      this.loading = true;
      const logout = {
        Accesstoken: jsonData.accessToken,
        Refreshtokencode: jsonData.refreshTokenCode,
        ClientAppCode: "exo-r9045HKopew8mnGj",
      };
      this._login.logout(logout).subscribe(
        (res) => {
          if (res.result.success) {
            localStorage.clear();
            this.router.navigate(["/authentication/login"]);
          } else {
          }
          this.loading = false;
        },
        (err) => {
          this.loading = false;
        }
      );
    }
  }

  ngAfterContentChecked() {}

  // updateVerticalMenu() {
  //   this.systemService.getInfoRating(this.currentUser.userId).subscribe(res => {
  //     if(res.result.success) {
  //       this.infoRating = res.result.data;
  //       localStorage.setItem('ratingInfo', JSON.stringify(res.result.data));
  //     } else {
  //       console.log("can't get InfoRating")
  //     }
  //   }, err => {
  //   });
  // }

  public moveToCart() {
    this.router.navigate(["/cart/pharse1"]);
  }

  public moveToTopup() {
    this.router.navigate(["/wallet-manager/client-topup"]);
  }

  filterMenu(lstMenu: Control[]) {
    this.lstMenuRoot = _.filter(lstMenu, function (o) {
      return o.parentId == 0;
    });
    for (let entry of this.lstMenuRoot) {
      const r2 = _.filter(lstMenu, function (o) {
        return o.parentId == entry.controlId;
      });
      this._subMenu = [];
      for (let child of r2) {
        this._subMenu.push({
          state: child.pathFile,
          name: child.name,
          icon: child.icon == null ? "label_important" : child.icon,
        });
      }

      if (this._subMenu.length === 0) {
        const child = {
          state: entry.pathFile,
          name: entry.name,
          link: true,
          type: "link",
          icon: entry.icon == null ? "explore" : entry.icon,
        };
        this._menu.push(child);
      } else {
        const child = {
          state: entry.pathFile,
          name: entry.name,
          link: false,
          type: "sub",
          icon: entry.icon == null ? "explore" : entry.icon,
          children: this._subMenu,
        };
        this._menu.push(child);
      }
    }
  }

  goToExternalUrl(url) {
    if (url == null) {
      return false;
    }
    if (url.indexOf("http") == 0) {
      window.open(url, "_blank");
    } else if ("/" + url == this.router.url) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = "reload";
      this.router.navigate(["./"], { relativeTo: this.route });
    }
  }

  @HostListener("click", ["$event"])
  onClick(e: any) {
    const elemSidebar = <HTMLElement>(
      document.querySelector(".sidebar-container ")
    );
    setTimeout(() => {
      if (
        window.matchMedia(`(min-width: 960px)`).matches &&
        !this.isMac() &&
        !this.compactSidebar &&
        this.layoutDir != "rtl"
      ) {
        const ps = new PerfectScrollbar(elemSidebar, {
          wheelSpeed: 2,
          suppressScrollX: true,
        });
      }
    }, 350);
  }

  ngOnDestroy() {
    // this.detectChangeSubscript.unsubscribe();
    this._router.unsubscribe();
  }

  isOver(): boolean {
    if (
      this.url === "/apps/messages" ||
      this.url === "/apps/calendar" ||
      this.url === "/apps/media" ||
      this.url === "/maps/leaflet"
    ) {
      return true;
    } else {
      return window.matchMedia(`(max-width: 960px)`).matches;
    }
  }

  isMac(): boolean {
    let bool = false;
    if (
      navigator.platform.toUpperCase().indexOf("MAC") >= 0 ||
      navigator.platform.toUpperCase().indexOf("IPAD") >= 0
    ) {
      bool = true;
    }
    return bool;
  }

  menuMouseOver(): void {
    if (
      window.matchMedia(`(min-width: 960px)`).matches &&
      this.collapseSidebar
    ) {
      this.sidemenu.mode = "over";
    }
  }

  menuMouseOut(): void {
    if (
      window.matchMedia(`(min-width: 960px)`).matches &&
      this.collapseSidebar
    ) {
      this.sidemenu.mode = "side";
    }
  }

  menuToggleFunc() {
    this.sidemenu.toggle();

    if (this.collapsedClass == "side-panel-opened") {
      this.collapsedClass = "side-panel-closed";
    } else {
      this.collapsedClass = "side-panel-opened";
    }
  }

  changeMenuLayout(value) {
    if (value) {
      this.menuLayout = "top-menu";
    } else {
      this.menuLayout = "vertical-menu";
      this.menuToggleFunc();
    }
  }

  onSelectSidebarImage(selectedClass, event) {
    this.selectedSidebarImage = selectedClass;
  }

  onSelectedSidebarColor(selectedClass) {
    this.selectedSidebarColor = selectedClass;
  }

  onSelectedHeaderColor(selectedClass) {
    this.selectedHeaderColor = selectedClass;
  }

  isBgActive(value) {
    if (value == this.selectedSidebarImage) {
      return true;
    } else {
      return false;
    }
  }

  isSidebarActive(value) {
    if (value == this.selectedSidebarColor) {
      return true;
    } else {
      return false;
    }
  }

  isHeaderActive(value) {
    if (value == this.selectedHeaderColor) {
      return true;
    } else {
      return false;
    }
  }

  notificationSetting($event) {
    // settingValue = 1 ---> hiển thị popup
    // settingValue = 2 --> không hiển thị popup

    if ($event.checked == true) {
      this.userService.turnOffNotification().subscribe((turnOffRes) => {
        // console.log(turnOffRes);
        this.userService.saveNotificationStatus("2");
      });
    } else {
      this.userService.turnOnNotification().subscribe((turnOnRes) => {
        // console.log(turnOnRes);
        this.userService.saveNotificationStatus("1");
      });
    }
  }

  getUserNotification() {
    this.notificationUnreadCount = 0;
    this.userService.getLsNotification().subscribe((resNotification) => {
      this.lstNotification = resNotification.result.data;
      this.notificationUnreadCount = this.lstNotification.filter(
        (item) => item.status == 1
      ).length;
    });
  }

  showDetailNotification(notification, i) {
    if (notification.showType == "2") {
      let dialogRef = this.dialog.open(NotificationDetailComponent, {
        width: "600px",
        data: notification,
      });
      dialogRef.afterClosed().subscribe((res) => {
        this.lstNotification[i].status = 2;
      });
    } else if (notification.showType == "1") {
      this.lstNotification[i].status = 2;
      this.userService
      .readNotification(notification.notificationUserId)
      .subscribe((res) => {
        this.notificationSourceService.setNotificationSource( new Date().getTime() );
      });
      window.open(notification.url, "_blank").focus();
    }
  }
}
