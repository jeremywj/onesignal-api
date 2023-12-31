"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseDefaultApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDefaultApi.prototype.beginLiveActivity = function (appId, activityId, beginLiveActivityRequest, _options) {
        var result = this.api.beginLiveActivity(appId, activityId, beginLiveActivityRequest, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.cancelNotification = function (appId, notificationId, _options) {
        var result = this.api.cancelNotification(appId, notificationId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createApp = function (app, _options) {
        var result = this.api.createApp(app, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createNotification = function (notification, _options) {
        var result = this.api.createNotification(notification, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createPlayer = function (player, _options) {
        var result = this.api.createPlayer(player, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createSegments = function (appId, segment, _options) {
        var result = this.api.createSegments(appId, segment, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createSubscription = function (appId, aliasLabel, aliasId, createSubscriptionRequestBody, _options) {
        var result = this.api.createSubscription(appId, aliasLabel, aliasId, createSubscriptionRequestBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createUser = function (appId, user, _options) {
        var result = this.api.createUser(appId, user, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deleteAlias = function (appId, aliasLabel, aliasId, aliasLabelToDelete, _options) {
        var result = this.api.deleteAlias(appId, aliasLabel, aliasId, aliasLabelToDelete, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deletePlayer = function (appId, playerId, _options) {
        var result = this.api.deletePlayer(appId, playerId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deleteSegments = function (appId, segmentId, _options) {
        var result = this.api.deleteSegments(appId, segmentId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deleteSubscription = function (appId, subscriptionId, _options) {
        var result = this.api.deleteSubscription(appId, subscriptionId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deleteUser = function (appId, aliasLabel, aliasId, _options) {
        var result = this.api.deleteUser(appId, aliasLabel, aliasId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.endLiveActivity = function (appId, activityId, subscriptionId, _options) {
        var result = this.api.endLiveActivity(appId, activityId, subscriptionId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.exportEvents = function (notificationId, appId, _options) {
        var result = this.api.exportEvents(notificationId, appId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.exportPlayers = function (appId, exportPlayersRequestBody, _options) {
        var result = this.api.exportPlayers(appId, exportPlayersRequestBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.fetchAliases = function (appId, subscriptionId, _options) {
        var result = this.api.fetchAliases(appId, subscriptionId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.fetchUser = function (appId, aliasLabel, aliasId, _options) {
        var result = this.api.fetchUser(appId, aliasLabel, aliasId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.fetchUserIdentity = function (appId, aliasLabel, aliasId, _options) {
        var result = this.api.fetchUserIdentity(appId, aliasLabel, aliasId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getApp = function (appId, _options) {
        var result = this.api.getApp(appId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getApps = function (_options) {
        var result = this.api.getApps(_options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getEligibleIams = function (appId, subscriptionId, _options) {
        var result = this.api.getEligibleIams(appId, subscriptionId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getNotification = function (appId, notificationId, _options) {
        var result = this.api.getNotification(appId, notificationId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getNotificationHistory = function (notificationId, getNotificationRequestBody, _options) {
        var result = this.api.getNotificationHistory(notificationId, getNotificationRequestBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getNotifications = function (appId, limit, offset, kind, _options) {
        var result = this.api.getNotifications(appId, limit, offset, kind, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getOutcomes = function (appId, outcomeNames, outcomeNames2, outcomeTimeRange, outcomePlatforms, outcomeAttribution, _options) {
        var result = this.api.getOutcomes(appId, outcomeNames, outcomeNames2, outcomeTimeRange, outcomePlatforms, outcomeAttribution, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getPlayer = function (appId, playerId, emailAuthHash, _options) {
        var result = this.api.getPlayer(appId, playerId, emailAuthHash, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getPlayers = function (appId, limit, offset, _options) {
        var result = this.api.getPlayers(appId, limit, offset, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.identifyUserByAlias = function (appId, aliasLabel, aliasId, userIdentityRequestBody, _options) {
        var result = this.api.identifyUserByAlias(appId, aliasLabel, aliasId, userIdentityRequestBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.identifyUserBySubscriptionId = function (appId, subscriptionId, userIdentityRequestBody, _options) {
        var result = this.api.identifyUserBySubscriptionId(appId, subscriptionId, userIdentityRequestBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.transferSubscription = function (appId, subscriptionId, transferSubscriptionRequestBody, _options) {
        var result = this.api.transferSubscription(appId, subscriptionId, transferSubscriptionRequestBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateApp = function (appId, app, _options) {
        var result = this.api.updateApp(appId, app, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateLiveActivity = function (appId, activityId, updateLiveActivityRequest, _options) {
        var result = this.api.updateLiveActivity(appId, activityId, updateLiveActivityRequest, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updatePlayer = function (playerId, player, _options) {
        var result = this.api.updatePlayer(playerId, player, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updatePlayerTags = function (appId, externalUserId, updatePlayerTagsRequestBody, _options) {
        var result = this.api.updatePlayerTags(appId, externalUserId, updatePlayerTagsRequestBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateSubscription = function (appId, subscriptionId, updateSubscriptionRequestBody, _options) {
        var result = this.api.updateSubscription(appId, subscriptionId, updateSubscriptionRequestBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateUser = function (appId, aliasLabel, aliasId, updateUserRequest, _options) {
        var result = this.api.updateUser(appId, aliasLabel, aliasId, updateUserRequest, _options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
}());
exports.PromiseDefaultApi = PromiseDefaultApi;
//# sourceMappingURL=PromiseAPI.js.map