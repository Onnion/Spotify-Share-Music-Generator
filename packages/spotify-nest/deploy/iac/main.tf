provider "aws" {
  region = var.aws_region
}

resource "aws_ecr_repository" "nestjs" {
  name = var.ecr_repository_name
}