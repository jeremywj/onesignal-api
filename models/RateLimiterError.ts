/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.2.2
 * Contact: devrel@onesignal.com
 */

import { GenericErrorErrorsInner } from './GenericErrorErrorsInner';
import { HttpFile } from '../http/http';

export class RateLimiterError {
    'errors'?: Array<GenericErrorErrorsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<GenericErrorErrorsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RateLimiterError.attributeTypeMap;
    }

    public constructor() {
    }
}

