"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicNotification = void 0;
var BasicNotification = (function () {
    function BasicNotification() {
    }
    BasicNotification.getAttributeTypeMap = function () {
        return BasicNotification.attributeTypeMap;
    };
    BasicNotification.discriminator = undefined;
    BasicNotification.attributeTypeMap = [
        {
            "name": "included_segments",
            "baseName": "included_segments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "excluded_segments",
            "baseName": "excluded_segments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_player_ids",
            "baseName": "include_player_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_external_user_ids",
            "baseName": "include_external_user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_email_tokens",
            "baseName": "include_email_tokens",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_phone_numbers",
            "baseName": "include_phone_numbers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_ios_tokens",
            "baseName": "include_ios_tokens",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_wp_wns_uris",
            "baseName": "include_wp_wns_uris",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_amazon_reg_ids",
            "baseName": "include_amazon_reg_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_chrome_reg_ids",
            "baseName": "include_chrome_reg_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_chrome_web_reg_ids",
            "baseName": "include_chrome_web_reg_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_android_reg_ids",
            "baseName": "include_android_reg_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_aliases",
            "baseName": "include_aliases",
            "type": "PlayerNotificationTargetIncludeAliases",
            "format": ""
        },
        {
            "name": "target_channel",
            "baseName": "target_channel",
            "type": "BasicNotificationTargetChannelEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "aggregation",
            "baseName": "aggregation",
            "type": "BasicNotificationAggregationEnum",
            "format": ""
        },
        {
            "name": "is_ios",
            "baseName": "isIos",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "is_android",
            "baseName": "isAndroid",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "is_huawei",
            "baseName": "isHuawei",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "is_any_web",
            "baseName": "isAnyWeb",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "is_chrome_web",
            "baseName": "isChromeWeb",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "is_firefox",
            "baseName": "isFirefox",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "is_safari",
            "baseName": "isSafari",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "is_wp_wns",
            "baseName": "isWP_WNS",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "is_adm",
            "baseName": "isAdm",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "is_chrome",
            "baseName": "isChrome",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "channel_for_external_user_ids",
            "baseName": "channel_for_external_user_ids",
            "type": "string",
            "format": ""
        },
        {
            "name": "app_id",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "external_id",
            "baseName": "external_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "contents",
            "baseName": "contents",
            "type": "StringMap",
            "format": ""
        },
        {
            "name": "headings",
            "baseName": "headings",
            "type": "StringMap",
            "format": ""
        },
        {
            "name": "subtitle",
            "baseName": "subtitle",
            "type": "StringMap",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object",
            "format": ""
        },
        {
            "name": "huawei_msg_type",
            "baseName": "huawei_msg_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_url",
            "baseName": "web_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "app_url",
            "baseName": "app_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "ios_attachments",
            "baseName": "ios_attachments",
            "type": "object",
            "format": ""
        },
        {
            "name": "template_id",
            "baseName": "template_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "content_available",
            "baseName": "content_available",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mutable_content",
            "baseName": "mutable_content",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "target_content_identifier",
            "baseName": "target_content_identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "big_picture",
            "baseName": "big_picture",
            "type": "string",
            "format": ""
        },
        {
            "name": "huawei_big_picture",
            "baseName": "huawei_big_picture",
            "type": "string",
            "format": ""
        },
        {
            "name": "adm_big_picture",
            "baseName": "adm_big_picture",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_big_picture",
            "baseName": "chrome_big_picture",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_web_image",
            "baseName": "chrome_web_image",
            "type": "string",
            "format": ""
        },
        {
            "name": "buttons",
            "baseName": "buttons",
            "type": "Array<Button>",
            "format": ""
        },
        {
            "name": "web_buttons",
            "baseName": "web_buttons",
            "type": "Array<Button>",
            "format": ""
        },
        {
            "name": "ios_category",
            "baseName": "ios_category",
            "type": "string",
            "format": ""
        },
        {
            "name": "android_channel_id",
            "baseName": "android_channel_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "huawei_channel_id",
            "baseName": "huawei_channel_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "existing_android_channel_id",
            "baseName": "existing_android_channel_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "huawei_existing_channel_id",
            "baseName": "huawei_existing_channel_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "android_background_layout",
            "baseName": "android_background_layout",
            "type": "BasicNotificationAllOfAndroidBackgroundLayout",
            "format": ""
        },
        {
            "name": "small_icon",
            "baseName": "small_icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "huawei_small_icon",
            "baseName": "huawei_small_icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "large_icon",
            "baseName": "large_icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "huawei_large_icon",
            "baseName": "huawei_large_icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "adm_small_icon",
            "baseName": "adm_small_icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "adm_large_icon",
            "baseName": "adm_large_icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_web_icon",
            "baseName": "chrome_web_icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_web_badge",
            "baseName": "chrome_web_badge",
            "type": "string",
            "format": ""
        },
        {
            "name": "firefox_icon",
            "baseName": "firefox_icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_icon",
            "baseName": "chrome_icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "ios_sound",
            "baseName": "ios_sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "ios_interruption_level",
            "baseName": "ios_interruption_level",
            "type": "string",
            "format": ""
        },
        {
            "name": "android_sound",
            "baseName": "android_sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "huawei_sound",
            "baseName": "huawei_sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "adm_sound",
            "baseName": "adm_sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "wp_wns_sound",
            "baseName": "wp_wns_sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "android_led_color",
            "baseName": "android_led_color",
            "type": "string",
            "format": ""
        },
        {
            "name": "huawei_led_color",
            "baseName": "huawei_led_color",
            "type": "string",
            "format": ""
        },
        {
            "name": "android_accent_color",
            "baseName": "android_accent_color",
            "type": "string",
            "format": ""
        },
        {
            "name": "huawei_accent_color",
            "baseName": "huawei_accent_color",
            "type": "string",
            "format": ""
        },
        {
            "name": "android_visibility",
            "baseName": "android_visibility",
            "type": "number",
            "format": ""
        },
        {
            "name": "huawei_visibility",
            "baseName": "huawei_visibility",
            "type": "number",
            "format": ""
        },
        {
            "name": "ios_badge_type",
            "baseName": "ios_badgeType",
            "type": "string",
            "format": ""
        },
        {
            "name": "ios_badge_count",
            "baseName": "ios_badgeCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "collapse_id",
            "baseName": "collapse_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_push_topic",
            "baseName": "web_push_topic",
            "type": "string",
            "format": ""
        },
        {
            "name": "apns_alert",
            "baseName": "apns_alert",
            "type": "object",
            "format": ""
        },
        {
            "name": "delayed_option",
            "baseName": "delayed_option",
            "type": "string",
            "format": ""
        },
        {
            "name": "delivery_time_of_day",
            "baseName": "delivery_time_of_day",
            "type": "string",
            "format": ""
        },
        {
            "name": "ttl",
            "baseName": "ttl",
            "type": "number",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": ""
        },
        {
            "name": "apns_push_type_override",
            "baseName": "apns_push_type_override",
            "type": "string",
            "format": ""
        },
        {
            "name": "throttle_rate_per_minute",
            "baseName": "throttle_rate_per_minute",
            "type": "string",
            "format": ""
        },
        {
            "name": "android_group",
            "baseName": "android_group",
            "type": "string",
            "format": ""
        },
        {
            "name": "android_group_message",
            "baseName": "android_group_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "adm_group",
            "baseName": "adm_group",
            "type": "string",
            "format": ""
        },
        {
            "name": "adm_group_message",
            "baseName": "adm_group_message",
            "type": "object",
            "format": ""
        },
        {
            "name": "thread_id",
            "baseName": "thread_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "summary_arg",
            "baseName": "summary_arg",
            "type": "string",
            "format": ""
        },
        {
            "name": "summary_arg_count",
            "baseName": "summary_arg_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "email_subject",
            "baseName": "email_subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "email_body",
            "baseName": "email_body",
            "type": "string",
            "format": ""
        },
        {
            "name": "email_from_name",
            "baseName": "email_from_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "email_from_address",
            "baseName": "email_from_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "email_preheader",
            "baseName": "email_preheader",
            "type": "string",
            "format": ""
        },
        {
            "name": "include_unsubscribed",
            "baseName": "include_unsubscribed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sms_from",
            "baseName": "sms_from",
            "type": "string",
            "format": ""
        },
        {
            "name": "sms_media_urls",
            "baseName": "sms_media_urls",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<Filter>",
            "format": ""
        },
        {
            "name": "custom_data",
            "baseName": "custom_data",
            "type": "object",
            "format": ""
        }
    ];
    return BasicNotification;
}());
exports.BasicNotification = BasicNotification;
//# sourceMappingURL=BasicNotification.js.map