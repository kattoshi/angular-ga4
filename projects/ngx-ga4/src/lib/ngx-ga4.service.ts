import { Injectable,Inject, Optional } from '@angular/core';
import {  NgxGa4GlobalSettingType ,
          NgxGa4GlobalSettingValue,
          NgxGa4StreamSetting
        } from './ngx-ga4.interface';

/**
 * Config 
 */
 export class NgxGa4Config {
  /**
   * GA4 Measurement Id (If omitted, set as NgxGa4Service.initalize$())
   */
  measurementId?: string;
}


declare global {
  interface Window {
    dataLayer : any;
  }
}
/**
 * Google Analytics4 Service
 */
@Injectable({ providedIn: 'root'})
export class NgxGa4Service {
  /**
   * Measurement Id
   */
  private measurementId? : string;
  /**
   * constructor
   * @param ng4Config 
   */
  constructor(
    @Optional() ng4Config? : NgxGa4Config ) {
    if (ng4Config) {
      this.measurementId = ng4Config.measurementId;
    }
  }
  /**
   * Google Analytics script load
   * @param measurementId Measurement Id()
   * @returns 
   */
  install$ (measurementId? : string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (measurementId) {
        this.measurementId = measurementId;
      }
      if (this.measurementId == null) {
        reject(`Measurement ID not set`);
      }
      
      const scriptId = `ga-gtag`;
      if (document.getElementById(scriptId)) {
        reject(new Error(`script id ${scriptId} is already loaded`));
      }
      const { head } = document;
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.async = true;
      script.onerror = () => {
        reject(`GA4 script load error`);
      }
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        resolve();
      }
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
      head.insertBefore(script, head.firstChild);
    });
  }
  /**
   * gtag naitive call
   * @param arg
   */
  gtag (...arg : any) : void {
    if (window.dataLayer) {
      window.dataLayer.push(arguments);
    }
    else {
      throw new Error(`NgxGa4Service not initalized.`);
    }
  }
  /**
   * gtag("js", date)
   * @param date date
   */
  js (date : Date = new Date()) : void {
    this.gtag("js" , date);
  }
  /**
   * gtag("config", ... )
   * @param streamSetting 
   */
  config (streamSetting? : NgxGa4StreamSetting) : void {
    if (streamSetting == null) {
      this.gtag("config", this.measurementId);
    }
    else {
      this.gtag("config", this.measurementId , streamSetting);
    }
  }
  /**
   * config (Group and route data)
   * https://developers.google.com/tag-platform/gtagjs/routing
   * @param mesureId menure id
   * @param groupName group name
   */
  configGroups (mesureId : string , groupName? : string ) : void {
    if (mesureId == null) {
      this.gtag("config", this.measurementId);
    }
    else if (groupName == null) {
      this.gtag("config", mesureId );
    }
    else {
      this.gtag("config", mesureId , { "groups" : groupName});
    }
  }
  /**
   * gtag("event" , ... )
   * @param eventName     string event name 
   * @param eventParams?  object event parameter
   */
  event (eventName: string , eventParams?: object) : void {
    if (eventParams == null) {
      this.gtag("event", eventName);
    }
    else {
      this.gtag("event", eventName, eventParams);
    }
  }
  /**
   * gtag ("set" , ...)
   * @param config NgxGa4GlobalSettingType 
   * @param value NgxGa4GlobalSettingValue 
   */
  set ( config : NgxGa4GlobalSettingType, value : NgxGa4GlobalSettingValue) : void {
    this.gtag("set", config , value);
  }
}
