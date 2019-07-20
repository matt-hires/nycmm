// --------------------------------------------------
// APP.JS
// --------------------------------------------------
'use strict';
import $ from 'jquery';
import { SmoothScrollWithLinks } from './lib/ext/foundation.smoothScrollWithLinks';
import { Foundation } from './lib/foundation-explicit-pieces';
import { SiteHelper } from './lib/site-helper';
import { NavHandler } from './lib/nav-handler';
import { GMapsApi } from './lib/maps/gmaps-api';
import { CookieConsentHelper } from './lib/cookie-consent-helper';

//
// Custom JS
// --------------------------------------------------
Foundation.plugin(SmoothScrollWithLinks, 'SmoothScrollWithLinks');

// initialize custom apis and mobile navigation
$(document).ready(function () {

  // init foundation js
  $(document).foundation();

  SiteHelper.centerMapMarkerOnMobile('gmapsMap');

  new GMapsApi('${NYCMM_ENV_GMAPS_API_KEY}', 'gmapsMap');

  new NavHandler('js--dropdown-nav-menu',
    'js--dropdown-nav-icon',
    'js--nav-sticky-top-menu',
    'js--back-to-top-button');

  const enableCheckTracking = '${JEKYLL_ENV}' == 'production';
  new CookieConsentHelper(enableCheckTracking, '${NYCMM_ENV_GOOGLE_TRACKING_ID}');

  // when using formspree
  // const contactMailParts = '${NYCMM_ENV_CONTACT_MAIL}'.split('@');
  // const mailAdress = contactMailParts[0];
  // const mailDomain = contactMailParts[1];

  // SiteHelper.setFormSpreeContactFormAction('formSpreeContactForm', mailAdress, mailDomain);
});
