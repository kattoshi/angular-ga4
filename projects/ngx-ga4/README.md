# ngx-ga4 (Google Analytics4)

Implementation for using Google Analytics 4 in angular13+ apps.

# Notice
I'm not good at English, so if there are any typos or mistranslations, please point them out.

# How to use.

## Setup
Specify the measurement ID in forRoot().  
If omitted, specification can be delayed until initaize$() described later.  
The reason why you can specify it in initalize$() is that your application will read the measurement ID from the external storage (parameter file) after it starts.  
```ts
import { NgxGa4Module} from 'ngx-ga4';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxGa4Module.forRoot({  /* measurementId : "G-xxxxxxxxxx" */ }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

======================  
## NgxGa4Service  
Call Interface Events.
```ts
export class AppComponent implements OnInit {
  constructor (private _ga4 : NgxGa4Service){ }
  async ngOnInit(): Promise<void> {
    try {
      await this._ga4.install$("mesurement id");
      this._ga4.js();
      this._ga4.config();
    }
    catch(ex)
    {
      throw new Error (`Script load exception=${ex}`);
    }
  }
  onRaizeEvent() {
    this._ga4.event("event_name" , 
    { 
      timestamp : new Date().toISOString()
    });
  }
}
```
--------------------
### 1. initalize$()
Load the global site tag script into your project.
```ts
install$ (measurementId? : string): Promise<void>
```
Also, if your application installed the global site tag normally, do not call install$().  
https://developers.google.com/tag-platform/gtagjs/install#add_the_tag_to_your_website  
Specify the measurement ID with `NgxGa4Module.forRoot("measurementID");`.  

--------------------
### 2. js()
```ts
js (date : Date = new Date()) : void
```
Run the code below.  
```ts
call gtag("js" , date);
```

--------------------
### 3. config()
```ts
config (streamSetting? : NgxGa4StreamSetting) : void
```
see https://developers.google.com/tag-platform/gtagjs/reference#config  

Use a previously specified measurement ID.  

--------------------
### 4. configGroups()
```ts
configGroups (mesureId : string , groupName? : string ) : void
```
see https://developers.google.com/tag-platform/gtagjs/routing  

--------------------
### 5. event()
```ts
event (eventName: string , eventParams?: object) : void
```
see https://developers.google.com/tag-platform/gtagjs/configure#send_data_with_event  

--------------------
### 6. set()
```ts
set ( config : NgxGa4GlobalSettingType, value : NgxGa4GlobalSettingValue) : void
```
https://developers.google.com/tag-platform/gtagjs/configure#send_data_on_every_event_with_set  


====================
## Directive

### 1. gtagEvent
```html
<div gtagEvent draggable="true" trackOn="dragstart" action="product_dragged" [params]="{ event_label: 'Something draggable' }">
    draggable
</div>
```
|item   |type    |description
|-----  |--------|------------------------------------------------
|trackOn|string  |Specifies the event name of the DOM Element.<br>When an event ('dragstart' in the example) occurs, it will send the event to ga4.
|action |string  |ga4 event name.
|params |object  |event parameters.
