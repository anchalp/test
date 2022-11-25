let channelid ; // for deleting channel
let channelusrname; // for Receiving message

describe('Trengo Tests - Custom Channel', () => {
    it('Create custom channel', () => {
        cy.request({
            url: 'api/v2/channels',
            method: 'POST',
            form: true,
            headers: {
                authorization: Cypress.env('logintoken')
            },
            body: {
                "type": "CUSTOM",
                "notification_email": "",
                "notification_sound": "chat.mp3",
                "username": "",
                "password": "",
                "password_is_null": false,
                "title": "testChannel",
                "color": null,
                "teams": [{
                    "id": 338174,
                    "name": "Test team",
                    "load_balancing_enabled": false,
                    "consider_user_availability": false
                }],
                "users": [],
                "reopen_closed_ticket": 1,
                "business_hour_id": 291254,
                "is_private": false,
                "reopen_closed_ticket_time_window_days": 30,
                "voipChannel": {
                    "welcome_greeting_id": null,
                    "voicemail_greeting_id": null,
                    "no_answer_greeting_id": null,
                    "outgoing_caller_id": null,
                    "allow_calls_outside_business_hours": true,
                    "record": true,
                    "queue_size_limit": 5,
                    "queue_time_limit": 30,
                    "country": "NL",
                    "phone_number": {
                        "requires_address": false
                    },
                    "voip_overflow": [],
                    "outside_business_hours_phone_number": null,
                    "overflow_phone_number": null,
                    "voip_ivr_menu_id": null,
                    "meta": {},
                    "enable_voicemail": 1,
                    "store_missed_calls": 1,
                    "provider": "TWILIO_TRENGO",
                    "sip_devices": [{
                        "user_id": null,
                        "extension": null,
                        "meta": {}
                    }]
                },
                "wechatChannel": {
                    "token": "F6FZJ7mdGRRkmeBDy5DWs5xFoBGSXlyF"
                },
                "whatsappChannel": {
                    "meta": {},
                    "sms_channel_id": null,
                    "provider": "sandbox"
                },
                "waSandboxNumbers": [],
                "voipSandboxNumbers": [],
                "smsChannel": {
                    "type": "SEND_ONLY",
                    "meta": {},
                    "provider": "TWILIO_TRENGO",
                    "country": "NL"
                },
                "facebookChannel": {},
                "twitterChannel": {
                    "private_messages": 1,
                    "mentions": 1
                },
                "instagramChannel": {
                    "instagram_business_account_id": null,
                    "private_messages": 0,
                    "comments": 1,
                    "mentions": 1
                },
                "gbmChannel": {
                    "brand_id": null,
                    "agent_id": null,
                    "meta": {
                        "logoAttachmentId": null,
                        "gbmAgent": {
                            "businessMessagesAgent": null
                        },
                        "gbmBrand": null,
                        "agentVerificationContact": null
                    }
                },
                "team_ids": [
                    338174
                ],
                "user_ids": []
            }
        }).then((response) => {
            console.log(response)
            cy.AssertModel(response);
            expect(response).property('status').to.equal(201);
            expect(response.body).property('username').to.not.be.oneOf([null, ""])
            channelusrname = response.body.username;
            channelid = response.body.id;
            console.log(channelusrname)
            console.log(channelid)
        })
    });



    it('Receive message to custom channel', () => {
        cy.request({
            url: 'api/v2/custom_channel_messages',
            method: 'POST',
            form: true,
            headers: {
                authorization: Cypress.env('logintoken')
            },
            body: {
              "contact":{
                "identifier":"ANCHALPANDEYTIWARIAN"
              },
            "body":{
              "text":"Hello"
            },
            "channel":`${channelusrname}`
          }
        }).then((response) => {
            console.log(response)
            cy.AssertModel(response);
            expect(response).property('status').to.equal(200);

        })
    });

    it('Delete Custom channel', () => {
        cy.request({
            url: `api/v2/channels/${channelid}`,
            method: 'DELETE',
            headers: {
                authorization: Cypress.env('logintoken')
            }
        }).then((response) => {
            console.log(response)
            cy.AssertModel(response);
            expect(response).property('status').to.equal(200);
        })
    });
});
