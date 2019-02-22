![Stream Cli](https://i.imgur.com/H8AScTq.png)

# Stream CLI

> Note: The Stream CLI is currently in beta and may contain bugs. This _should not_ be used against a production environment at this time. To report bugs, please follow the instructions below. Thank you for your support!

Stream's Command Line Interface (CLI) makes it easy to create and manage your [Stream](https://getstream.io) apps directly from the terminal. Currently, only Chat is supported; however, the ability to manage Feeds will be coming soon.

[![Version](https://img.shields.io/npm/v/getstream-cli.svg)](https://npmjs.org/package/getstream-cli)
[![Dependency Status](https://david-dm.org/getstream/stream-cli/status.svg)](https://david-dm.org/getstream/stream-cli)
[![devDependency Status](https://david-dm.org/getstream/stream-cli/dev-status.svg)](https://david-dm.org/getstream/stream-cli?type=dev)
[![License](https://img.shields.io/npm/l/getstream-cli.svg)](https://github.com/getstream/stream-cli/blob/master/package.json)

## 🗒 Issues

If you're experiencing problems directly related to the CLI, please add an [issue on GitHub](https://github.com/getstream/stream-cli/issues).

For other issues, submit a [support ticket](https://getstream.io/support).

## 📚 Changelog

As with any project, things are always changing. If you're interested in seeing what's changed in the Stream CLI, the changelog for this project can be found [here](https://github.com/getstream/stream/blob/master/CHANGELOG.md).

## 🏗 Installation

The Stream CLI is easy to install. You have the option to use [homebrew](https://brew.sh) (preferred) if you're on macOS, download a single binary for your OS of choice, or download via npm.

#### Homebrew

```sh-session
$ brew install stream
```

#### NPM

```sh-session
$ npm install -g getstream-cli
```

#### Binaries

-   [Mac OS X](https://github.com/GetStream/stream-cli/releases)
-   [Linux](https://github.com/GetStream/stream-cli/releases)
-   [Windows](https://github.com/GetStream/stream-cli/releases)

> Note: Binaries are generally updated less frequently than Homebrew.

## 🚀 Getting Started

In order to initialize the CLI, please have your Stream API key and secret ready. Run the following command:

```sh-session
$ stream config:set
```

You will then be prompted to enter your API key and secret.

```sh-session
$ ? What's your API key? 🔒
$ ? What's your API secret? 🔒
```

Now, you're good to go!

```sh-session
$ Your config has been generated! 🚀
```

> Note: Your API key and secret can be found on the [Stream Dashboard](https://getstream.io/dashboard) and is specific to your application.

## 🔨 Commands

Basic commands use the following syntax:

```sh-session
$ stream command:COMMAND --arg1 "foo" --arg2 "bar"
```

Whereas commands for specific products use subcommands:

```sh-session
$ stream command:COMMAND:SUBCOMMAND --arg1 "foo" --arg2 "bar"
```

### Root Commands

-   [`$ stream autocomplete`](#-stream-autocomplete)
-   [`$ stream commands`](#-stream-commands)
-   [`$ stream help`](#-stream-help)

### Config Commands

-   `$ stream config`
    -   [`$ set`](#-stream-configset)
    -   [`$ get`](#-stream-configget)
    -   [`$ destroy`](#-stream-configdestroy)

### Chat Commands

-   `$ stream chat:channel`
    -   [`$ edit`](#-stream-chatchanneledit)
    -   [`$ get`](#-stream-chatchannelget)
    -   [`$ init`](#-stream-chatchannelinit)
    -   [`$ list`](#-stream-chatchannellist)
    -   [`$ query`](#-stream-chatchannelquery)
-   `$ stream chat:message`
    -   [`$ send`](#-stream-chatmessagesend)
    -   [`$ remove`](#-stream-chatmessageremove)
-   `$ stream chat:moderate`
    -   [`$ ban`](#-stream-chatmoderateban)
    -   [`$ flag`](#-stream-chatmoderateflag)
    -   [`$ mute`](#-stream-chatmoderatemute)
-   `$ stream chat:user`
    -   [`$ add`](#-stream-chatuseradd)
    -   [`$ remove`](#-stream-chatuserremove)

### `$ stream autocomplete`

Initialize autocomplete for the CLI **(recommended)**

```sh-session
$ stream autocomplete
```

### `$ stream commands`

Display all commands

```sh-session
$ stream commands
```

### `$ stream help`

Get help with the CLI

```sh-session
$ stream help
```

### `$ stream config:set`

Initialize a new configuration file.

```sh-session
USAGE
  $ stream config:set

OPTIONS
  -k, --key=key        API key for config.
  -s, --secret=secret  API secret for config.
```

### `$ stream config:get`

Retrieve your configuration settings.

```sh-session
USAGE
  $ stream config:get
```

### `$ stream config:destroy`

Destroy your configuration file.

```sh-session
USAGE
  $ stream config:destroy

OPTIONS
  -f, --force=force  Force remove config.
```

> Note: The command `stream config:set` must be called to re-initialize the configuration.

### `$ stream chat:channel:edit`

```sh-session
Edit a specific channel.

USAGE
  $ stream chat:channel:edit

OPTIONS
  -d, --data=data                                       Additional data as JSON.
  -i, --id=id                                           (required) The ID of the channel you wish to edit.
  -m, --members=members                                 Comma separated list of members.
  -n, --name=name                                       (required) Name of the channel room.
  -r, --reason=reason                                   (required) Reason for changing channel.
  -t, --type=livestream|messaging|gaming|commerce|team  (required) Type of channel.
  -u, --url=url                                         URL to the channel image.                                       URL to channel image.
```

### `$ stream chat:channel:get`

```sh-session
Get a specific channel by ID.

USAGE
  $ stream chat:channel:get

OPTIONS
  -i, --id=id                                           (required) The channel ID you wish to get.
  -t, --type=livestream|messaging|gaming|commerce|team  (required) Type of channel.
```

### `$ stream chat:channel:init`

```sh-session
Create a new channel.

USAGE
  $ stream chat:channel:init

OPTIONS
  -d, --data=data                                       Additional data as a JSON.
  -i, --id=id                                           (required) [default: <UUID>] A unique ID for the channel you wish to create.
  -m, --members=members                                 Comma separated list of members to add to the channel.
  -n, --name=name                                       (required) Name of the channel room.
  -t, --type=livestream|messaging|gaming|commerce|team  (required) Type of channel.
  -u, --image=image                                     URL to channel image.
```

### `$ stream chat:channel:list`

```sh-session
List all channels associated with your config credentials.

USAGE
  $ stream chat:channel:list
```

### `$ stream chat:channel:query`

```sh-session
Query a channel.

USAGE
  $ stream chat:channel:query

OPTIONS
  -f, --filter=filter                                   Filters to apply to the query.
  -i, --id=id                                           (required) The channel ID you wish to query.
  -s, --sort=sort                                       Sort to apply to the query.
  -t, --type=livestream|messaging|gaming|commerce|team  Type of channel.
```

### `$ stream chat:message:send`

```sh-session
Send messages to a channel.

USAGE
  $ stream chat:message:send

OPTIONS
  -a, --attachments=attachments                         A JSON payload of attachments to send with the message.
  -i, --id=id                                           The channel ID that you would like to send a message to.
  -m, --message=message                                 (required) The message you would like to send as plaintext.
  -t, --type=livestream|messaging|gaming|commerce|team  (required) The type of channel.
  -u, --user=user                                       (required) [default: *] The ID of the acting user sending the message.
```

### `$ stream chat:message:remove`

```sh-session
Remove messages from a channel.

USAGE
  $ stream chat:message:remove

OPTIONS
  -i, --id=id  (required) The channel ID that you would like to remove.
```

### `$ stream chat:moderate:ban`

```sh-session
Ban users from a channel indefinitely or based on a per minute timeout.

USAGE
  $ stream chat:moderate:ban

OPTIONS
  -r, --reason=reason    (required) A reason for adding a timeout.
  -t, --timeout=timeout  (required) [default: 60] Duration of timeout in minutes.
  -u, --user=user        (required) The ID of the offending user.
```

### `$ stream chat:moderate:flag`

```sh-session
Flag users and messages within a channel.

USAGE
  $ stream chat:moderate:flag

OPTIONS
  -m, --message=message  The ID of the message you want to flag.
  -u, --user=user        The ID of the offending user.
```

### `$ stream chat:moderate:mute`

```sh-session
Mute users within a channel.

USAGE
  $ stream chat:moderate:mute

OPTIONS
  -u, --user=user  (required) The ID of the offending user.
```

### `$ stream chat:user:add`

```sh-session
Add a user to a channel.

USAGE
  $ stream chat:user:add

OPTIONS
  -i, --id=id                  (required) Channel name.
  -m, --moderators=moderators  (required) Comma separated list of moderators to add.
  -t, --type=type              (required) Channel type.
```

### `$ stream chat:user:remove`

```sh-session
Remove a user from a channel.

USAGE
  $ stream chat:user:remove

OPTIONS
  -i, --id=id                  (required) Channel name.
  -m, --moderators=moderators  (required) Comma separated list of moderators to remove.
  -t, --type=type              (required) Channel type.
```

## 📣 Feedback

If you have any suggestions or just want to let us know what you think of the Stream CLI, please send us a message at support@getstream.io or create a [GitHub Issue](https://github.com/getstream/stream-cli/issues).
