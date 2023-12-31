"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./App"), exports);
__exportStar(require("./BasicNotification"), exports);
__exportStar(require("./BasicNotificationAllOf"), exports);
__exportStar(require("./BasicNotificationAllOfAndroidBackgroundLayout"), exports);
__exportStar(require("./BeginLiveActivityRequest"), exports);
__exportStar(require("./Button"), exports);
__exportStar(require("./CancelNotificationSuccessResponse"), exports);
__exportStar(require("./CreateNotificationSuccessResponse"), exports);
__exportStar(require("./CreatePlayerSuccessResponse"), exports);
__exportStar(require("./CreateSegmentConflictResponse"), exports);
__exportStar(require("./CreateSegmentSuccessResponse"), exports);
__exportStar(require("./CreateSubscriptionRequestBody"), exports);
__exportStar(require("./CreateUserConflictResponse"), exports);
__exportStar(require("./CreateUserConflictResponseErrorsInner"), exports);
__exportStar(require("./CreateUserConflictResponseErrorsItemsMeta"), exports);
__exportStar(require("./DeletePlayerNotFoundResponse"), exports);
__exportStar(require("./DeletePlayerSuccessResponse"), exports);
__exportStar(require("./DeleteSegmentNotFoundResponse"), exports);
__exportStar(require("./DeleteSegmentSuccessResponse"), exports);
__exportStar(require("./DeliveryData"), exports);
__exportStar(require("./ExportEventsSuccessResponse"), exports);
__exportStar(require("./ExportPlayersRequestBody"), exports);
__exportStar(require("./ExportPlayersSuccessResponse"), exports);
__exportStar(require("./Filter"), exports);
__exportStar(require("./FilterExpressions"), exports);
__exportStar(require("./GenericError"), exports);
__exportStar(require("./GenericErrorErrorsInner"), exports);
__exportStar(require("./GetNotificationRequestBody"), exports);
__exportStar(require("./InlineResponse200"), exports);
__exportStar(require("./InlineResponse2003"), exports);
__exportStar(require("./InlineResponse201"), exports);
__exportStar(require("./InlineResponse202"), exports);
__exportStar(require("./InvalidIdentifierError"), exports);
__exportStar(require("./Notification"), exports);
__exportStar(require("./Notification200Errors"), exports);
__exportStar(require("./NotificationAllOf"), exports);
__exportStar(require("./NotificationHistorySuccessResponse"), exports);
__exportStar(require("./NotificationSlice"), exports);
__exportStar(require("./NotificationTarget"), exports);
__exportStar(require("./NotificationWithMeta"), exports);
__exportStar(require("./NotificationWithMetaAllOf"), exports);
__exportStar(require("./Operator"), exports);
__exportStar(require("./OutcomeData"), exports);
__exportStar(require("./OutcomesData"), exports);
__exportStar(require("./PlatformDeliveryData"), exports);
__exportStar(require("./PlatformDeliveryDataEmailAllOf"), exports);
__exportStar(require("./PlatformDeliveryDataSmsAllOf"), exports);
__exportStar(require("./Player"), exports);
__exportStar(require("./PlayerNotificationTarget"), exports);
__exportStar(require("./PlayerNotificationTargetIncludeAliases"), exports);
__exportStar(require("./PlayerSlice"), exports);
__exportStar(require("./PropertiesDeltas"), exports);
__exportStar(require("./PropertiesObject"), exports);
__exportStar(require("./Purchase"), exports);
__exportStar(require("./RateLimiterError"), exports);
__exportStar(require("./Segment"), exports);
__exportStar(require("./SegmentNotificationTarget"), exports);
__exportStar(require("./StringMap"), exports);
__exportStar(require("./SubscriptionObject"), exports);
__exportStar(require("./TransferSubscriptionRequestBody"), exports);
__exportStar(require("./UpdateLiveActivityRequest"), exports);
__exportStar(require("./UpdateLiveActivitySuccessResponse"), exports);
__exportStar(require("./UpdatePlayerSuccessResponse"), exports);
__exportStar(require("./UpdatePlayerTagsRequestBody"), exports);
__exportStar(require("./UpdatePlayerTagsSuccessResponse"), exports);
__exportStar(require("./UpdateSubscriptionRequestBody"), exports);
__exportStar(require("./UpdateUserRequest"), exports);
__exportStar(require("./User"), exports);
__exportStar(require("./UserIdentityRequestBody"), exports);
__exportStar(require("./UserIdentityResponse"), exports);
__exportStar(require("./UserSubscriptionOptions"), exports);
var App_1 = require("./App");
var BasicNotification_1 = require("./BasicNotification");
var BasicNotificationAllOf_1 = require("./BasicNotificationAllOf");
var BasicNotificationAllOfAndroidBackgroundLayout_1 = require("./BasicNotificationAllOfAndroidBackgroundLayout");
var BeginLiveActivityRequest_1 = require("./BeginLiveActivityRequest");
var Button_1 = require("./Button");
var CancelNotificationSuccessResponse_1 = require("./CancelNotificationSuccessResponse");
var CreateNotificationSuccessResponse_1 = require("./CreateNotificationSuccessResponse");
var CreatePlayerSuccessResponse_1 = require("./CreatePlayerSuccessResponse");
var CreateSegmentConflictResponse_1 = require("./CreateSegmentConflictResponse");
var CreateSegmentSuccessResponse_1 = require("./CreateSegmentSuccessResponse");
var CreateSubscriptionRequestBody_1 = require("./CreateSubscriptionRequestBody");
var CreateUserConflictResponse_1 = require("./CreateUserConflictResponse");
var CreateUserConflictResponseErrorsInner_1 = require("./CreateUserConflictResponseErrorsInner");
var CreateUserConflictResponseErrorsItemsMeta_1 = require("./CreateUserConflictResponseErrorsItemsMeta");
var DeletePlayerNotFoundResponse_1 = require("./DeletePlayerNotFoundResponse");
var DeletePlayerSuccessResponse_1 = require("./DeletePlayerSuccessResponse");
var DeleteSegmentNotFoundResponse_1 = require("./DeleteSegmentNotFoundResponse");
var DeleteSegmentSuccessResponse_1 = require("./DeleteSegmentSuccessResponse");
var DeliveryData_1 = require("./DeliveryData");
var ExportEventsSuccessResponse_1 = require("./ExportEventsSuccessResponse");
var ExportPlayersRequestBody_1 = require("./ExportPlayersRequestBody");
var ExportPlayersSuccessResponse_1 = require("./ExportPlayersSuccessResponse");
var Filter_1 = require("./Filter");
var FilterExpressions_1 = require("./FilterExpressions");
var GenericError_1 = require("./GenericError");
var GenericErrorErrorsInner_1 = require("./GenericErrorErrorsInner");
var GetNotificationRequestBody_1 = require("./GetNotificationRequestBody");
var InlineResponse200_1 = require("./InlineResponse200");
var InlineResponse2003_1 = require("./InlineResponse2003");
var InlineResponse201_1 = require("./InlineResponse201");
var InlineResponse202_1 = require("./InlineResponse202");
var InvalidIdentifierError_1 = require("./InvalidIdentifierError");
var Notification_1 = require("./Notification");
var Notification200Errors_1 = require("./Notification200Errors");
var NotificationAllOf_1 = require("./NotificationAllOf");
var NotificationHistorySuccessResponse_1 = require("./NotificationHistorySuccessResponse");
var NotificationSlice_1 = require("./NotificationSlice");
var NotificationTarget_1 = require("./NotificationTarget");
var NotificationWithMeta_1 = require("./NotificationWithMeta");
var NotificationWithMetaAllOf_1 = require("./NotificationWithMetaAllOf");
var Operator_1 = require("./Operator");
var OutcomeData_1 = require("./OutcomeData");
var OutcomesData_1 = require("./OutcomesData");
var PlatformDeliveryData_1 = require("./PlatformDeliveryData");
var PlatformDeliveryDataEmailAllOf_1 = require("./PlatformDeliveryDataEmailAllOf");
var PlatformDeliveryDataSmsAllOf_1 = require("./PlatformDeliveryDataSmsAllOf");
var Player_1 = require("./Player");
var PlayerNotificationTarget_1 = require("./PlayerNotificationTarget");
var PlayerNotificationTargetIncludeAliases_1 = require("./PlayerNotificationTargetIncludeAliases");
var PlayerSlice_1 = require("./PlayerSlice");
var PropertiesDeltas_1 = require("./PropertiesDeltas");
var PropertiesObject_1 = require("./PropertiesObject");
var Purchase_1 = require("./Purchase");
var RateLimiterError_1 = require("./RateLimiterError");
var Segment_1 = require("./Segment");
var SegmentNotificationTarget_1 = require("./SegmentNotificationTarget");
var StringMap_1 = require("./StringMap");
var SubscriptionObject_1 = require("./SubscriptionObject");
var TransferSubscriptionRequestBody_1 = require("./TransferSubscriptionRequestBody");
var UpdateLiveActivityRequest_1 = require("./UpdateLiveActivityRequest");
var UpdateLiveActivitySuccessResponse_1 = require("./UpdateLiveActivitySuccessResponse");
var UpdatePlayerSuccessResponse_1 = require("./UpdatePlayerSuccessResponse");
var UpdatePlayerTagsRequestBody_1 = require("./UpdatePlayerTagsRequestBody");
var UpdatePlayerTagsSuccessResponse_1 = require("./UpdatePlayerTagsSuccessResponse");
var UpdateSubscriptionRequestBody_1 = require("./UpdateSubscriptionRequestBody");
var UpdateUserRequest_1 = require("./UpdateUserRequest");
var User_1 = require("./User");
var UserIdentityRequestBody_1 = require("./UserIdentityRequestBody");
var UserIdentityResponse_1 = require("./UserIdentityResponse");
var UserSubscriptionOptions_1 = require("./UserSubscriptionOptions");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
var enumsMap = new Set([
    "AppApnsEnvEnum",
    "BasicNotificationTargetChannelEnum",
    "BasicNotificationAggregationEnum",
    "BasicNotificationAllOfAggregationEnum",
    "FilterRelationEnum",
    "FilterExpressionsRelationEnum",
    "FilterExpressionsOperatorEnum",
    "GetNotificationRequestBodyEventsEnum",
    "NotificationTargetChannelEnum",
    "NotificationAggregationEnum",
    "NotificationTargetTargetChannelEnum",
    "NotificationWithMetaTargetChannelEnum",
    "NotificationWithMetaAggregationEnum",
    "OperatorOperatorEnum",
    "OutcomeDataAggregationEnum",
    "PlayerNotificationTargetTargetChannelEnum",
    "SubscriptionObjectTypeEnum",
    "UpdateLiveActivityRequestNameEnum",
    "UpdateLiveActivityRequestEventEnum",
]);
var typeMap = {
    "App": App_1.App,
    "BasicNotification": BasicNotification_1.BasicNotification,
    "BasicNotificationAllOf": BasicNotificationAllOf_1.BasicNotificationAllOf,
    "BasicNotificationAllOfAndroidBackgroundLayout": BasicNotificationAllOfAndroidBackgroundLayout_1.BasicNotificationAllOfAndroidBackgroundLayout,
    "BeginLiveActivityRequest": BeginLiveActivityRequest_1.BeginLiveActivityRequest,
    "Button": Button_1.Button,
    "CancelNotificationSuccessResponse": CancelNotificationSuccessResponse_1.CancelNotificationSuccessResponse,
    "CreateNotificationSuccessResponse": CreateNotificationSuccessResponse_1.CreateNotificationSuccessResponse,
    "CreatePlayerSuccessResponse": CreatePlayerSuccessResponse_1.CreatePlayerSuccessResponse,
    "CreateSegmentConflictResponse": CreateSegmentConflictResponse_1.CreateSegmentConflictResponse,
    "CreateSegmentSuccessResponse": CreateSegmentSuccessResponse_1.CreateSegmentSuccessResponse,
    "CreateSubscriptionRequestBody": CreateSubscriptionRequestBody_1.CreateSubscriptionRequestBody,
    "CreateUserConflictResponse": CreateUserConflictResponse_1.CreateUserConflictResponse,
    "CreateUserConflictResponseErrorsInner": CreateUserConflictResponseErrorsInner_1.CreateUserConflictResponseErrorsInner,
    "CreateUserConflictResponseErrorsItemsMeta": CreateUserConflictResponseErrorsItemsMeta_1.CreateUserConflictResponseErrorsItemsMeta,
    "DeletePlayerNotFoundResponse": DeletePlayerNotFoundResponse_1.DeletePlayerNotFoundResponse,
    "DeletePlayerSuccessResponse": DeletePlayerSuccessResponse_1.DeletePlayerSuccessResponse,
    "DeleteSegmentNotFoundResponse": DeleteSegmentNotFoundResponse_1.DeleteSegmentNotFoundResponse,
    "DeleteSegmentSuccessResponse": DeleteSegmentSuccessResponse_1.DeleteSegmentSuccessResponse,
    "DeliveryData": DeliveryData_1.DeliveryData,
    "ExportEventsSuccessResponse": ExportEventsSuccessResponse_1.ExportEventsSuccessResponse,
    "ExportPlayersRequestBody": ExportPlayersRequestBody_1.ExportPlayersRequestBody,
    "ExportPlayersSuccessResponse": ExportPlayersSuccessResponse_1.ExportPlayersSuccessResponse,
    "Filter": Filter_1.Filter,
    "FilterExpressions": FilterExpressions_1.FilterExpressions,
    "GenericError": GenericError_1.GenericError,
    "GenericErrorErrorsInner": GenericErrorErrorsInner_1.GenericErrorErrorsInner,
    "GetNotificationRequestBody": GetNotificationRequestBody_1.GetNotificationRequestBody,
    "InlineResponse200": InlineResponse200_1.InlineResponse200,
    "InlineResponse2003": InlineResponse2003_1.InlineResponse2003,
    "InlineResponse201": InlineResponse201_1.InlineResponse201,
    "InlineResponse202": InlineResponse202_1.InlineResponse202,
    "InvalidIdentifierError": InvalidIdentifierError_1.InvalidIdentifierError,
    "Notification": Notification_1.Notification,
    "Notification200Errors": Notification200Errors_1.Notification200Errors,
    "NotificationAllOf": NotificationAllOf_1.NotificationAllOf,
    "NotificationHistorySuccessResponse": NotificationHistorySuccessResponse_1.NotificationHistorySuccessResponse,
    "NotificationSlice": NotificationSlice_1.NotificationSlice,
    "NotificationTarget": NotificationTarget_1.NotificationTarget,
    "NotificationWithMeta": NotificationWithMeta_1.NotificationWithMeta,
    "NotificationWithMetaAllOf": NotificationWithMetaAllOf_1.NotificationWithMetaAllOf,
    "Operator": Operator_1.Operator,
    "OutcomeData": OutcomeData_1.OutcomeData,
    "OutcomesData": OutcomesData_1.OutcomesData,
    "PlatformDeliveryData": PlatformDeliveryData_1.PlatformDeliveryData,
    "PlatformDeliveryDataEmailAllOf": PlatformDeliveryDataEmailAllOf_1.PlatformDeliveryDataEmailAllOf,
    "PlatformDeliveryDataSmsAllOf": PlatformDeliveryDataSmsAllOf_1.PlatformDeliveryDataSmsAllOf,
    "Player": Player_1.Player,
    "PlayerNotificationTarget": PlayerNotificationTarget_1.PlayerNotificationTarget,
    "PlayerNotificationTargetIncludeAliases": PlayerNotificationTargetIncludeAliases_1.PlayerNotificationTargetIncludeAliases,
    "PlayerSlice": PlayerSlice_1.PlayerSlice,
    "PropertiesDeltas": PropertiesDeltas_1.PropertiesDeltas,
    "PropertiesObject": PropertiesObject_1.PropertiesObject,
    "Purchase": Purchase_1.Purchase,
    "RateLimiterError": RateLimiterError_1.RateLimiterError,
    "Segment": Segment_1.Segment,
    "SegmentNotificationTarget": SegmentNotificationTarget_1.SegmentNotificationTarget,
    "StringMap": StringMap_1.StringMap,
    "SubscriptionObject": SubscriptionObject_1.SubscriptionObject,
    "TransferSubscriptionRequestBody": TransferSubscriptionRequestBody_1.TransferSubscriptionRequestBody,
    "UpdateLiveActivityRequest": UpdateLiveActivityRequest_1.UpdateLiveActivityRequest,
    "UpdateLiveActivitySuccessResponse": UpdateLiveActivitySuccessResponse_1.UpdateLiveActivitySuccessResponse,
    "UpdatePlayerSuccessResponse": UpdatePlayerSuccessResponse_1.UpdatePlayerSuccessResponse,
    "UpdatePlayerTagsRequestBody": UpdatePlayerTagsRequestBody_1.UpdatePlayerTagsRequestBody,
    "UpdatePlayerTagsSuccessResponse": UpdatePlayerTagsSuccessResponse_1.UpdatePlayerTagsSuccessResponse,
    "UpdateSubscriptionRequestBody": UpdateSubscriptionRequestBody_1.UpdateSubscriptionRequestBody,
    "UpdateUserRequest": UpdateUserRequest_1.UpdateUserRequest,
    "User": User_1.User,
    "UserIdentityRequestBody": UserIdentityRequestBody_1.UserIdentityRequestBody,
    "UserIdentityResponse": UserIdentityResponse_1.UserIdentityResponse,
    "UserSubscriptionOptions": UserSubscriptionOptions_1.UserSubscriptionOptions,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0, normalMediaTypes_1 = normalMediaTypes; _i < normalMediaTypes_1.length; _i++) {
            var mediaType = normalMediaTypes_1[_i];
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map