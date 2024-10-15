module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "require TODO comments to have an issue number",
      category: "Best Practices",
      recommended: false,
    },
    schema: [
      {
        type: "object",
        properties: {
          pattern: {
            type: "string",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create: function (context) {
    const options = context.options[0] || {};
    const issuePattern = options.pattern || "JIRA-\\d+";
    const pattern = `(T|t)(O|o)(D|d)(O|o).*${issuePattern}.*`;
    const jiraIssueRegex = new RegExp(pattern);

    return {
      Program() {
        const sourceCode = context.getSourceCode();
        const comments = sourceCode.getAllComments();

        comments.forEach((comment) => {
          if (comment.value.toUpperCase().includes("TODO")) {
            if (!jiraIssueRegex.test(comment.value)) {
              context.report({
                node: comment,
                message: `TODO comment must include an issue number in the format ${issuePattern}`,
              });
            }
          }
        });
      },
    };
  },
};
