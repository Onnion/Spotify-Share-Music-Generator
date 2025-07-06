resource "aws_ecs_task_definition" "spotify_nestjs_td" {
  family                   = "${var.ecr_repository_name}-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  cpu                      = "256"
  memory                   = "512"
  container_definitions    = file("${path.module}/task_definition/${var.environment}.json")
}
