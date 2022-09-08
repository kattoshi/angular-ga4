/**
 * gtag 'set' method parameter type
 */
export type NgxGa4GlobalSettingType = 
  "allow_google_signals" | 'allow_ad_personalization_signals' | 
  'campaign_content' |  'campaign_id' |  'campaign_medium' |  'campaign_name' |  'campaign_source'   |  'campaign_term' |
  'campaign'|'client_id'|'content_group' |
  'cookie_domain'|'cookie_expires' | 'cookie_flags'|'cookie_path'|'cookie_prefix'| 'cookie_update'|
  'language'|'page_location'|'page_referrer'|'page_title' | 'send_page_view'|
  'screen_resolution'|'user_id'|'user_properties'
;
/**
 * gtag 'set' method parameter value type
 */
export type NgxGa4GlobalSettingValue = string | boolean | object | number;

/**
 * gtag 'config' method parameter
 */
export interface NgxGa4StreamSetting {
  allow_google_signals?             : boolean;
  allow_ad_personalization_signals? : boolean;
  campaign_content?                 : string;
  campaign_id?                      : string;
  campaign_medium?                  : string;
  campaign_name?                    : string;
  campaign_source?                  : string;
  campaign_term?                    : string;
  campaign?                         : object;
  client_id?                        : string;
  content_group?                    : string;
  cookie_domain?                    : string;
  cookie_expires?                   : number;
  cookie_flags?                     : string;
  cookie_path?                      : string;
  cookie_prefix?                    : string;
  cookie_update?                    : boolean;
  language?                         : string;
  page_location?                    : string;
  page_referrer?                    : string;
  page_title?                       : string;
  send_page_view?                   : boolean;
  screen_resolution?                : string;
  user_id?                          : string;
  user_properties?                  : object;
  debug_mode?                       : boolean;
}
