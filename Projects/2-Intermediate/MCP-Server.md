# Application Name

**Tier:** 2-Intermediate

A simple **Model Context Protocol (MCP) Server** that implements a part of the **MCP RPC Protocol** and integrates with **Claude Desktop**.  
The goal of this project is to create a small automation tool that communicates with Claude through the MCP server interface.  
The server exposes one or more tool that automate a task (e.g., tasks like file lookup, note retrieval, or text formatting).

### Purpose

The purpose of this application is to learn how to:
- Implement an MCP-compatible server.
- Use the RPC Protocol for structured communication.
- Integrate a custom backend tool with Claude Desktop.
- Automate a real-world tool or workflow (e.g., a CLI utility, data fetcher, or formatter).

This project helps developers understand how modern LLMs like Claude communicate with local tools and how to extend their functionality via custom protocols.

### Resources Needed

- **Claude Desktop** (required to test MCP server integration)
- **Python or Node.js** (depending on chosen implementation)
- **Simple RPC Protocol documentation**
- **Anthropic MCP documentation**
- Optional: Any local tool you wish to automate (e.g., a note manager, CLI script, or file explorer)

---

## User Stories

- [ ] User can start the MCP server locally.
- [ ] User can define one or more RPC commands (e.g., "get_notes", "format_text").
- [ ] User can connect Claude Desktop to the running server.
- [ ] User can trigger commands via Claude and receive responses in real time.

---

## Bonus Features

- [ ] User can configure the server to load available commands dynamically from a config file.
- [ ] User can add authentication or API key support for secure commands.
- [ ] User can implement logging and metrics for each command call.
- [ ] User can extend the protocol with streaming responses or async tasks.
- [ ] User can support multiple client connections simultaneously.
- [ ] User can access custom prompt templates that the server provides.

---

## Useful Links and Resources

- [Model Context Protocol (MCP) – Anthropic Docs](https://docs.claude.com/en/docs/mcp)
- [Claude Desktop Integration Guide](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)
- [MPC Specification](https://modelcontextprotocol.io/specification/2025-03-26)
- [Python JSON-RPC library (json-rpc)](https://pypi.org/project/json-rpc/)
- [Node JSON-RPC 2.0 library](https://www.npmjs.com/package/jsonrpc-lite)

---

## Example Projects

- [Anthropic Example MCP Server (GitHub)](https://modelcontextprotocol.io/examples)
- [JSON-RPC Python Server Example](https://github.com/pavlov99/json-rpc)
- [Claude Desktop Plugin Example (Community)](https://github.com/topics/mcp-server)
