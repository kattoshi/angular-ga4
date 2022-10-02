import { NgModule , ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { NgxGa4Config } from './ngx-ga4.service';
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
/**
 * NgxGa4Module
 */
export class NgxGa4Module {
  constructor(@Optional() @SkipSelf() parentModule?: NgxGa4Module) {
    if (parentModule) {
      throw new Error(
        'NgxGa4Module is already loaded. Import it in the AppModule only');
    }
  }
  /**
   * Constant parameter inject to NGxGa4Service
   * @param config 
   * @returns 
   */
  public static forRoot(config: NgxGa4Config): ModuleWithProviders<NgxGa4Module> {
    return {
      ngModule: NgxGa4Module,
      providers: [
        { provide: NgxGa4Config, useValue: config }
      ]
    };
  }
}
