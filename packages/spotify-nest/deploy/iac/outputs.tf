output "ecr_url" {
  value = aws_ecr_repository.spotify_nestjs.repository_url
}

output "log_group_name" {
  value = aws_cloudwatch_log_group.spotify_nestjs.name
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.spotify_nestjs_cluster.name
}

