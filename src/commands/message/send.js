import { Command, flags } from '@oclif/command';
import { StreamChat } from 'stream-chat';
import emoji from 'node-emoji';
import moment from 'moment';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs-extra';

import { exit } from '../../utils/response';
import { authError } from '../../utils/error';
import { credentials } from '../../utils/config';

export class MessageSend extends Command {
    static flags = {
        uid: flags.string({
            char: 'u',
            description: chalk.blue.bold('ID of the user sending a message.'),
            default: '*',
            required: true,
        }),
        type: flags.string({
            char: 't',
            description: chalk.blue.bold('Type of the channel'),
            options: ['livestream', 'messaging', 'gaming', 'commerce', 'team'],
            required: true,
        }),
        channel: flags.string({
            char: 'c',
            description: chalk.blue.bold('Name of the the channel'),
            required: true,
        }),
        message: flags.string({
            char: 'm',
            description: chalk.blue.bold('Message to send.'),
            required: true,
        }),
        attachments: flags.string({
            char: 'a',
            description: chalk.blue.bold('JSON payload of attachments'),
            required: false,
        }),
    };

    async run() {
        const { flags } = this.parse(MessageSend);
        const config = path.join(this.config.configDir, 'config.json');

        try {
            const { apiKey, apiSecret } = await credentials(config);
            if (!apiKey || !apiSecret) return authError();

            const client = new StreamChat(apiKey, apiSecret);

            await client.updateUser({
                id: flags.uid,
                role: 'admin',
            });

            await client.setUser({ id: flags.uid, status: 'invisible' });
            const channel = client.channel(flags.type, flags.channel);

            const payload = {
                text: flags.message,
            };

            if (flags.attachments) {
                payload.attachments = JSON.parse(flags.attachments);
            }

            await channel.sendMessage(payload);

            const message = chalk.blue(
                `Message ${chalk.bold(
                    flags.message
                )} has been sent to the ${chalk.bold(
                    flags.channel
                )} channel by ${chalk.bold(flags.uid)}!`
            );

            exit(message, 'smile');
        } catch (err) {
            this.error(err, { exit: 1 });
        }
    }
}

MessageSend.description = 'Send messages to a channel.';
