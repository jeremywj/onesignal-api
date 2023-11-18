import { Configuration } from '../configuration';
import { App } from '../models/App';
import { BeginLiveActivityRequest } from '../models/BeginLiveActivityRequest';
import { CancelNotificationSuccessResponse } from '../models/CancelNotificationSuccessResponse';
import { CreateNotificationSuccessResponse } from '../models/CreateNotificationSuccessResponse';
import { CreatePlayerSuccessResponse } from '../models/CreatePlayerSuccessResponse';
import { CreateSegmentSuccessResponse } from '../models/CreateSegmentSuccessResponse';
import { CreateSubscriptionRequestBody } from '../models/CreateSubscriptionRequestBody';
import { DeletePlayerSuccessResponse } from '../models/DeletePlayerSuccessResponse';
import { DeleteSegmentSuccessResponse } from '../models/DeleteSegmentSuccessResponse';
import { ExportEventsSuccessResponse } from '../models/ExportEventsSuccessResponse';
import { ExportPlayersRequestBody } from '../models/ExportPlayersRequestBody';
import { ExportPlayersSuccessResponse } from '../models/ExportPlayersSuccessResponse';
import { GetNotificationRequestBody } from '../models/GetNotificationRequestBody';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse201 } from '../models/InlineResponse201';
import { InlineResponse202 } from '../models/InlineResponse202';
import { Notification } from '../models/Notification';
import { NotificationHistorySuccessResponse } from '../models/NotificationHistorySuccessResponse';
import { NotificationSlice } from '../models/NotificationSlice';
import { NotificationWithMeta } from '../models/NotificationWithMeta';
import { OutcomesData } from '../models/OutcomesData';
import { Player } from '../models/Player';
import { PlayerSlice } from '../models/PlayerSlice';
import { Segment } from '../models/Segment';
import { TransferSubscriptionRequestBody } from '../models/TransferSubscriptionRequestBody';
import { UpdateLiveActivityRequest } from '../models/UpdateLiveActivityRequest';
import { UpdateLiveActivitySuccessResponse } from '../models/UpdateLiveActivitySuccessResponse';
import { UpdatePlayerSuccessResponse } from '../models/UpdatePlayerSuccessResponse';
import { UpdatePlayerTagsRequestBody } from '../models/UpdatePlayerTagsRequestBody';
import { UpdatePlayerTagsSuccessResponse } from '../models/UpdatePlayerTagsSuccessResponse';
import { UpdateSubscriptionRequestBody } from '../models/UpdateSubscriptionRequestBody';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { User } from '../models/User';
import { UserIdentityRequestBody } from '../models/UserIdentityRequestBody';
import { UserIdentityResponse } from '../models/UserIdentityResponse';
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class PromiseDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    beginLiveActivity(appId: string, activityId: string, beginLiveActivityRequest: BeginLiveActivityRequest, _options?: Configuration): Promise<void>;
    cancelNotification(appId: string, notificationId: string, _options?: Configuration): Promise<CancelNotificationSuccessResponse>;
    createApp(app: App, _options?: Configuration): Promise<App>;
    createNotification(notification: Notification, _options?: Configuration): Promise<CreateNotificationSuccessResponse>;
    createPlayer(player: Player, _options?: Configuration): Promise<CreatePlayerSuccessResponse>;
    createSegments(appId: string, segment?: Segment, _options?: Configuration): Promise<CreateSegmentSuccessResponse>;
    createSubscription(appId: string, aliasLabel: string, aliasId: string, createSubscriptionRequestBody: CreateSubscriptionRequestBody, _options?: Configuration): Promise<InlineResponse201>;
    createUser(appId: string, user: User, _options?: Configuration): Promise<User>;
    deleteAlias(appId: string, aliasLabel: string, aliasId: string, aliasLabelToDelete: string, _options?: Configuration): Promise<InlineResponse200>;
    deletePlayer(appId: string, playerId: string, _options?: Configuration): Promise<DeletePlayerSuccessResponse>;
    deleteSegments(appId: string, segmentId: string, _options?: Configuration): Promise<DeleteSegmentSuccessResponse>;
    deleteSubscription(appId: string, subscriptionId: string, _options?: Configuration): Promise<void>;
    deleteUser(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Promise<void>;
    endLiveActivity(appId: string, activityId: string, subscriptionId: string, _options?: Configuration): Promise<void>;
    exportEvents(notificationId: string, appId: string, _options?: Configuration): Promise<ExportEventsSuccessResponse>;
    exportPlayers(appId: string, exportPlayersRequestBody?: ExportPlayersRequestBody, _options?: Configuration): Promise<ExportPlayersSuccessResponse>;
    fetchAliases(appId: string, subscriptionId: string, _options?: Configuration): Promise<UserIdentityResponse>;
    fetchUser(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Promise<User>;
    fetchUserIdentity(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Promise<InlineResponse200>;
    getApp(appId: string, _options?: Configuration): Promise<App>;
    getApps(_options?: Configuration): Promise<Array<App>>;
    getEligibleIams(appId: string, subscriptionId: string, _options?: Configuration): Promise<InlineResponse2003>;
    getNotification(appId: string, notificationId: string, _options?: Configuration): Promise<NotificationWithMeta>;
    getNotificationHistory(notificationId: string, getNotificationRequestBody: GetNotificationRequestBody, _options?: Configuration): Promise<NotificationHistorySuccessResponse>;
    getNotifications(appId: string, limit?: number, offset?: number, kind?: 0 | 1 | 3, _options?: Configuration): Promise<NotificationSlice>;
    getOutcomes(appId: string, outcomeNames: string, outcomeNames2?: string, outcomeTimeRange?: string, outcomePlatforms?: string, outcomeAttribution?: string, _options?: Configuration): Promise<OutcomesData>;
    getPlayer(appId: string, playerId: string, emailAuthHash?: string, _options?: Configuration): Promise<Player>;
    getPlayers(appId: string, limit?: number, offset?: number, _options?: Configuration): Promise<PlayerSlice>;
    identifyUserByAlias(appId: string, aliasLabel: string, aliasId: string, userIdentityRequestBody: UserIdentityRequestBody, _options?: Configuration): Promise<InlineResponse200>;
    identifyUserBySubscriptionId(appId: string, subscriptionId: string, userIdentityRequestBody: UserIdentityRequestBody, _options?: Configuration): Promise<UserIdentityResponse>;
    transferSubscription(appId: string, subscriptionId: string, transferSubscriptionRequestBody: TransferSubscriptionRequestBody, _options?: Configuration): Promise<UserIdentityResponse>;
    updateApp(appId: string, app: App, _options?: Configuration): Promise<App>;
    updateLiveActivity(appId: string, activityId: string, updateLiveActivityRequest: UpdateLiveActivityRequest, _options?: Configuration): Promise<UpdateLiveActivitySuccessResponse>;
    updatePlayer(playerId: string, player: Player, _options?: Configuration): Promise<UpdatePlayerSuccessResponse>;
    updatePlayerTags(appId: string, externalUserId: string, updatePlayerTagsRequestBody?: UpdatePlayerTagsRequestBody, _options?: Configuration): Promise<UpdatePlayerTagsSuccessResponse>;
    updateSubscription(appId: string, subscriptionId: string, updateSubscriptionRequestBody: UpdateSubscriptionRequestBody, _options?: Configuration): Promise<void>;
    updateUser(appId: string, aliasLabel: string, aliasId: string, updateUserRequest: UpdateUserRequest, _options?: Configuration): Promise<InlineResponse202>;
}