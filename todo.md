Task 1  GitHub Actions CI/CD Pipeline  —  30 minutes
 
Tests: CI/CD pipeline design, Docker knowledge, deployment automation, rollback thinking.
Instructions to candidate:
• Fork or clone a provided simple Node.js Express app repository (evaluator shares repo link).
• Write a GitHub Actions workflow (.github/workflows/deploy.yml) that does the following: on every push to main  
(1) installs dependencies and runs tests, 
(2) builds a Docker image, 
(3) pushes the image to Docker Hub or GitHub Container Registry, 
(4) SSH-deploys to a remote server using an action (e.g. appleboy/ssh-action), 
(5) includes a smoke test step that curls the health endpoint after deployment.
• Add a manual rollback job that can be triggered via workflow_dispatch to redeploy the previous image tag.
• Handle secrets correctly  no hardcoded credentials anywhere.
 
What to evaluate:
• Correct YAML structure and workflow trigger setup
• Docker build and push steps are correct and efficient (multi-stage build is a strong signal)
• Secrets referenced via GitHub Secrets, not hardcoded
• Rollback job is present and logically sound
• Deployment step handles failure gracefully (exits on error)
• Candidate explains their choices as they go  thinking aloud is a strong positive signal


---

I