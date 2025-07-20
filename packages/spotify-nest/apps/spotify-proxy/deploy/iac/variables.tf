variable "environment" {}

variable "aws_region" {
  default = "sa-east-1"
}

variable "ecr_repository_name" {
  default = "spotify-nestjs"
}

variable "container_port" {
  default = 3000

}
