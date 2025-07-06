provider "aws" {
  region = var.aws_region
}

resource "aws_ecr_repository" "nestjs" {
  name = var.ecr_repository_name
}

resource "aws_iam_user" "github_actions" {
  name = "github-actions"
}

resource "aws_iam_user_policy" "ecr_policy" {
  name = "GitHubActionsECRPolicy"
  user = aws_iam_user.github_actions.name

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "ecr:GetAuthorizationToken",
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:PutImage",
          "ecr:InitiateLayerUpload",
          "ecr:UploadLayerPart",
          "ecr:CompleteLayerUpload",
        ],
        Effect   = "Allow",
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_access_key" "github_actions_key" {
  user = aws_iam_user.github_actions.name
}
