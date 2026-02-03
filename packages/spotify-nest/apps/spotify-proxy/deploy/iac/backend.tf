terraform {
  backend "s3" {
    bucket = "spotify-share-music-generator.tfstate"
    region = "sa-east-1"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}
