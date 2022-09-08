import { NgModule , ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { NgxGa4Config } from './ngx-ga4.service';
import { NgxGa4Service } from './ngx-ga4.service';
import { CommonModule } from '@angular/common';
import { NgxGa4tagDirective } from './ngx-ga4tag.directive';

@NgModule({
  declarations: [
    NgxGa4tagDirective
  ],
  imports: [CommonModule],
  exports: [NgxGa4tagDirective],
  providers:[]
})
export class NgxGa4Module {
  constructor(@Optional() @SkipSelf() parentModule?: NgxGa4Module) {
    if (parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only');
    }
  }  public static forRoot(config: NgxGa4Config): ModuleWithProviders<NgxGa4Module> {
    return {
      ngModule: NgxGa4Module,
      providers: [
        { provide: 'NgxGa4Config', useValue: config }
      ]
    };
  }
}
