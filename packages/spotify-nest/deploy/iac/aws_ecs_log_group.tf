resource "aws_cloudwatch_log_group" "spotify_nestjs" {
  name              = "/ecs/${var.ecr_repository_name}"
  retention_in_days = 14
}
