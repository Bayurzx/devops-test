# CI/CD Pipeline — 15 Min Sprint

> GHCR (`ghcr.io`) • `appleboy/ssh-action` • GitHub Actions

## 1. CI Job (5 min)
- [ ] Checkout → Setup Node 20 → `npm ci` → `npm test`

## 2. Build & Push to GHCR (4 min)
- [ ] Login to `ghcr.io` via `docker/login-action` using `GITHUB_TOKEN`
- [ ] Build & push with `docker/build-push-action` — tags: `ghcr.io/${{ github.repository }}:${{ github.sha }}` + `:latest`

## 3. Deploy + Smoke Test (3 min)
- [ ] SSH via `appleboy/ssh-action` — pull image, stop/rm old container, run new
- [ ] Smoke test: `curl -f http://${{ secrets.DEPLOY_HOST }}:3000/health`

## 4. Rollback Job (2 min)
- [ ] Add `workflow_dispatch` trigger with `rollback_tag` input
- [ ] Rollback job: SSH pull + redeploy the specified tag

## 5. Push & Verify (1 min)
- [ ] No hardcoded creds — all via `${{ secrets.* }}` or `${{ github.token }}`
- [ ] Commit, push, check Actions tab

---

**Secrets needed:** `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`
**Auto-provided:** `GITHUB_TOKEN` (no setup needed for GHCR)
