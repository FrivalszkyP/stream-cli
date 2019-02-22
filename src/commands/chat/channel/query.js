const { Command, flags } = require('@oclif/command');
const chalk = require('chalk');
const path = require('path');

const auth = require('../../../utils/auth');

export class ChannelQuery extends Command {
    static flags = {
        id: flags.string({
            char: 'i',
            description: chalk.blue.bold('The channel ID you wish to query.'),
            required: true,
        }),
        type: flags.string({
            char: 't',
            description: chalk.blue.bold('Type of channel.'),
            options: ['livestream', 'messaging', 'gaming', 'commerce', 'team'],
            required: false,
        }),
        filter: flags.string({
            char: 'f',
            description: chalk.blue.bold('Filters to apply to the query.'),
            required: false,
        }),
        sort: flags.string({
            char: 's',
            description: chalk.blue.bold('Sort to apply to the query.'),
            required: false,
        }),
    };

    async run() {
        const { flags } = this.parse(ChannelQuery);

        try {
            const client = await auth(
                path.join(this.config.configDir, 'config.json'),
                this
            );

            const filter = flags.filters ? JSON.parse(flags.filters) : {};
            const sort = flags.sort ? JSON.parse(flags.sort) : {};

            const channels = await client.queryChannels(filter, sort, {
                subscribe: false,
            });

            this.log(channels[0].data);

            this.exit(0);
        } catch (err) {
            this.error(err, { exit: 1 });
        }
    }
}

ChannelQuery.description = 'Query a channel.';
