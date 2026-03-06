# Wix Blog

Actionable playbook for Wix Blog APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/business-solutions/blog`

## Operation Registry

- `tools/http/operations/wix-blog.json`

## Operation Cards

### 1) List Posts

- **Operation id**: `wix-blog.list-posts`
- **HTTP**: `GET https://www.wixapis.com/v3/posts`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-blog.list-posts
```

### 2) Get Post

- **Operation id**: `wix-blog.get-post`
- **HTTP**: `GET https://www.wixapis.com/v3/posts/{postId}`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-blog.get-post --params '{"postId":"<post-guid>"}'
```

### 3) Query Posts

- **Operation id**: `wix-blog.query-posts`
- **HTTP**: `POST https://www.wixapis.com/v3/posts/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-blog.query-posts --body '{"query":{"paging":{"limit":50}}}'
```

### 4) Query Categories

- **Operation id**: `wix-blog.query-categories`
- **HTTP**: `POST https://www.wixapis.com/blog/v3/categories/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-blog.query-categories --body '{"query":{"paging":{"limit":50}}}'
```

### 5) Query Tags

- **Operation id**: `wix-blog.query-tags`
- **HTTP**: `POST https://www.wixapis.com/v3/tags/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-blog.query-tags --body '{"query":{"paging":{"limit":50}}}'
```

## Guardrails

- Keep query paging explicit to avoid oversized responses.
- Confirm app/site has Blog enabled before relying on post/category/tag data.
- Add additional blog operations only to `tools/http/operations/wix-blog.json`.
