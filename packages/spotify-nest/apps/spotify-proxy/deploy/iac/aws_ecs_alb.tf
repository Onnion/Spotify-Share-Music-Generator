
resource "aws_lb" "spotify_nestjs_alb" {
  name               = "${var.ecr_repository_name}-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.spotify_nestjs.id]
  subnets            = module.vpc.public_subnets
}

resource "aws_lb_target_group" "spotify_nestjs_tg" {
  name        = "${var.ecr_repository_name}-tg"
  port        = var.container_port
  protocol    = "HTTP"
  vpc_id      = module.vpc.vpc_id
  target_type = "ip"
  health_check {
    path                = "/"
    protocol            = "HTTP"
    matcher             = "200-399"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }
}

resource "aws_lb_listener" "spotify_listener" {
  load_balancer_arn = aws_lb.spotify_nestjs_alb.arn
  port              = 80
  protocol          = "HTTP"
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.spotify_nestjs_tg.arn
  }
}
