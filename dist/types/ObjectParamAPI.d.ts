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
export interface DefaultApiBeginLiveActivityRequest {
    appId: string;
    activityId: string;
    beginLiveActivityRequest: BeginLiveActivityRequest;
}
export interface DefaultApiCancelNotificationRequest {
    appId: string;
    notificationId: string;
}
export interface DefaultApiCreateAppRequest {
    app: App;
}
export interface DefaultApiCreateNotificationRequest {
    notification: Notification;
}
export interface DefaultApiCreatePlayerRequest {
    player: Player;
}
export interface DefaultApiCreateSegmentsRequest {
    appId: string;
    segment?: Segment;
}
export interface DefaultApiCreateSubscriptionRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
    createSubscriptionRequestBody: CreateSubscriptionRequestBody;
}
export interface DefaultApiCreateUserRequest {
    appId: string;
    user: User;
}
export interface DefaultApiDeleteAliasRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
    aliasLabelToDelete: string;
}
export interface DefaultApiDeletePlayerRequest {
    appId: string;
    playerId: string;
}
export interface DefaultApiDeleteSegmentsRequest {
    appId: string;
    segmentId: string;
}
export interface DefaultApiDeleteSubscriptionRequest {
    appId: string;
    subscriptionId: string;
}
export interface DefaultApiDeleteUserRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
}
export interface DefaultApiEndLiveActivityRequest {
    appId: string;
    activityId: string;
    subscriptionId: string;
}
export interface DefaultApiExportEventsRequest {
    notificationId: string;
    appId: string;
}
export interface DefaultApiExportPlayersRequest {
    appId: string;
    exportPlayersRequestBody?: ExportPlayersRequestBody;
}
export interface DefaultApiFetchAliasesRequest {
    appId: string;
    subscriptionId: string;
}
export interface DefaultApiFetchUserRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
}
export interface DefaultApiFetchUserIdentityRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
}
export interface DefaultApiGetAppRequest {
    appId: string;
}
export interface DefaultApiGetAppsRequest {
}
export interface DefaultApiGetEligibleIamsRequest {
    appId: string;
    subscriptionId: string;
}
export interface DefaultApiGetNotificationRequest {
    appId: string;
    notificationId: string;
}
export interface DefaultApiGetNotificationHistoryRequest {
    notificationId: string;
    getNotificationRequestBody: GetNotificationRequestBody;
}
export interface DefaultApiGetNotificationsRequest {
    appId: string;
    limit?: number;
    offset?: number;
    kind?: 0 | 1 | 3;
}
export interface DefaultApiGetOutcomesRequest {
    appId: string;
    outcomeNames: string;
    outcomeNames2?: string;
    outcomeTimeRange?: string;
    outcomePlatforms?: string;
    outcomeAttribution?: string;
}
export interface DefaultApiGetPlayerRequest {
    appId: string;
    playerId: string;
    emailAuthHash?: string;
}
export interface DefaultApiGetPlayersRequest {
    appId: string;
    limit?: number;
    offset?: number;
}
export interface DefaultApiIdentifyUserByAliasRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
    userIdentityRequestBody: UserIdentityRequestBody;
}
export interface DefaultApiIdentifyUserBySubscriptionIdRequest {
    appId: string;
    subscriptionId: string;
    userIdentityRequestBody: UserIdentityRequestBody;
}
export interface DefaultApiTransferSubscriptionRequest {
    appId: string;
    subscriptionId: string;
    transferSubscriptionRequestBody: TransferSubscriptionRequestBody;
}
export interface DefaultApiUpdateAppRequest {
    appId: string;
    app: App;
}
export interface DefaultApiUpdateLiveActivityRequest {
    appId: string;
    activityId: string;
    updateLiveActivityRequest: UpdateLiveActivityRequest;
}
export interface DefaultApiUpdatePlayerRequest {
    playerId: string;
    player: Player;
}
export interface DefaultApiUpdatePlayerTagsRequest {
    appId: string;
    externalUserId: string;
    updatePlayerTagsRequestBody?: UpdatePlayerTagsRequestBody;
}
export interface DefaultApiUpdateSubscriptionRequest {
    appId: string;
    subscriptionId: string;
    updateSubscriptionRequestBody: UpdateSubscriptionRequestBody;
}
export interface DefaultApiUpdateUserRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
    updateUserRequest: UpdateUserRequest;
}
export declare class ObjectDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    beginLiveActivity(param: DefaultApiBeginLiveActivityRequest, options?: Configuration): Promise<void>;
    cancelNotification(param: DefaultApiCancelNotificationRequest, options?: Configuration): Promise<CancelNotificationSuccessResponse>;
    createApp(param: DefaultApiCreateAppRequest, options?: Configuration): Promise<App>;
    createNotification(param: DefaultApiCreateNotificationRequest, options?: Configuration): Promise<CreateNotificationSuccessResponse>;
    createPlayer(param: DefaultApiCreatePlayerRequest, options?: Configuration): Promise<CreatePlayerSuccessResponse>;
    createSegments(param: DefaultApiCreateSegmentsRequest, options?: Configuration): Promise<CreateSegmentSuccessResponse>;
    createSubscription(param: DefaultApiCreateSubscriptionRequest, options?: Configuration): Promise<InlineResponse201>;
    createUser(param: DefaultApiCreateUserRequest, options?: Configuration): Promise<User>;
    deleteAlias(param: DefaultApiDeleteAliasRequest, options?: Configuration): Promise<InlineResponse200>;
    deletePlayer(param: DefaultApiDeletePlayerRequest, options?: Configuration): Promise<DeletePlayerSuccessResponse>;
    deleteSegments(param: DefaultApiDeleteSegmentsRequest, options?: Configuration): Promise<DeleteSegmentSuccessResponse>;
    deleteSubscription(param: DefaultApiDeleteSubscriptionRequest, options?: Configuration): Promise<void>;
    deleteUser(param: DefaultApiDeleteUserRequest, options?: Configuration): Promise<void>;
    endLiveActivity(param: DefaultApiEndLiveActivityRequest, options?: Configuration): Promise<void>;
    exportEvents(param: DefaultApiExportEventsRequest, options?: Configuration): Promise<ExportEventsSuccessResponse>;
    exportPlayers(param: DefaultApiExportPlayersRequest, options?: Configuration): Promise<ExportPlayersSuccessResponse>;
    fetchAliases(param: DefaultApiFetchAliasesRequest, options?: Configuration): Promise<UserIdentityResponse>;
    fetchUser(param: DefaultApiFetchUserRequest, options?: Configuration): Promise<User>;
    fetchUserIdentity(param: DefaultApiFetchUserIdentityRequest, options?: Configuration): Promise<InlineResponse200>;
    getApp(param: DefaultApiGetAppRequest, options?: Configuration): Promise<App>;
    getApps(param?: DefaultApiGetAppsRequest, options?: Configuration): Promise<Array<App>>;
    getEligibleIams(param: DefaultApiGetEligibleIamsRequest, options?: Configuration): Promise<InlineResponse2003>;
    getNotification(param: DefaultApiGetNotificationRequest, options?: Configuration): Promise<NotificationWithMeta>;
    getNotificationHistory(param: DefaultApiGetNotificationHistoryRequest, options?: Configuration): Promise<NotificationHistorySuccessResponse>;
    getNotifications(param: DefaultApiGetNotificationsRequest, options?: Configuration): Promise<NotificationSlice>;
    getOutcomes(param: DefaultApiGetOutcomesRequest, options?: Configuration): Promise<OutcomesData>;
    getPlayer(param: DefaultApiGetPlayerRequest, options?: Configuration): Promise<Player>;
    getPlayers(param: DefaultApiGetPlayersRequest, options?: Configuration): Promise<PlayerSlice>;
    identifyUserByAlias(param: DefaultApiIdentifyUserByAliasRequest, options?: Configuration): Promise<InlineResponse200>;
    identifyUserBySubscriptionId(param: DefaultApiIdentifyUserBySubscriptionIdRequest, options?: Configuration): Promise<UserIdentityResponse>;
    transferSubscription(param: DefaultApiTransferSubscriptionRequest, options?: Configuration): Promise<UserIdentityResponse>;
    updateApp(param: DefaultApiUpdateAppRequest, options?: Configuration): Promise<App>;
    updateLiveActivity(param: DefaultApiUpdateLiveActivityRequest, options?: Configuration): Promise<UpdateLiveActivitySuccessResponse>;
    updatePlayer(param: DefaultApiUpdatePlayerRequest, options?: Configuration): Promise<UpdatePlayerSuccessResponse>;
    updatePlayerTags(param: DefaultApiUpdatePlayerTagsRequest, options?: Configuration): Promise<UpdatePlayerTagsSuccessResponse>;
    updateSubscription(param: DefaultApiUpdateSubscriptionRequest, options?: Configuration): Promise<void>;
    updateUser(param: DefaultApiUpdateUserRequest, options?: Configuration): Promise<InlineResponse202>;
}
