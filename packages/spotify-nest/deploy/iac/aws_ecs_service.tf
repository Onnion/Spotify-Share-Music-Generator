resource "aws_ecs_cluster" "spotify_nestjs_cluster" {
  name = "${var.ecr_repository_name}-cluster"
}

resource "aws_ecs_task_definition" "spotify_nestjs_td" {
  family                   = "${var.ecr_repository_name}-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  container_definitions    = file("${path.module}/task_definition/${var.environment}.json")
}

resource "aws_ecs_service" "spotify_service" {
  name            = "${var.ecr_repository_name}-service"
  cluster         = aws_ecs_cluster.spotify_nestjs_cluster.id
  task_definition = aws_ecs_task_definition.spotify_nestjs_td.arn
  launch_type     = "FARGATE"
  desired_count   = 1

  network_configuration {
    subnets          = module.vpc.private_subnets
    security_groups  = [aws_security_group.spotify_nestjs.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.spotify_nestjs_tg.arn
    container_name   = "nestjs"
    container_port   = var.container_port
  }
  depends_on = [aws_lb_listener.spotify_listener]
}
