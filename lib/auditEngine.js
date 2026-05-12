export function runAudit(tools) {
  return tools.map((tool) => {
    if (
      tool.name === "Cursor" &&
      tool.plan === "Business" &&
      tool.seats <= 2
    ) {
      return {
        ...tool,
        recommendation: "Downgrade to Pro",
        savings: 20,
        reason: "Business is overkill for small teams."
      };
    }

    if (
      tool.name === "ChatGPT" &&
      tool.plan === "Team" &&
      tool.seats === 1
    ) {
      return {
        ...tool,
        recommendation: "Switch to Plus",
        savings: 5,
        reason: "Team plan is unnecessary for one user."
      };
    }

    if (
      tool.name === "Claude" &&
      tool.plan === "Max"
    ) {
      return {
        ...tool,
        recommendation: "Switch to Pro",
        savings: 10,
        reason: "Max plan is costly for normal workloads."
      };
    }

    return {
      ...tool,
      recommendation: "Keep current plan",
      savings: 0,
      reason: "Current plan seems optimized."
    };
  });
}