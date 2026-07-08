import { AUDIENCE_STORAGE_KEY } from "@/lib/audience/types";
import { LOCALE_STORAGE_KEY } from "@/lib/i18n/types";
import { PREFERENCE_COOKIE_MAX_AGE } from "@/lib/preferences/constants";

/** Blocking inline script — syncs cookies/localStorage before React hydrates. */
export const preferenceBootstrapScript = `(function(){try{
var modeKey=${JSON.stringify(AUDIENCE_STORAGE_KEY)};
var localeKey=${JSON.stringify(LOCALE_STORAGE_KEY)};
var maxAge=${PREFERENCE_COOKIE_MAX_AGE};
var params=new URLSearchParams(location.search);
var modeParam=params.get("mode");
var langParam=params.get("lang");
function getCookie(name){
  var parts=("; "+document.cookie).split("; "+name+"=");
  if(parts.length===2){return decodeURIComponent(parts.pop().split(";").shift()||"");}
  return null;
}
function setCookie(name,value){
  document.cookie=name+"="+encodeURIComponent(value)+";path=/;max-age="+maxAge+";SameSite=Lax";
}
var storedMode=null,storedLocale=null;
try{storedMode=localStorage.getItem(modeKey);storedLocale=localStorage.getItem(localeKey);}catch(e){}
var cookieMode=getCookie(modeKey);
var cookieLocale=getCookie(localeKey);
var mode=(modeParam==="client"||modeParam==="barber")?modeParam
  :(cookieMode==="client"||cookieMode==="barber")?cookieMode
  :(storedMode==="client"||storedMode==="barber")?storedMode:"barber";
var locale=(langParam==="en"||langParam==="es"||langParam==="fr")?langParam
  :(cookieLocale==="en"||cookieLocale==="es"||cookieLocale==="fr")?cookieLocale
  :(storedLocale==="en"||storedLocale==="es"||storedLocale==="fr")?storedLocale:"en";
setCookie(modeKey,mode);
setCookie(localeKey,locale);
try{localStorage.setItem(modeKey,mode);localStorage.setItem(localeKey,locale);}catch(e){}
var htmlLang={en:"en",es:"es",fr:"fr"}[locale]||"en";
document.documentElement.setAttribute("data-audience-mode",mode);
document.documentElement.setAttribute("lang",htmlLang);
}catch(e){}})();`;
