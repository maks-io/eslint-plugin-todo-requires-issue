# eslint-plugin-todo-requires-issue 📋

[![Version](https://img.shields.io/npm/v/eslint-plugin-todo-requires-issue)](https://www.npmjs.com/package/eslint-plugin-todo-requires-issue)

Require `TODO` comments to have an issue number.

Can be used with whatever issue number syntax you have, like `JIRA-123`, `MY_PROJECT_485`, etc. - configuration via RegExp pattern.

## Example

The following example uses the default pattern for Jira issues: `JIRA-\d+`

```typescript
// TODO <--- ❌ throws warning/error (issue id missing)
// TODO some text <--- ❌ throws warning/error (issue id missing)
// TODO some text JIRA-4832 <--- ✅ ok
// TODO some text jira-4832 <--- ❌ throws warning/error (issue id test is case sensitive)
// todo some text JIRA-4832 <--- ✅ ok ('todo' string test is case insensitive)
// todo some text jira-4832 <--- ❌ throws warning/error (issue id test is case sensitive)
// toDO some text JIRA-4832 <--- ✅ ok ('todo' string test is case insensitive)
// JIRA-4832 TODO some text <--- ❌ throws warning/error (issue id must follow AFTER 'todo' string)
// TO DO <--- 🌝 ignored, plugin only checks for continuous 'todo' strings
```

## Installation

Via npm:

```bash
npm i eslint-plugin-todo-requires-issue --save-dev
```

Via yarn:

```bash
yarn add -D eslint-plugin-todo-requires-issue
```

## Configuration / Usage

Depending on how you configured your eslint instance, the following configuration might look a bit different.

```javascript
// .eslintrc.js

module.exports = {
  // ...
  plugins: [
    "todo-requires-issue",
    // ... maybe other plugins here ...
  ],
  rules: {
    "todo-requires-issue/check": ["warn", { pattern: "MY_PROJECT_\\d+" }],
    // ... maybe other rules here ...
  },
};
```

This configuration would make eslint throw warnings whenever a `TODO` comment is found without any included `MY_PROJECT_<SOME_ISSUE_NUMBER>` string.

## If you enjoy using this...

<a href="https://www.buymeacoffee.com/maks_io" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 48px !important;" ></a>
