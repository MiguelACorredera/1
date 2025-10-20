# Log Analyzer App

**Tier:** 3-Advanced

Big logs shouldn’t slow you down. This app helps you open, search and filter multi-gigabyte log files without loading everything into memory. It streams the file, detects common formats and lets you quickly spot errors, spikes and patterns.

- What is the purpose of this application?
  - Make it simple to sift through huge logs, find what matters fast and export results.
- Are there any resources needed in order to complete the project?
  - Sample logs (Apache/Nginx access logs, JSON Lines app logs, syslog)
  - A charting library and a virtualized list component
  - Docs for streaming file I/O and regular expressions

## User Stories

- [ ] User can open very large local log files (1–10+ GB) and see progress
- [ ] User can filter by time range using start/end timestamp pickers
- [ ] User can search by text and regex with a case sensitivity toggle
- [ ] User can auto-detect or choose the log format (plain text, JSON Lines, web server, syslog)
- [ ] User can switch views: raw lines, parsed table (fields) and summary dashboard
- [ ] User can highlight matches and jump to next/previous match
- [ ] User can collapse or expand multi-line entries (e.g. stack traces)
- [ ] User can tail the file to follow new lines as they’re written
- [ ] User can merge multiple files into a single timeline sorted by timestamp
- [ ] User can export filtered results to CSV, JSON or NDJSON

## Bonus features

- [ ] User can build a lightweight on-disk index to speed up repeat queries
- [ ] User can use a simple query language (e.g. level=ERROR and message~"timeout")
- [ ] User can group similar messages and show top recurring patterns
- [ ] User can view a time histogram with zoom and pan
- [ ] User can detect spikes or anomalies over rolling windows
- [ ] User can stream logs from remote sources (HTTP/S3) using range requests
- [ ] User can save sessions (file + filters + time window) and reopen later
- [ ] User can run a CLI mode for headless analysis and export

## Useful links and resources

- [Node.js Streams](https://nodejs.org/api/stream.html)
- [fs.createReadStream](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)
- [Go bufio](https://pkg.go.dev/bufio)
- [Regular Expressions (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [react-window](https://github.com/bvaughn/react-window)
- [react-virtualized](https://github.com/bvaughn/react-virtualized)
- [NDJSON](https://ndjson.org/)
- [Apache Combined Log Format](https://httpd.apache.org/docs/2.4/logs.html#combined)
- [Node.js zlib](https://nodejs.org/api/zlib.html)

## Example projects

- [GoAccess](https://goaccess.io/)
- [lnav](https://lnav.org/)
- [Kibana](https://www.elastic.co/kibana/)