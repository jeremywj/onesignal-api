"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectDefaultApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectDefaultApi = (function () {
    function ObjectDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDefaultApi.prototype.beginLiveActivity = function (param, options) {
        return this.api.beginLiveActivity(param.appId, param.activityId, param.beginLiveActivityRequest, options).toPromise();
    };
    ObjectDefaultApi.prototype.cancelNotification = function (param, options) {
        return this.api.cancelNotification(param.appId, param.notificationId, options).toPromise();
    };
    ObjectDefaultApi.prototype.createApp = function (param, options) {
        return this.api.createApp(param.app, options).toPromise();
    };
    ObjectDefaultApi.prototype.createNotification = function (param, options) {
        return this.api.createNotification(param.notification, options).toPromise();
    };
    ObjectDefaultApi.prototype.createPlayer = function (param, options) {
        return this.api.createPlayer(param.player, options).toPromise();
    };
    ObjectDefaultApi.prototype.createSegments = function (param, options) {
        return this.api.createSegments(param.appId, param.segment, options).toPromise();
    };
    ObjectDefaultApi.prototype.createSubscription = function (param, options) {
        return this.api.createSubscription(param.appId, param.aliasLabel, param.aliasId, param.createSubscriptionRequestBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.createUser = function (param, options) {
        return this.api.createUser(param.appId, param.user, options).toPromise();
    };
    ObjectDefaultApi.prototype.deleteAlias = function (param, options) {
        return this.api.deleteAlias(param.appId, param.aliasLabel, param.aliasId, param.aliasLabelToDelete, options).toPromise();
    };
    ObjectDefaultApi.prototype.deletePlayer = function (param, options) {
        return this.api.deletePlayer(param.appId, param.playerId, options).toPromise();
    };
    ObjectDefaultApi.prototype.deleteSegments = function (param, options) {
        return this.api.deleteSegments(param.appId, param.segmentId, options).toPromise();
    };
    ObjectDefaultApi.prototype.deleteSubscription = function (param, options) {
        return this.api.deleteSubscription(param.appId, param.subscriptionId, options).toPromise();
    };
    ObjectDefaultApi.prototype.deleteUser = function (param, options) {
        return this.api.deleteUser(param.appId, param.aliasLabel, param.aliasId, options).toPromise();
    };
    ObjectDefaultApi.prototype.endLiveActivity = function (param, options) {
        return this.api.endLiveActivity(param.appId, param.activityId, param.subscriptionId, options).toPromise();
    };
    ObjectDefaultApi.prototype.exportEvents = function (param, options) {
        return this.api.exportEvents(param.notificationId, param.appId, options).toPromise();
    };
    ObjectDefaultApi.prototype.exportPlayers = function (param, options) {
        return this.api.exportPlayers(param.appId, param.exportPlayersRequestBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.fetchAliases = function (param, options) {
        return this.api.fetchAliases(param.appId, param.subscriptionId, options).toPromise();
    };
    ObjectDefaultApi.prototype.fetchUser = function (param, options) {
        return this.api.fetchUser(param.appId, param.aliasLabel, param.aliasId, options).toPromise();
    };
    ObjectDefaultApi.prototype.fetchUserIdentity = function (param, options) {
        return this.api.fetchUserIdentity(param.appId, param.aliasLabel, param.aliasId, options).toPromise();
    };
    ObjectDefaultApi.prototype.getApp = function (param, options) {
        return this.api.getApp(param.appId, options).toPromise();
    };
    ObjectDefaultApi.prototype.getApps = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getApps(options).toPromise();
    };
    ObjectDefaultApi.prototype.getEligibleIams = function (param, options) {
        return this.api.getEligibleIams(param.appId, param.subscriptionId, options).toPromise();
    };
    ObjectDefaultApi.prototype.getNotification = function (param, options) {
        return this.api.getNotification(param.appId, param.notificationId, options).toPromise();
    };
    ObjectDefaultApi.prototype.getNotificationHistory = function (param, options) {
        return this.api.getNotificationHistory(param.notificationId, param.getNotificationRequestBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.getNotifications = function (param, options) {
        return this.api.getNotifications(param.appId, param.limit, param.offset, param.kind, options).toPromise();
    };
    ObjectDefaultApi.prototype.getOutcomes = function (param, options) {
        return this.api.getOutcomes(param.appId, param.outcomeNames, param.outcomeNames2, param.outcomeTimeRange, param.outcomePlatforms, param.outcomeAttribution, options).toPromise();
    };
    ObjectDefaultApi.prototype.getPlayer = function (param, options) {
        return this.api.getPlayer(param.appId, param.playerId, param.emailAuthHash, options).toPromise();
    };
    ObjectDefaultApi.prototype.getPlayers = function (param, options) {
        return this.api.getPlayers(param.appId, param.limit, param.offset, options).toPromise();
    };
    ObjectDefaultApi.prototype.identifyUserByAlias = function (param, options) {
        return this.api.identifyUserByAlias(param.appId, param.aliasLabel, param.aliasId, param.userIdentityRequestBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.identifyUserBySubscriptionId = function (param, options) {
        return this.api.identifyUserBySubscriptionId(param.appId, param.subscriptionId, param.userIdentityRequestBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.transferSubscription = function (param, options) {
        return this.api.transferSubscription(param.appId, param.subscriptionId, param.transferSubscriptionRequestBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateApp = function (param, options) {
        return this.api.updateApp(param.appId, param.app, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateLiveActivity = function (param, options) {
        return this.api.updateLiveActivity(param.appId, param.activityId, param.updateLiveActivityRequest, options).toPromise();
    };
    ObjectDefaultApi.prototype.updatePlayer = function (param, options) {
        return this.api.updatePlayer(param.playerId, param.player, options).toPromise();
    };
    ObjectDefaultApi.prototype.updatePlayerTags = function (param, options) {
        return this.api.updatePlayerTags(param.appId, param.externalUserId, param.updatePlayerTagsRequestBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateSubscription = function (param, options) {
        return this.api.updateSubscription(param.appId, param.subscriptionId, param.updateSubscriptionRequestBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateUser = function (param, options) {
        return this.api.updateUser(param.appId, param.aliasLabel, param.aliasId, param.updateUserRequest, options).toPromise();
    };
    return ObjectDefaultApi;
}());
exports.ObjectDefaultApi = ObjectDefaultApi;
//# sourceMappingURL=ObjectParamAPI.js.map