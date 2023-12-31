"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionObject = void 0;
var SubscriptionObject = (function () {
    function SubscriptionObject() {
    }
    SubscriptionObject.getAttributeTypeMap = function () {
        return SubscriptionObject.attributeTypeMap;
    };
    SubscriptionObject.discriminator = undefined;
    SubscriptionObject.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionObjectTypeEnum",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "notification_types",
            "baseName": "notification_types",
            "type": "number",
            "format": ""
        },
        {
            "name": "session_time",
            "baseName": "session_time",
            "type": "number",
            "format": ""
        },
        {
            "name": "session_count",
            "baseName": "session_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "sdk",
            "baseName": "sdk",
            "type": "string",
            "format": ""
        },
        {
            "name": "device_model",
            "baseName": "device_model",
            "type": "string",
            "format": ""
        },
        {
            "name": "device_os",
            "baseName": "device_os",
            "type": "string",
            "format": ""
        },
        {
            "name": "rooted",
            "baseName": "rooted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "test_type",
            "baseName": "test_type",
            "type": "number",
            "format": ""
        },
        {
            "name": "app_version",
            "baseName": "app_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "net_type",
            "baseName": "net_type",
            "type": "number",
            "format": ""
        },
        {
            "name": "carrier",
            "baseName": "carrier",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_auth",
            "baseName": "web_auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_p256",
            "baseName": "web_p256",
            "type": "string",
            "format": ""
        }
    ];
    return SubscriptionObject;
}());
exports.SubscriptionObject = SubscriptionObject;
//# sourceMappingURL=SubscriptionObject.js.map