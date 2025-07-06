resource "aws_s3_bucket" "terraform_state" {
  bucket = "spotify-share-music-generator.tfstate"

  lifecycle {
    prevent_destroy = true
  }

  tags = {
    Name = "Terraform State Bucket"
  }
}
