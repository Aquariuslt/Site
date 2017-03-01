import {Component, OnInit, OnDestroy, trigger, style, transition, animate} from "@angular/core";
import {LogFactory} from "../../shared/log.factory";
import {BlogConfigService} from "../../blog/shared/blog-config.service";


@Component({
  selector: 'nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.css'],
  animations: [
    trigger('sidenavState', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 10 ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class NavSidebarComponent implements OnInit,OnDestroy {


  constructor(private logFactory: LogFactory,
              private blogConfigService: BlogConfigService) {
  }

  private logger = this.logFactory.getLog(NavSidebarComponent.name);


  sideNavbarState: string = 'show';

  linkMap = this.blogConfigService.getBlogConfig();

  subMenuOpenStatusList = [false, false];


  ngOnInit(): void {
    let vm = this;
    vm.sideNavbarState = 'show';
  }

  ngOnDestroy(): void {
    let vm = this;
    vm.sideNavbarState = 'hide';
  }

  toggleSubMenuOpenStatus(index): void {
    let vm = this;
    vm.subMenuOpenStatusList[index] = !vm.subMenuOpenStatusList[index];
  }
}
