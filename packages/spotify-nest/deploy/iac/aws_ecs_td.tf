# resource "aws_iam_role" "ecs_task_execution_role" {
#   name = "${var.ecr_repository_name}-ecs-execution"

#   assume_role_policy = jsonencode({
#     Version = "2012-10-17",
#     Statement = [{
#       Effect = "Allow",
#       Principal = {
#         Service = "ecs-tasks.amazonaws.com"
#       },
#       Action = "sts:AssumeRole"
#     }]
#   })
# }

# resource "aws_iam_role_policy_attachment" "ecs_task_execution_attach" {
#   role       = aws_iam_role.ecs_task_execution_role.name
#   policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
# }

resource "aws_ecs_task_definition" "spotify_nestjs_td" {
  family                   = "${var.ecr_repository_name}-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  execution_role_arn       = "arn:aws:iam::544893998937:policy/TerraformECSPermissionLimited"
  cpu                      = "256"
  memory                   = "512"
  container_definitions    = file("${path.module}/task_definition/${var.environment}.json")
}
