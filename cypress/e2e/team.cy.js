let teamId;

describe('Trengo Tests-  Team', () => {
     before(function () {
        cy.fixture('testdata').then(function (data) {
            this.data = data
        })
    })
    it('Create Team', function () {
        cy.request({
            url: 'api/v2/teams/',
            method: 'POST',
            form: true,
            headers: {
                authorization: Cypress.env('logintoken')
            },
            body: {
                "channel_ids": [
                    1072654
                ],
                "user_ids": [
                    596879
                ],
                "name": this.data.name,
                "team_members": [{
                    "id": 596879,
                    "agency_id": 261619,
                    "first_name": "Anchal",
                    "last_name": "A",
                    "name": "Anchal A",
                    "full_name": "Anchal A",
                    "email": "anchalpandey03@gmail.com",
                    "abbr": "A",
                    "phone": null,
                    "color": "#673ab7",
                    "locale_code": "en-GB",
                    "status": "ACTIVE",
                    "text": "Anchal A",
                    "is_online": 1,
                    "user_status": "AWAY",
                    "chat_status": "",
                    "voip_status": null,
                    "voip_device": "WEB",
                    "profile_image": null,
                    "authorization": "OWNER",
                    "role": [],
                    "is_primary": 1,
                    "timezone": "Europe/Amsterdam",
                    "teams": [{
                        "id": 337729,
                        "name": "test Team A",
                        "load_balancing_enabled": false,
                        "consider_user_availability": false
                    }],
                    "created_at": "2022-11-24 17:39:50",
                    "two_factor_authentication_enabled": false
                }],
                "channels": [{
                    "id": 1072654,
                    "name": "Email",
                    "title": "Email",
                    "phone": "",
                    "type": "EMAIL",
                    "auto_reply": "ENABLED",
                    "color": null,
                    "notification_email": null,
                    "business_hour_id": 291254,
                    "notification_sound": "chat.mp3",
                    "status": "ACTIVE",
                    "display_name": "Email • wwwtestc-mail.aixyf1e@trengomail.com",
                    "text": "Email • wwwtestc-mail.aixyf1e@trengomail.com",
                    "show_ticket_fields": 1,
                    "show_contact_fields": 1,
                    "smsChannel": null,
                    "emailChannel": {
                        "channel_id": 1072654,
                        "email_theme_id": null,
                        "sender_email_id": null,
                        "sender_email": null,
                        "add_conversation_to_reply": true,
                        "auto_reply_body": "<p>Dear [name],<br /><br />This is a confirmation that we received your email and registered it as ticket #[ticket_number]. You can always reply to this email if you want to add additional information.<br /><br />Kinds regards,<br /><br />Team www.test.com</p>",
                        "auto_reply_enabled": true,
                        "auto_reply_subject": "Thank you for your email",
                        "branding": true,
                        "branding_service_name": null,
                        "embed_attachments": false,
                        "font_family": null,
                        "prepend_ticket_number_to_subject": false,
                        "sender_name": "www.test.com",
                        "sender_name_personal": "[agent.first_name] | www.test.com",
                        "signature": "<p>Kind regards,<br /><br />[agent.first_name] [agent.last_name]<br />www.test.com</p>",
                        "spam_setting": 1,
                        "split_by_sender": false,
                        "split_by_subject": true,
                        "type": "TRENGO",
                        "meta": [],
                        "created_at": "2022-11-24 17:39:52",
                        "updated_at": "2022-11-24 17:45:55"
                    },
                    "voipChannel": null,
                    "helpCenter": null,
                    "users": [],
                    "whatsappChannel": null,
                    "workloadBalancingTeams": [],
                    "username": "wwwtestc-mail.aixyf1e",
                    "reopen_closed_ticket": 0,
                    "is_private": false,
                    "reassign_reopened_ticket": false,
                    "reopen_closed_ticket_time_window_days": "0",
                    "icon": "/img/channels_icons/email.svg"
                }]
            }
        }).then((response) => {
            console.log(response)
            cy.AssertModel(response);
            expect(response).property('status').to.equal(201);
            expect(response.body).property('id').to.not.be.oneOf([null, ""]);
            expect(response.body).property('name').to.equal(this.data.name);
            teamId = response.body.id
        })
    });

    it('Delete Team', function () {
        cy.request({
            url: `api/v2/teams/${teamId}`,
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
